import { growWord } from '../../src/core/process';
import { Dictionary } from '../../src/core/dictionary';
import { Letters } from '../../src/core/letters';


describe('growWord', () => {
  it('should grow an empty word by default with a space', () => {
    const letters = new Letters('');
    const dictionary = new Dictionary([]);
    const [words, positions] = growWord('', [], letters, dictionary);
    expect(words.length).toEqual(1);
    expect(words[0]).toBe(' ');
    expect(positions.length).toEqual(1);
    expect(positions[0][0]).toEqual(-1);
  });
});
