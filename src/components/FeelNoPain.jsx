import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';

const diceImages = [null, d1, d2, d3, d4, d5, d6];

const FeelNoPain = ({ totalDamage }) => {
  const [damageInput, setDamageInput] = useState(totalDamage || '');
  const [fnpThreshold, setFnpThreshold] = useState('');
  const [rollResults, setRollResults] = useState([]);
  const [negatedWounds, setNegatedWounds] = useState(0);

  const rollDie = () => Math.floor(Math.random() * 6) + 1;

  const handleFnpRolls = () => {
    const rolls = Array.from({ length: Number(damageInput) }, () => rollDie());
    setRollResults(rolls);
    const negated = rolls.filter((roll) => roll >= fnpThreshold).length;
    setNegatedWounds(negated);
  };

  const countResults = rollResults.reduce((acc, roll) => {
    acc[roll] = (acc[roll] || 0) + 1;
    return acc;
  }, {});

  const woundsSuffered = (Number(damageInput) || 0) - negatedWounds;

  useEffect(() => {
    setDamageInput(totalDamage || '');
  }, [totalDamage]);

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
        FEEL NO PAIN
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
            Damage
          </Typography>
          <TextField
            type="number"
            value={damageInput}
            onChange={(e) => setDamageInput(e.target.value)}
            variant="outlined"
            inputProps={{ min: 0 }}
            sx={sharedFieldStyle}
          />
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>
            FNP
          </Typography>
          <FormControl sx={sharedFieldStyle}>
            <Select
              value={fnpThreshold}
              onChange={(e) => setFnpThreshold(Number(e.target.value))}
              displayEmpty
            >
              {[5, 6].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}+
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
          onClick={handleFnpRolls}
          disabled={!damageInput || !fnpThreshold}
        >
          Roll FNP
        </Button>
      </Box>
      <Box marginTop={4}>
        <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
          Results:
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} marginTop={2}>
          {[1, 2, 3, 4, 5, 6].map((value) => (
            <Box key={value} textAlign="center">
              <Box
                component="img"
                src={diceImages[value]}
                alt={`Dice showing ${value}`}
                sx={{
                  width: 50,
                  height: 50,
                  marginBottom: 1,
                  filter:
                    rollResults.filter((roll) => roll < fnpThreshold).includes(value) ||
                    countResults[value] === 0
                      ? 'grayscale(1) sepia(1) hue-rotate(-90deg) saturate(100) brightness(0.9)'
                      : 'none',
                }}
              />
              <Typography variant="body1" sx={{ color: '#ffffff' }}>
                {countResults[value] || 0}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h6" sx={{ color: '#ffffff', marginTop: '16px' }}>
          Wounds Resisted: {negatedWounds}
        </Typography>
        <Typography variant="h5" sx={{ color: 'red' }}>
          Wounds Suffered: {woundsSuffered}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeelNoPain;
