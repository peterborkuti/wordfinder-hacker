import { rowColToIndex, indexToRowCol, neighbours } from '../../src/core/matrix';

describe('indexToRowCol', () => {
  it('should count row, col well', () => {
    expect(indexToRowCol(0, 4)).toEqual([0, 0]);
    expect(indexToRowCol(1, 4)).toEqual([0, 1]);
    expect(indexToRowCol(4, 4)).toEqual([1, 0]);
    expect(indexToRowCol(11, 4)).toEqual([2, 3]);
  });
});

describe('rowColToIndex', () => {
  it('should count index well', () => {
    expect(rowColToIndex(0, 0, 4)).toBe(0);
    expect(rowColToIndex(1, 0, 4)).toBe(4);
    expect(rowColToIndex(0, 1, 4)).toBe(1);
    expect(rowColToIndex(2, 3, 4)).toBe(11);
  });
});

describe('neighbours', () => {
  it('should return with neighbours', () => {
    expect(neighbours(4, 3, 3).sort()).toEqual([0, 1, 2, 3, 5, 6, 7, 8]);
    expect(neighbours(0, 3, 3).sort()).toEqual([1, 3, 4]);
    expect(neighbours(8, 3, 3).sort()).toEqual([4, 5, 7]);
  });
});

