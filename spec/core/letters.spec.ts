import { Letters } from '../../src/core/letters';

describe('letters', () => {
  it('should create', () => {
    expect(new Letters('')).toBeTruthy();
  });

  it('should have a letters property', () => {
    expect(new Letters('abc').letters).toEqual('abc');
  });
});

