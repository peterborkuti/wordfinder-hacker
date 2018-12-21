import { Dictionary, isInSortedArray, eq, findInSortedArray } from '../../src/core/dictionary';
import { words } from '../../src/core/words';

describe('dictionary', () => {
  it('should create', () => {
    expect(new Dictionary([])).toBeTruthy();
  });
});

describe('eq', () => {
  it('should find', () => {
    expect(eq('a', 'b')).toBeFalsy();
    expect(eq('a', 'a')).toBeTruthy();
    expect(eq('a', 'b', false)).toBeFalsy();
    expect(eq('a', 'a', false)).toBeTruthy();
    expect(eq('ab', 'a', false)).toBeTruthy();
    expect(eq('xab', 'a', false)).toBeFalsy();
  });
  it('should find hungarian letters', () => {
    expect(eq('á', 'b')).toBeFalsy();
    expect(eq('á', 'á')).toBeTruthy();
    expect(eq('ű', 'ű')).toBeTruthy();
    expect(eq('ő', 'ő')).toBeTruthy();
    expect(eq('űőú', 'űő', false)).toBeTruthy();
    expect(eq('xőű', 'őű', false)).toBeFalsy();
  });
});

describe('isInSortedArray', () => {
  it('should not find anything in an empty array', () => {
    expect(isInSortedArray('x', [])).toBeFalsy();
  });

  it('should find a word in a one-long-array if it is in the array', () => {
    expect(isInSortedArray('x', ['x'])).toBeTruthy();
  });

  it('should not find a word in a one-long-array if it is not in the array', () => {
    expect(isInSortedArray('y', ['x'])).toBeFalsy();
  });

  it('should not find empty in a one-long-array if it is not in the array', () => {
    expect(isInSortedArray('', ['x'])).toBeFalsy();
  });

  it('should find empty in a one-long-array if it contains empty', () => {
    expect(isInSortedArray('', [''])).toBeTruthy();
  });

  it('should deal with a one-long-array and not exact search', () => {
    expect(isInSortedArray('', [''], false)).toBeTruthy();
    expect(isInSortedArray('a', ['abc'], false)).toBeTruthy();
    expect(isInSortedArray('ax', ['abcax'], false)).toBeFalsy();
  });

  it('should deal with a two-long-array', () => {
    expect(isInSortedArray('x', ['x', 'y'])).toBeTruthy();
    expect(isInSortedArray('y', ['x', 'y'])).toBeTruthy();
    expect(isInSortedArray('z', ['x', 'y'])).toBeFalsy();
    expect(isInSortedArray('',  ['x', 'y'])).toBeFalsy();
  });

  it('should deal with a two-long-array and not exact search', () => {
    expect(isInSortedArray('x', ['xyz', 'y'], false)).toBeTruthy();
    expect(isInSortedArray('y', ['x', 'yabc'], false)).toBeTruthy();
    expect(isInSortedArray('z', ['x', 'y'], false)).toBeFalsy();
    expect(isInSortedArray('',  ['x', 'y'], false)).toBeTruthy();
  });

  it('should deal with a three-long-array', () => {
    expect(isInSortedArray('x', ['x', 'y', 'z'])).toBeTruthy();
    expect(isInSortedArray('y', ['x', 'y', 'z'])).toBeTruthy();
    expect(isInSortedArray('z', ['x', 'y', 'z'])).toBeTruthy();
    expect(isInSortedArray('a', ['x', 'y', 'z'])).toBeFalsy();
  });

  it('should deal with a three-long-array without exact equality', () => {
    expect(isInSortedArray('x', ['xabc', 'y', 'z'], false)).toBeTruthy();
    expect(isInSortedArray('y', ['x', 'yabc', 'z'], false)).toBeTruthy();
    expect(isInSortedArray('z', ['x', 'y', 'zabc'], false)).toBeTruthy();
    expect(isInSortedArray('a', ['x', 'y', 'zabc'], false)).toBeFalsy();
  });

  it('should deal with a bigger array', () => {
    const arr = new Array(100).fill(0).map((v, i) => i);
    expect(isInSortedArray(  0, arr)).toBeTruthy();
    expect(isInSortedArray(  7, arr)).toBeTruthy();
    expect(isInSortedArray( 99, arr)).toBeTruthy();
    expect(isInSortedArray(100, arr)).toBeFalsy();
  });
});

describe('test with hungarian letters and small dictionary', () => {
  const d = [
    'zuhogó', 'züllés', 'zülleszt', 'züllik', 'züllött', 'zulu', 'zümmög',
    'zümmögés', 'zümmögő', 'zupa', 'zupál', 'zupás', 'zuppan', 'zűr', 'zurbol',
    'zurbolás', 'zürjén', 'zűrös', 'zűrzavar', 'zúz', 'zúza', 'zúzalék', 'zúzás',
    'zúzat', 'zúzda', 'zúzmara', 'zúzmarás', 'zuzmó', 'zúzó', 'zúzódás', 'zúzódik',
    'zúzógép', 'zúzómalom', 'zúzómű', 'zúzos', 'zúzott', 'zúzottkő'
  ].sort();
  it('should find hungarian words', () => {
    expect(isInSortedArray('zuzmó', d)).toBeTruthy();
    expect(isInSortedArray('zuzmo', d)).toBeFalsy();
    expect(findInSortedArray('zuhogó', d)).toBe(0);
    expect(isInSortedArray('zúzottkő', d)).toBeTruthy();
    expect(isInSortedArray('zűr', d, false)).toBeTruthy();
    expect(isInSortedArray('zűrx', d, false)).toBeFalsy();
  });
});

describe('test with hungarian letters and big (production) dictionary', () => {
  it('should find hungarian words', () => {
    expect(isInSortedArray('zuzmó', words)).toBeTruthy();
    expect(isInSortedArray('zuzmo', words)).toBeFalsy();
    expect(isInSortedArray('zuhogó', words)).toBeTruthy();
    expect(isInSortedArray('zúzottkő', words)).toBeTruthy();
    expect(isInSortedArray('zűr', words, false)).toBeTruthy();
    expect(isInSortedArray('zűrx', words, false)).toBeFalsy();
  });
});

describe('test with real words from letters "toptokdáz"', () => {
  const e = ['átok', 'ázott', 'dák', 'kád', 'kopott', 'kottáz', 'odáz',
  'okád', 'okoz', 'ott', 'tok', 'top'
  ];

  e.forEach(w => {
    it('should find the word"' + w + '"', () => {
      expect(isInSortedArray(w, words)).toBeTruthy();
    });
  });
});