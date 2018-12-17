import { Letters } from 'src/core/letters';
import { Dictionary } from 'src/core/dictionary';

function growWord(word: string, positions: number[], letters: Letters, dictionary: Dictionary): [ string[], number[][] ] {
  const words: string[] = [' '];
  const newpos: number[][] = [[-1]];

  return [ words, newpos];
}

function growWords(words: string[], letters: Letters, dictionary: Dictionary): string[] {
  return [];
}

function  findWordsInLetters(letters: Letters, dictionary: Dictionary): string[] {

  return [];
}

export { growWord };
