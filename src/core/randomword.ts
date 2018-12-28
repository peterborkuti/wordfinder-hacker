export function generateRandomWords(wordCount: number, maxWordLength: number): string[] {
  return new Array(wordCount).fill('').map(() => generateRandomWord(maxWordLength));
}

export function generateRandomWord(maxWordLength: number, minWordLength = 3): string {
  return new Array(randBetween(minWordLength, maxWordLength)).
    fill('').map(() => getRandomChar()).join('');
}

export function randBetween(low: number, high: number) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export function getRandomChar(): string {
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);

  return String.fromCharCode(randBetween(a, z));
}
