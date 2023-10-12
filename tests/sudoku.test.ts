import { findQuadrant, validateBoard } from "../pages/sudoku";

test("validates rows", () => {
  const board = [[0, 0, 1, 2, 1]];

  const { failedRows } = validateBoard(board);
  expect(failedRows).toEqual([0]);
});

test("validates columns", () => {
  const board = [
    [0, 0, 1, 2, 7],
    [0, 0, 3, 2, 8],
  ];

  const { failedRows, failedColumns } = validateBoard(board);
  expect(failedRows).toEqual([]);
  expect(failedColumns).toEqual([3]);
});

test("validates columns and rows", () => {
  const board = [
    [0, 0, 1, 2, 2],
    [0, 0, 3, 2, 8],
  ];

  const { failedRows, failedColumns } = validateBoard(board);
  expect(failedRows).toEqual([0]);
  expect(failedColumns).toEqual([3]);
});

test("validates row real scenario", () => {
const board = [
  [0, 0, 0, 0, 0, 8, 0, 5, 7],
  [5, 1, 3, 0, 7, 0, 1, 2, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 6, 0, 0, 2, 9, 0],
  [3, 0, 9, 0, 0, 1, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 9, 0, 0],
  [0, 4, 0, 3, 0, 0, 7, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 6],
];

  const { failedRows} = validateBoard(board);
  expect(failedRows).toEqual([1]);
});

test('get quadrants', () => {
    const result = findQuadrant(0,0)
    expect(result).toEqual(0)
})

test('get quadrants', () => {
    const result = findQuadrant(0,3)
    expect(result).toEqual(1)
})

test('get quadrants', () => {
    const result = findQuadrant(8,8)
    expect(result).toEqual(8)
})

test('get quadrants', () => {
    const result = findQuadrant(4,4)
    expect(result).toEqual(4)
})

test("validates quadrant real scenario", () => {
const board = [
  [0, 0, 0, 0, 0, 8, 0, 5, 7],
  [5, 1, 3, 0, 7, 0, 1, 2, 5],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 6, 0, 0, 2, 9, 0],
  [3, 0, 9, 0, 0, 1, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 9, 0, 0],
  [0, 4, 0, 3, 0, 0, 7, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 6],
];

  const { failedQuadrants} = validateBoard(board);
  expect(failedQuadrants).toEqual([0, 2]);
});

test("validates finished board", () => {
  const board = [
    [4, 3, 5, 2, 6, 9, 7, 8, 1],
  ]
  const solution = [
    [4, 3, 5, 2, 6, 9, 7, 8, 1],
  ]
  const { finished } = validateBoard(board, solution);
  expect(finished).toEqual(true);
})