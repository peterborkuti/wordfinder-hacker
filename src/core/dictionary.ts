import { positionChainToWord } from './lettermatrix';
/**
 * Contains the words which are no longer than as set (default is 9 (=3x3 matrix))
 * and transforms them for easy processing
 */
class Dictionary {
  constructor(readonly dictionary: string[]) {
  }
}

function validWordCandidate(word: string, dict: Dictionary): boolean {
  return !!dict.dictionary.find(s => s.indexOf(word) === 0);
}

function validWord(word: string, dict: Dictionary): boolean {
  return dict.dictionary.indexOf(word) !== -1;
}

function getWords(positionChains: number[][], letters: string, dict: Dictionary): string[] {
  return positionChains.filter(p => p.length >= 3).
          map(p => positionChainToWord(letters, p)).
          filter(p => validWord(p, dict)).
          filter((w, i, arr) => arr.indexOf(w) === i); //unique
}

export { Dictionary, validWordCandidate, getWords };
