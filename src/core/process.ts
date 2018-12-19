import { LetterMatrix } from './lettermatrix';
import { Dictionary } from './dictionary';
import { neighbours } from './matrix';

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

function growPositionChains(positionChains: number[] = [], letters: LetterMatrix): number[][] {
  let chains = growPositionChain(positionChains, letters);
  for (let i = 0; i < letters.letters.length; i++) {
    const newChains = [];
    chains.forEach(c => newChains.push(growPositionChain(c, letters)));
    chains = newChains;
    console.log(chains);
  }

  return chains;
}

function growWord(word: string, positions: number[], letters: LetterMatrix, dictionary: Dictionary): [ string[], number[][] ] {
  const words: string[] = [' '];
  const newpos: number[][] = [[-1]];

  return [ words, newpos ];
}

function growWords(words: string[], letters: LetterMatrix, dictionary: Dictionary): string[] {
  return [];
}

function  findWordsInLetters(letters: LetterMatrix, dictionary: Dictionary): string[] {

  return [];
}

export { growWord, growPositionChains, growPositionChain };
