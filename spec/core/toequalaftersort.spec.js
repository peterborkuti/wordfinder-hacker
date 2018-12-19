describe('Custom matcher: toEqualAfterSort', function() {
  it('should allow empty arrays', function() {
    expect([]).toEqualAfterSort([]);
  });

  it('should allow equal-sorted arrays', function() {
    expect([1, 2, 3]).toEqualAfterSort([1, 2, 3]);
  });

  it('should allow equal but not sorted arrays', function() {
    expect([1, 3, 2]).toEqualAfterSort([3, 2, 1]);
  });

  it('should not allow different arrays', function() {
    expect([1, 2, 3]).not.toEqualAfterSort([1, 2, 4]);
  });
});
