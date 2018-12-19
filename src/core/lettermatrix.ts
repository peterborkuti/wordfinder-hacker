/**
 * Stores the input letters in row-order. So
 * ABC
 * DEF
 * GHI
 *
 * Should be created as new LetterMatrix('ABCDEFGHI')
 */
class LetterMatrix {
  constructor(readonly letters: string, readonly cols: number, readonly rows: number) {
  }
}

function positionChainToWord(letters: string, positionChain: number[]): string {
  return positionChain.map(i => letters[i]).join('');
}

export { LetterMatrix, positionChainToWord };
