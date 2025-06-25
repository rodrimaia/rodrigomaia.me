export type CellValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type SudokuBoard = CellValue[][];
type QuadrantIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface ValidationResult {
  readonly failedRows: readonly number[];
  readonly failedColumns: readonly number[];
  readonly failedQuadrants: readonly number[];
  readonly finished: boolean;
}

const BOARD_SIZE = 9;
const QUADRANT_SIZE = 3;
const EMPTY_CELL: CellValue = 0;

class InvalidBoardError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidBoardError';
  }
}

function isValidBoard(board: unknown): board is SudokuBoard {
  if (!Array.isArray(board) || board.length !== BOARD_SIZE) {
    return false;
  }
  
  return board.every(row => 
    Array.isArray(row) && 
    row.length === BOARD_SIZE && 
    row.every(cell => typeof cell === 'number' && cell >= 0 && cell <= 9)
  );
}

export const validateBoard = (
  board: SudokuBoard,
  solution?: SudokuBoard
): ValidationResult => {
  if (!isValidBoard(board)) {
    throw new InvalidBoardError('Invalid board dimensions or values');
  }
  
  if (solution && !isValidBoard(solution)) {
    throw new InvalidBoardError('Invalid solution board dimensions or values');
  }

  if (solution && boardsAreEqual(board, solution)) {
    return {
      failedColumns: [],
      failedQuadrants: [],
      failedRows: [],
      finished: true,
    } as const;
  }

  const failedRows = findFailedRows(board);
  const failedColumns = findFailedColumns(board);
  const failedQuadrants = findFailedQuadrants(board);

  return { 
    failedRows, 
    failedColumns, 
    failedQuadrants, 
    finished: false 
  } as const;
};

function boardsAreEqual(board1: SudokuBoard, board2: SudokuBoard): boolean {
  // Using JSON.stringify for simplicity - not the best performance but much easier to understand
  // than nested loops comparing each element
  return JSON.stringify(board1) === JSON.stringify(board2);
}

function findFailedRows(board: SudokuBoard): readonly number[] {
  return board
    .map((row, rowIndex) => ({ row, rowIndex }))
    .filter(({ row }) => hasDuplicates(row.filter(cell => cell !== EMPTY_CELL)))
    .map(({ rowIndex }) => rowIndex);
}

function findFailedColumns(board: SudokuBoard): readonly number[] {
  return Array.from({ length: BOARD_SIZE }, (_, colIndex) => colIndex)
    .filter(colIndex => {
      const columnValues = board
        .map(row => row[colIndex])
        .filter(cell => cell !== EMPTY_CELL);
      return hasDuplicates(columnValues);
    });
}

function findFailedQuadrants(board: SudokuBoard): readonly number[] {
  const quadrantValues = collectQuadrantValues(board);
  
  return Object.entries(quadrantValues)
    .filter(([, values]) => hasDuplicates(values))
    .map(([quadrantIndex]) => Number.parseInt(quadrantIndex));
}

function collectQuadrantValues(board: SudokuBoard): Record<QuadrantIndex, CellValue[]> {
  const quadrantValues: Record<QuadrantIndex, CellValue[]> = {} as Record<QuadrantIndex, CellValue[]>;

  for (let rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex++) {
    for (let colIndex = 0; colIndex < BOARD_SIZE; colIndex++) {
      const cellValue = board[rowIndex][colIndex];
      if (cellValue !== EMPTY_CELL) {
        const quadrantIndex = findQuadrant(rowIndex, colIndex);
        if (!quadrantValues[quadrantIndex]) {
          quadrantValues[quadrantIndex] = [];
        }
        quadrantValues[quadrantIndex].push(cellValue);
      }
    }
  }

  return quadrantValues;
}

function hasDuplicates(numbers: readonly CellValue[]): boolean {
  return new Set(numbers).size !== numbers.length;
}

export function findQuadrant(row: number, column: number): QuadrantIndex {
  const columnPart = Math.floor(column / QUADRANT_SIZE);
  const rowPart = Math.floor(row / QUADRANT_SIZE) * QUADRANT_SIZE;
  
  return (columnPart + rowPart) as QuadrantIndex;
}

// Utility functions for additional functionality
export const createEmptyBoard = (): SudokuBoard => 
  Array.from({ length: BOARD_SIZE }, () => 
    Array.from({ length: BOARD_SIZE }, () => EMPTY_CELL)
  );

export const isBoardComplete = (board: SudokuBoard): boolean => 
  board.every(row => row.every(cell => cell !== EMPTY_CELL));

export const getBoardStatistics = (board: SudokuBoard) => {
  const totalCells = BOARD_SIZE * BOARD_SIZE;
  const filledCells = board.flat().filter(cell => cell !== EMPTY_CELL).length;
  const emptyCells = totalCells - filledCells;
  
  return {
    totalCells,
    filledCells,
    emptyCells,
    completionPercentage: Math.round((filledCells / totalCells) * 100)
  } as const;
};
