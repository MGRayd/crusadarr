import { Box, Button, Typography } from '@mui/material';

const CommandPointsTracker2 = ({ commandPoints, setCommandPoints, customHeading }) => {
  const increasePoints = () => setCommandPoints(commandPoints + 1);
  const decreasePoints = () => {
    if (commandPoints > 0) {
      setCommandPoints(commandPoints - 1);
    }
  };

  return (
    <Box className="command-points" sx={{ padding: 2, textAlign: 'center' }}>
      {/* Custom heading displayed */}
      <Typography variant="h5" gutterBottom>
        {customHeading}
      </Typography>
      {/* Container for buttons and command points */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="outlined" onClick={decreasePoints} sx={{ marginRight: 1 }}>
            -
          </Button>
          <Typography variant="h6" sx={{ marginX: 1 }}>
            {commandPoints}
          </Typography>
          <Button variant="outlined" onClick={increasePoints}>
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CommandPointsTracker2;
