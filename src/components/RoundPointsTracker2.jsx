import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

/**
 * RoundPointsTracker component for Player 2
 * Tracks victory points per round and painted bonus status
 * @param {number[]} roundPoints - Array of points for each round
 * @param {function} setRoundPoints - Function to update round points
 * @param {boolean} paintedBonus - Whether painted bonus is applied
 * @param {function} setPaintedBonus - Function to update painted bonus
 * @param {string} customHeading - Custom heading text
 */
const RoundPointsTracker2 = ({ roundPoints, setRoundPoints, paintedBonus, setPaintedBonus, customHeading }) => {
  const handleRoundPointsChange = (index, value) => {
    const newRoundPoints = [...roundPoints];
    newRoundPoints[index] = value === '' ? 0 : Math.max(0, parseInt(value, 10)); // Prevent negative values
    setRoundPoints(newRoundPoints);
  };

  return (
    <Box id="rounds-tracking" sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {customHeading}
      </Typography>
      {roundPoints.map((points, index) => (
        <Box key={index} sx={{ marginBottom: 1 }}>
          <TextField
            label={`Round ${index + 1} Points`}
            type="number"
            value={points === 0 ? '' : points}
            onChange={(e) => handleRoundPointsChange(index, e.target.value)}
            size="small"
            variant="outlined"
            fullWidth
            inputProps={{ min: 0 }}
          />
        </Box>
      ))}
      <FormControlLabel
        control={
          <Checkbox
            checked={paintedBonus}
            onChange={(e) => setPaintedBonus(e.target.checked)}
            color="primary"
          />
        }
        label="Painted Bonus"
      />
    </Box>
  );
};

export default RoundPointsTracker2;
