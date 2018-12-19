import { growWord } from '../../src/core/process';
import { growPositionChains, growPositionChain } from '../../src/core/process';
import { Dictionary, validWordCandidate, getWords } from '../../src/core/dictionary';
import { LetterMatrix, positionChainToWord } from '../../src/core/lettermatrix';

describe('growPositionChain', () => {
  it('should grow an empty positionChain with all the possible positions', () => {
    const letters = new LetterMatrix('012', 3, 1);
    const oldPositionChain = [];
    const newPositionChain = growPositionChain(oldPositionChain, letters);
    expect(newPositionChain).toEqual([[0], [1], [2]]);
  });

  it('should grow a positionChain with the neighbours of its last position', () => {
    const letters = new LetterMatrix('abcdefghi', 3, 3);
    const oldPositionChain = [4];
    const positionChains = growPositionChain(oldPositionChain, letters);
    expect(positionChains).toEqual(
      [
        [4, 0], [4, 1], [4, 2],
        [4, 3],         [4, 5],
        [4, 6], [4, 7], [4, 8]
      ]);
  });

  it('should not include visited positions', () => {
    const letters = new LetterMatrix('abcdefghi', 3, 3);
    const visitedPosition = 0;
    const lastPosition = 4;
    const oldPositionChain = [visitedPosition, lastPosition];
    const positionChains = growPositionChain(oldPositionChain, letters);
    expect(positionChains).toEqual(
      [
                   [0, 4, 1], [0, 4, 2],
        [0, 4, 3],            [0, 4, 5],
        [0, 4, 6], [0, 4, 7], [0, 4, 8]
      ]);
  });

  it('should not include invalid positions', () => {
    const letters = new LetterMatrix('abcdefghi', 3, 3);
    const oldPositionChain = [0];
    const positionChains = growPositionChain(oldPositionChain, letters);
    expect(positionChains).toEqual(
      [
                [0, 1],
        [0, 3], [0, 4]
      ]);
  });
});

describe('just a test', () => {
it('should print something', () => {
    const letters = new LetterMatrix('abcdbagxhj', 3, 3);
    const dict = new Dictionary(['abba']);

    const arr = [];
    let cc = [[]];
    for (let i = 0; i < letters.letters.length; i++) {
      cc = cc.map(
            c => growPositionChain(c, letters).
                 filter(p => validWordCandidate(positionChainToWord(letters.letters, p), dict))).
            reduce((a, c) => a.concat(c), []);
      console.log(getWords(cc, letters.letters, dict));
    }

  });
});

describe('growWord', () => {
  it('should grow an empty word with empty dictionary or empty letters with one space', () => {
    const letters = new LetterMatrix('', 0, 0);
    const dictionary = new Dictionary([]);
    const word = '';
    const [words, positions] = growWord(word, [], letters, dictionary);
    expect(words.length).toEqual(1);
    expect(words[0]).toBe(' ');
    expect(positions.length).toEqual(1);
    expect(positions[0][0]).toEqual(-1);
  });

  it('should grow any word with the neighbours of its last character', () => {
    const letters = new LetterMatrix('abcdefghi', 3, 3);
    const dictionary = new Dictionary([]);
    const word = 'xyz';
    const [words, positions] = growWord(word, [], letters, dictionary);
    expect(words.length).toEqual(word.length + 1);
    expect(words[0]).toBe(word + ' ');
    expect(positions.length).toEqual(1);
    expect(positions[0][0]).toEqual(-1);
  });
});
