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
