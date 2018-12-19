import { LetterMatrix, positionChainToWord } from '../../src/core/lettermatrix';

describe('letters', () => {
  it('should create', () => {
    expect(new LetterMatrix('', 0, 0)).toBeTruthy();
  });

  it('should have all property', () => {
    const letters = 'abc';
    const cols = 1;
    const rows = 1;
    const lm = new LetterMatrix(letters, cols, rows);
    expect(lm.letters).toEqual(letters);
    expect(lm.cols).toEqual(cols);
    expect(lm.rows).toEqual(rows);
  });
});

describe('positionChainToWord', () => {
  it('should convert empty chain to empty word', () => {
    expect(positionChainToWord('abc', [])).toBe('');
  });

  it('should convert chain to word well', () => {
    expect(positionChainToWord('abc', [0, 1, 2])).toBe('abc');
    expect(positionChainToWord('abc', [0, 1, 1, 1])).toBe('abbb');
  });
});


