import { useEffect, useReducer, useState } from "react";
import styles from "./sudoku.module.css";
import axios from "axios";
import cx from "classnames";
import Confetti from "react-confetti";
import { Spinner } from "@chakra-ui/react";
import { validateBoard, findQuadrant, SudokuBoard, CellValue } from "../lib/sudoku";

type State = {
  board: SudokuBoard;
  original: SudokuBoard;
  solution?: SudokuBoard;
  isLoading: boolean;
  failedRows: number[];
  failedColumns: number[];
  failedQuadrants: number[];
  finished: boolean;
};

const initialState = (): State => {
  return {
    isLoading: true,
    board: [],
    solution: undefined,
    original: [],
    failedColumns: [],
    failedRows: [],
    failedQuadrants: [],
    finished: false,
  };
};

type NewValueAction = {
  type: "changedValue";
  payload: {
    row: number;
    column: number;
    value: number;
  };
};

type NewBoardAction = {
  type: "newBoard";
  board: SudokuBoard;
  solution: SudokuBoard;
};

type Action = NewValueAction | NewBoardAction;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "changedValue":
      const { row, column, value } = action.payload;
      const newBoard: SudokuBoard = state.board.map((r, i) => {
        if (i === row) {
          return r.map((c, j) => (j === column ? value as CellValue : c));
        } else {
          return r;
        }
      });
      const { failedColumns, failedRows, failedQuadrants, finished } =
        validateBoard(newBoard, state.solution);
      return {
        ...state,
        board: newBoard,
        failedColumns: [...failedColumns],
        failedRows: [...failedRows],
        failedQuadrants: [...failedQuadrants],
        finished,
      };
    case "newBoard":
      return {
        ...state,
        isLoading: false,
        board: [...action.board] as SudokuBoard,
        original: [...action.board] as SudokuBoard,
        solution: [...action.solution] as SudokuBoard,
      };
  }
};

const Sudoku = () => {
  const [state, dispatch] = useReducer(reducer, initialState());
  useEffect(() => {
    axios
      .get<SudokuApiResponse>(
        "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,difficulty,solution}}}"
      )
      .then((data) => {
        const board = data.data.newboard.grids[0].value;
        const solution = data.data.newboard.grids[0].solution;
        dispatch({ type: "newBoard", board, solution });
      })
      .catch((error) => {
        console.error("here is error", error);
      });
  }, []);
  const [confettiEnabled, setConfettiEnabled] = useState(false);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: 0,
    height: 0,
  } as { width: number; height: number });

  useEffect(() => {
    if (state.finished) {
      setConfettiDimensions({
        width: window.screen.width,
        height: window.screen.height,
      });
      setConfettiEnabled(true);
      setTimeout(() => {
        setConfettiEnabled(false);
      }, 3000);
    }
  }, [state.finished]);

  return (
    <div className={styles.container}>
      <Confetti
        height={confettiDimensions.height}
        width={confettiDimensions.width}
        numberOfPieces={confettiEnabled ? 200 : 0}
      />
      <div className={styles.board}>
        {state.isLoading ? (
          <div className={styles.row}>
            <Spinner color="pink" size="xl" />
          </div>
        ) : (
          state.board.map((row, i) => {
            return (
              <div className={cx(styles.row, {})} key={i}>
                {row.map((column, j) => {
                  const isDefault = state.original[i][j] !== 0;
                  const quadrant = findQuadrant(i, j);
                  const isFailed =
                    state.failedRows.includes(i) ||
                    state.failedColumns.includes(j) ||
                    state.failedQuadrants.includes(quadrant);
                  return (
                    <SudokuCell
                      key={i + "-" + "j"}
                      isDefault={isDefault}
                      isFinished={state.finished}
                      isFailed={isFailed}
                      value={column}
                      onBlur={(newValueString: string) => {
                        const newValue = Number.parseInt(newValueString);
                        dispatch({
                          type: "changedValue",
                          payload: {
                            row: i,
                            column: j,
                            value: newValue || 0,
                          },
                        });
                      }}
                    />
                  );
                })}
              </div>
            );
          })
        )}
        {state.finished && (
          <div className={styles.finishedMessage}>Congratulations!</div>
        )}
      </div>
    </div>
  );
};

export default Sudoku;

interface SudokuApiResponse {
  newboard: Newboard;
}

interface Newboard {
  grids: Grid[];
}

interface Grid {
  value: SudokuBoard;
  solution: SudokuBoard;
}

type SudokuCellProps = {
  value: number;
  isDefault: boolean;
  isFinished: boolean;
  isFailed: boolean;
  onBlur: (newValue: string) => void;
};

const SudokuCell = ({
  value,
  isDefault,
  isFinished,
  isFailed,
  onBlur,
}: SudokuCellProps) => {
  return (
    <div
      className={cx(styles.cell, {
        [styles.default]: isDefault,
        [styles.failed]: isFailed,
        [styles.finished]: isFinished,
      })}
    >
      <input
        className={styles.input}
        type="number"
        defaultValue={value || ""}
        readOnly={isDefault}
        disabled={isDefault}
        onBlur={(e) => {
          onBlur(e.target.value);
        }}
      />
    </div>
  );
};
