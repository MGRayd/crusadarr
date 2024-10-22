import React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';

const RoundPointsTracker = ({ roundPoints, setRoundPoints, paintedBonus, setPaintedBonus }) => {
  const handleRoundPointsChange = (index, value) => {
    const newRoundPoints = [...roundPoints];
    newRoundPoints[index] = parseInt(value, 10) || 0; // Update specific round
    setRoundPoints(newRoundPoints);
  };

  return (
    <Box id="rounds-tracking" sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Round Points Tracker
      </Typography>
      {roundPoints.map((points, index) => (
        <Box key={index} sx={{ marginBottom: 1 }}>
          <TextField
            label={`Round ${index + 1} Points`}
            type="number"
            value={points}
            onChange={(e) => handleRoundPointsChange(index, e.target.value)}
            size="small"
            variant="outlined"
            fullWidth // Make input take full width
          />
        </Box>
      ))}
      <FormControlLabel
        control={
          <Checkbox
            checked={paintedBonus}
            onChange={(e) => setPaintedBonus(e.target.checked)}
            color="primary" // Change color to the primary color of your theme
          />
        }
        label="Painted Bonus"
      />
    </Box>
  );
};

export default RoundPointsTracker;
