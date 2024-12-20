import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';

const diceImages = [null, d1, d2, d3, d4, d5, d6];
const MAX_ROLLS = 1000;
const MIN_ROLLS = 1;

const HitRolls = ({ setHits, resetKey }) => {
  const [numberOfRolls, setNumberOfRolls] = useState('');
  const [wsBs, setWsBs] = useState('');
  const [modifier, setModifier] = useState(0);
  const [rollResults, setRollResults] = useState([]);

  useEffect(() => {
    setNumberOfRolls('');
    setWsBs('');
    setModifier(0);
    setRollResults([]);
    setHits(0);
  }, [resetKey, setHits]);

  const rollDie = () => Math.floor(Math.random() * 6) + 1;

  const calculateThreshold = () => Math.max(2, Math.min(6, Number(wsBs[0]) - modifier));

  const handleRollDice = () => {
    if (!numberOfRolls || numberOfRolls < MIN_ROLLS) {
      alert('Please enter a valid number of rolls');
      return;
    }
    if (numberOfRolls > MAX_ROLLS) {
      alert(`Maximum ${MAX_ROLLS} rolls allowed`);
      return;
    }

    const rolls = Array.from({ length: Number(numberOfRolls) }, () => rollDie());
    setRollResults(rolls);

    const threshold = calculateThreshold();
    const hits = rolls.filter((roll) => roll >= threshold).length;
    setHits(hits);
  };

  const handleReRollOnes = () => {
    const reRolled = rollResults.map((roll) => (roll === 1 ? rollDie() : roll));
    setRollResults(reRolled);

    const threshold = calculateThreshold();
    const hits = reRolled.filter((roll) => roll >= threshold).length;
    setHits(hits);
  };

  const handleReRollFails = () => {
    const threshold = calculateThreshold();
    const reRolled = rollResults.map((roll) => (roll < threshold ? rollDie() : roll));
    setRollResults(reRolled);

    const hits = reRolled.filter((roll) => roll >= threshold).length;
    setHits(hits);
  };

  const countResults = rollResults.reduce((acc, roll) => {
    acc[roll] = (acc[roll] || 0) + 1;
    return acc;
  }, {});

  const sharedFieldStyle = {
    width: '100%',
    maxWidth: 300,
    '& .MuiOutlinedInput-root': {
      color: '#ffffff',
      backgroundColor: '#2e2e2e',
      '& fieldset': { borderColor: '#ffffff' },
      '&:hover fieldset': { borderColor: '#90caf9' },
      '&.Mui-focused fieldset': { borderColor: '#90caf9' },
    },
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
        HIT ROLLS
      </Typography>
      <Box
        marginBottom={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>
            Attacks
          </Typography>
          <TextField
            type="number"
            value={numberOfRolls}
            onChange={(e) => setNumberOfRolls(e.target.value)}
            variant="outlined"
            inputProps={{ min: 0 }}
            sx={sharedFieldStyle}
          />
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>
            WS/BS
          </Typography>
          <FormControl sx={sharedFieldStyle}>
            <Select value={wsBs} onChange={(e) => setWsBs(e.target.value)} displayEmpty>
              {[2, 3, 4, 5, 6].map((val) => (
                <MenuItem key={val} value={`${val}+`}>
                  {val}+
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>
            Modifier
          </Typography>
          <FormControl sx={sharedFieldStyle}>
            <Select value={modifier} onChange={(e) => setModifier(Number(e.target.value))} displayEmpty>
              <MenuItem value="" disabled>
                Select Modifier
              </MenuItem>
              {[-1, 0, 1].map((val) => (
                <MenuItem key={val} value={val}>
                  {val > 0 ? `+${val}` : val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRollDice}
          disabled={!numberOfRolls || !wsBs}
        >
          Roll Dice
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReRollOnes}
          disabled={!rollResults.length}
        >
          Re-roll 1s
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReRollFails}
          disabled={!rollResults.length}
        >
          Re-roll Failed
        </Button>
      </Box>
      <Box marginTop={4}>
        <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
          Results:
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
          {diceImages.slice(1).map((image, index) => (
            <Box key={index + 1} textAlign="center">
              <Box
                component="img"
                src={image}
                alt={`Dice showing ${index + 1}`}
                sx={{
                  width: 50,
                  height: 50,
                  marginBottom: 1,
                  filter:
                    rollResults.length > 0 &&
                    (rollResults.filter((roll) => roll < calculateThreshold()).includes(index + 1) ||
                      !(countResults[index + 1] || 0))
                      ? 'grayscale(1) sepia(1) hue-rotate(-90deg) saturate(100) brightness(0.9)'
                      : 'none',
                }}
              />
              <Typography variant="body1" sx={{ color: '#ffffff' }}>
                {countResults[index + 1] || 0}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h5" marginTop={2} sx={{ color: '#ffffff' }}>
          Total Hits: {rollResults.filter((roll) => roll >= calculateThreshold()).length}
        </Typography>
      </Box>
    </Box>
  );
};

export default HitRolls;
