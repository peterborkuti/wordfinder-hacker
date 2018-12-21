import { findWords, growPositionChain } from '../../src/core/process';
import { LetterMatrix } from '../../src/core/lettermatrix';
import { words } from 'src/core/words';

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

describe('findWords', () => {
  function testFindWords(e: string[], letters: string, print = true) {
    const word = findWords(letters, 3, 3);

    if (print) { console.log(word); }

    e.forEach(w => {
      it('should find "' + w + '" in "' + letters + '"', () => {
        expect(word.indexOf(w) > -1).toBeTruthy();
      });
    });
  }

  testFindWords(
      ['átok', 'ázott', 'dák', 'kád', 'kopott', 'kottáz', 'odáz',
      'okád', 'okoz', 'ott', 'tok', 'top'],
      'toptokdáz');

  testFindWords(
      ['átló', 'gát', 'gátló', 'gátlómű', 'mól', 'tág', 'tám'],
      'ágmtműólm');

  testFindWords(
    [],
    'zámpsneas');
  testFindWords(
    [],
    'kalnásjií');

});
