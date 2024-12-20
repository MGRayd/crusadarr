// Add unit tests for critical functionality
describe('calculateTotalScore', () => {
  it('should calculate correct score with painted bonus', () => {
    const roundPoints = [1, 2, 3, 4, 5];
    const paintedBonus = true;
    expect(calculateTotalScore(roundPoints, paintedBonus)).toBe(16);
  });
}); 