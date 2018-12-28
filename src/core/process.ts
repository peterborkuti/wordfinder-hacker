import { LetterMatrix, positionChainToWord } from './lettermatrix';
import { validWordCandidate, getWords } from './dictionary';
import { neighbours } from './matrix';
import { words } from './words';

/**
 * It gets all the valid neighbouring poisitions of the last position of the chain and
 * creates as many new chains as these neighbours.
 *
 * It simply creates the possible 1 long ways from this "route" (= positionChain)
 * @param positionChain the route so far
 * @param letters th lettermatrix only for the number of rows and cols
 */
function growPositionChain(positionChain: number[], letters: LetterMatrix): number[][] {
  let positionChains: number[][] = [];

  if (positionChain.length === 0) {
    positionChains = new Array(letters.letters.length).fill(0).map((tmp, i) => [i]);
  } else {
    const lastPosition = positionChain.slice(-1)[0];
    const neighbourPositions = neighbours(lastPosition, letters.cols, letters.rows);
    const haveNotSeenPositions = neighbourPositions.filter(i => !positionChain.includes(i));

    positionChains = haveNotSeenPositions.map(position => Array.of(...positionChain, position));
  }

  return positionChains;
}

function findWords(letters: string, rows: number, cols: number): [string[], number[][]] {
  const letterm = new LetterMatrix(letters, cols, rows);

  let wordList = [];
  let chainList = [];
  let cc = [[]];
  for (let i = 0; i < letters.length; i++) {
    cc = cc.
            map(c =>
              growPositionChain(c, letterm).
              filter(p => validWordCandidate(positionChainToWord(letters, p), words))).
            reduce((a, c) => a.concat(c), []);
    const [w, chains] = getWords(cc, letters, words);
    wordList = wordList.concat(w);
    chainList = chainList.concat(chains);
  }

  return [wordList, chainList];
}

export { findWords, growPositionChain };
