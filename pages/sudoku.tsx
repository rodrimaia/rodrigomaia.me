import { useEffect, useReducer, useState } from "react";
import styles from "./sudoku.module.css";
import axios from "axios";
import cx from "classnames";
import Confetti from "react-confetti";
import { Spinner } from '@chakra-ui/react'

type ValidationResult = {
  failedRows: number[];
  failedColumns: number[];
  failedQuadrants: number[];
  finished: boolean;
};

export function findQuadrant(row: number, column: number) {
  let [columnPart, rowPart] = [0, 0];
  if ([3, 4, 5].includes(column)) {
    columnPart = 1;
  }
  if ([6, 7, 8].includes(column)) {
    columnPart = 2;
  }
  if ([3, 4, 5].includes(row)) {
    rowPart = 3;
  }

  if ([6, 7, 8].includes(row)) {
    rowPart = 6;
  }

  return columnPart + rowPart;
}

export const validateBoard = (
  board: number[][],
  solution?: number[][]
): ValidationResult => {
  let failedRows: number[] = [];
  let failedColumns: number[] = [];
  let failedQuadrants: number[] = [];

  if (solution && JSON.stringify(board) === JSON.stringify(solution)) {
    return {
      failedColumns: [],
      failedQuadrants: [],
      failedRows: [],
      finished: true,
    };
  }

  board.forEach((row, rowIndex) => {
    const rowWithoutZeros = row.filter((r) => r !== 0);
    if (new Set(rowWithoutZeros).size !== rowWithoutZeros.length) {
      failedRows.push(rowIndex);
    }
  });

  for (let i = 0; i < board[0].length; i++) {
    const columnValues = board.map((row) => row[i]).filter((r) => r !== 0);

    if (new Set(columnValues).size !== columnValues.length) {
      failedColumns.push(i);
    }
  }
  let quadrants: Record<number, number[]> = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const value = board[i][j];
      if (value !== 0) {
        const quadrant = findQuadrant(i, j);
        const quadrantRecord = quadrants[quadrant];
        if (quadrantRecord) {
          quadrantRecord.push(value);
        } else {
          quadrants[quadrant] = [value];
        }
      }
    }
  }

  for (const [quadrant, numbers] of Object.entries(quadrants)) {
    if (new Set(numbers).size !== numbers.length) {
      failedQuadrants.push(Number.parseInt(quadrant));
    }
  }

  return { failedRows, failedColumns, failedQuadrants, finished: false };
};

type State = {
  board: number[][];
  original: number[][];
  solution?: number[][];
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
  board: number[][];
  solution: number[][];
};

type Action = NewValueAction | NewBoardAction;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "changedValue":
      const { row, column, value } = action.payload;
      const newBoard = state.board.map((r, i) => {
        if (i === row) {
          return r.map((c, j) => (j === column ? value : c));
        } else {
          return r;
        }
      });
      const { failedColumns, failedRows, failedQuadrants, finished } =
        validateBoard(newBoard, state.solution);
      return {
        ...state,
        board: newBoard,
        failedColumns,
        failedRows,
        failedQuadrants,
        finished,
      };
    case "newBoard":
      return {
        ...state,
        isLoading: false,
        board: [...action.board],
        original: [...action.board],
        solution: [...action.solution],
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
                    <div
                      className={cx(styles.cell, {
                        [styles.default]: isDefault,
                        [styles.failed]: isFailed,
                        [styles.finished]: state.finished,
                      })}
                      key={i + "-" + j}
                    >
                      <input
                        className={styles.input}
                        type="number"
                        defaultValue={column || ""}
                        style={{ width: "3rem" }}
                        readOnly={isDefault}
                        disabled={isDefault}
                        onBlur={(e) => {
                          const newValueString = e.currentTarget.value;
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
                    </div>
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
  value: number[][];
  solution: number[][];
}
