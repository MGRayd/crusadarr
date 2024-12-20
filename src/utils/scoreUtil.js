// utils/scoreUtil.js
export const calculateTotalScore = (roundPoints, paintedBonus) => {
    const totalRoundPoints = roundPoints.reduce((total, points) => total + points, 0);
    const totalScore = totalRoundPoints + (paintedBonus ? 10 : 0);
    return Math.min(totalScore, 100);
  };
  