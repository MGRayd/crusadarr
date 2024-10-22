import React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';

const CommandPointsTracker = ({ commandPoints, setCommandPoints }) => {
  const increasePoints = () => setCommandPoints(commandPoints + 1);
  const decreasePoints = () => setCommandPoints(commandPoints - 1);

  return (
    <Box className="command-points" sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Command Points
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="outlined" onClick={decreasePoints} sx={{ marginRight: 1 }}>
          -
        </Button>
        <Typography variant="h6" sx={{ marginRight: 1 }}>
          {commandPoints}
        </Typography>
        <Button variant="outlined" onClick={increasePoints}>
          +
        </Button>
      </Box>
    </Box>
  );
};

export default CommandPointsTracker;
