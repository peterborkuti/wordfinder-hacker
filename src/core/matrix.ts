function checkIndex(elemIndex: number, cols: number, rows: number): boolean {
  return elemIndex >= 0 && elemIndex < rows * cols;
}

function indexToRowCol(i: number, cols: number): [number, number] {
  const row = Math.floor(i / cols);
  const col = i - row * cols;

  return [row, col];
}

function rowColToIndex(row: number, col: number, cols: number): number {
  const i = row * cols + col;

  return i;
}

function checkCoord(row: number, col: number, rows: number, cols: number): boolean {
  return row >= 0 && col >= 0 && row < rows && col < cols;
}

function neighbours(elemIndex: number, rows: number, cols: number): number[] {
  const neighboursRelativeRowColCoords = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1]
  ];

  const coord = indexToRowCol(elemIndex, cols);
  const neighboursCoords = neighboursRelativeRowColCoords.
                              map(c => [ c[0] + coord[0], c[1] + coord[1] ]).
                              filter(c => checkCoord(c[0], c[1], rows, cols)).
                              map(c => rowColToIndex(c[0], c[1], cols));
  return neighboursCoords;
}

export { rowColToIndex, indexToRowCol, neighbours};
