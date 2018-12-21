import { positionChainToWord } from './lettermatrix';
/**
 * Contains the words which are no longer than as set (default is 9 (=3x3 matrix))
 * and transforms them for easy processing
 */
class Dictionary {
  public readonly dictionary: string[];
  constructor(sortedDictionary: string[], wordCount = -1, maxWordLength = 9) {
    if (wordCount === -1) {
      this.dictionary = sortedDictionary;
    } else {
      this.dictionary = generateRandomWords(wordCount, maxWordLength).sort();
    }
  }
}

function generateRandomWords(wordCount: number, maxWordLength: number): string[] {
  return new Array(wordCount).fill('').map(() => generateRandomWord(maxWordLength));
}

function generateRandomWord(maxWordLength: number): string {
  return new Array(randBetween(3, maxWordLength)).
    fill('').map(() => getRandomChar()).join('');
}

function randBetween(low: number, high: number) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

function getRandomChar(): string {
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);

  return String.fromCharCode(randBetween(a, z));
}

function validWordCandidate(word: string, dict: Dictionary): boolean {
  const isValid = isInSortedArray(word, dict.dictionary, false);

  return isValid;
}

function validWord(word: string, dict: Dictionary): boolean {
  return isInSortedArray(word, dict.dictionary, true);
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

function getWords(positionChains: number[][], letters: string, dict: Dictionary): string[] {
    const words = positionChains.filter(p => p.length >= 3).
                  map(p => positionChainToWord(letters, p)).
                  filter(word => validWord(word, dict));

    const uniqWords = words.sort().filter((w, i, arr) => findInSortedArray(w, arr) === i);

    return uniqWords;
}

export { Dictionary, validWordCandidate, getWords, isInSortedArray, eq, findInSortedArray };
