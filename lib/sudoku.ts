type ValidationResult = {
  failedRows: number[];
  failedColumns: number[];
  failedQuadrants: number[];
  finished: boolean;
};

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
