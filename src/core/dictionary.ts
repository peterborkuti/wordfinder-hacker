import { positionChainToWord } from './lettermatrix';

function validWordCandidate(word: string, dict: string[]): boolean {
  const isValid = isInSortedArray(word, dict, false);

  return isValid;
}

function validWord(word: string, dict: string[]): boolean {
  return isInSortedArray(word, dict, true);
}

function eq(longer: any, shorter: any, exactEqual = true) {
  return (exactEqual) ? longer === shorter : longer.startsWith(shorter);
}

function binarySearch(arr: any[], from: number, to: number, value:  any, exactEqual = true): number {
  const midIndex = Math.floor((to - from) / 2) + from;

  const actualWord = arr[midIndex];

  if (eq(actualWord, value, exactEqual)) { return midIndex; }

  if (from >= to) { return -1; }

  if (actualWord < value) {
    from = midIndex + 1;
  } else {
    to = midIndex - 1;
  }

  return binarySearch(arr, from, to, value, exactEqual);
}

function isInSortedArray(whatToFind: any, whereToFind: any[], exactEqual = true): boolean {
  return findInSortedArray(whatToFind, whereToFind, exactEqual) !== -1;
}

function findInSortedArray(whatToFind: any, whereToFind: any[], exactEqual = true): number {
  if (!whereToFind || !Array.isArray(whereToFind) || whereToFind.length === 0) { return -1; }

  if (whereToFind.length === 1) { return eq(whereToFind[0], whatToFind, exactEqual) ? 0 : -1; }

  return binarySearch(whereToFind, 0, whereToFind.length - 1, whatToFind, exactEqual);
}

function getWords(positionChains: number[][], letters: string, dict: string[]): string[] {
    const words = positionChains.filter(p => p.length >= 3).
                  map(p => positionChainToWord(letters, p)).
                  filter(word => validWord(word, dict)).
                  sort();

    const uniqWords = words.filter((w, i, arr) => findInSortedArray(w, arr) === i);

    return uniqWords;
}

export { validWordCandidate, getWords, isInSortedArray, findInSortedArray };
