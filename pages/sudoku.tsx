import { useEffect, useReducer } from "react";
import styles from "./sudoku.module.css";
import axios from "axios";
import cx from "classnames";

type ValidationErrors = {
  failedRows: number[];
  failedColumns: number[];
  failedQuadrants: number[];
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

export const validateBoard = (board: number[][]): ValidationErrors => {
  let failedRows: number[] = [];
  let failedColumns: number[] = [];
  let failedQuadrants: number[] = [];

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

  return { failedRows, failedColumns, failedQuadrants };
};

type State = {
  board: number[][];
  original: number[][];
  isLoading: boolean;
  failedRows: number[];
  failedColumns: number[];
  failedQuadrants: number[];
};

const initialState = (): State => {
  return {
    isLoading: true,
    board: [],
    original: [],
    failedColumns: [],
    failedRows: [],
    failedQuadrants: [],
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
};

type Action = NewValueAction | NewBoardAction;

const reducer = (state: State, action: Action): State => {
  console.log(state);
  console.log(action);
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
      const { failedColumns, failedRows, failedQuadrants } =
        validateBoard(newBoard);
      return {
        ...state,
        board: newBoard,
        failedColumns,
        failedRows,
        failedQuadrants,
      };
    case "newBoard":
      return {
        ...state,
        isLoading: false,
        board: [...action.board],
        original: [...action.board],
      };
  }
};

export interface Root {
  newboard: Newboard;
}

export interface Newboard {
  grids: Grid[];
}

export interface Grid {
  value: number[][];
}

const Sudoku = () => {
  const [state, dispatch] = useReducer(reducer, initialState());
  console.log("state", state);
  useEffect(() => {
    axios
      .get<Root>(
        "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,difficulty}}}"
      )
      .then((data) => {
        const board = data.data.newboard.grids[0].value;
        dispatch({ type: "newBoard", board: board });
      })
      .catch((error) => {
        console.log("here is error", error);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {state.isLoading ? (
          <div> Loading...</div>
        ) : (
          state.board.map((row, i) => {
            return (
              <>
                <div className={cx(styles.row, {})} key={i}>
                  {row.map((column, j) => {
                    const isDefault = state.original[i][j] !== 0;
                    const quadrant = findQuadrant(i, j);
                    const isFailed =
                      state.failedRows.includes(i) ||
                      state.failedColumns.includes(j) ||
                    state.failedQuadrants.includes(quadrant);
                    return (
                      <>
                        <div
                          className={cx(styles.cell, {
                            [styles.default]: isDefault,
                            [styles.failed]: isFailed,
                          })}
                          key={j}
                        >
                          <input
                            className={styles.input}
                            type="number"
                            defaultValue={column || ""}
                            style={{ width: "3rem" }}
                            readOnly={isDefault}
                            disabled={isDefault}
                            onBlur={(e) => {
                              console.log("is default", isDefault);
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
                      </>
                    );
                  })}
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Sudoku;
