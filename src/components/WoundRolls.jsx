import React, { useState } from 'react';
import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';

const diceImages = [null, d1, d2, d3, d4, d5, d6];

const WoundRolls = ({ hits, setWounds }) => {
  const [manualHits, setManualHits] = useState(hits || 0);
  const [strength, setStrength] = useState('');
  const [toughness, setToughness] = useState('');
  const [woundModifier, setWoundModifier] = useState(0);
  const [woundResults, setWoundResults] = useState([]);
  const [rollResults, setRollResults] = useState([]);
  const [reRollCount, setReRollCount] = useState(0);
  const [rollHistory, setRollHistory] = useState([]);

  const rollDie = () => Math.floor(Math.random() * 6) + 1;

  const calculateWoundThreshold = (strength, toughness, modifier) => {
    let threshold;
    if (strength >= 2 * toughness) threshold = 2;
    else if (strength > toughness) threshold = 3;
    else if (strength === toughness) threshold = 4;
    else if (strength < toughness && strength > toughness / 2) threshold = 5;
    else threshold = 6;
    return Math.max(2, Math.min(6, threshold - modifier));
  };

  const handleWoundRoll = () => {
    const rolls = Array.from({ length: Number(manualHits) }, () => rollDie());
    setRollResults(rolls);
    setRollHistory((prev) => [
      ...prev,
      { timestamp: new Date(), rolls, strength, toughness, woundModifier },
    ].slice(-5));

    const woundThreshold = calculateWoundThreshold(Number(strength), Number(toughness), woundModifier);
    const wounds = rolls.filter((roll) => roll >= woundThreshold);
    setWoundResults(wounds);
    setReRollCount(0);

    if (setWounds) setWounds(wounds.length);
  };

  const handleReRollOnes = () => {
    const reRolled = rollResults.map((roll) => (roll === 1 ? rollDie() : roll));
    const reRolledCount = rollResults.filter((roll) => roll === 1).length;
    setReRollCount(reRollCount + reRolledCount);
    updateWoundResults(reRolled);
  };

  const handleReRollFails = () => {
    const woundThreshold = calculateWoundThreshold(Number(strength), Number(toughness), woundModifier);
    const reRolled = rollResults.map((roll) => (roll < woundThreshold ? rollDie() : roll));
    const reRolledCount = rollResults.filter((roll) => roll < woundThreshold).length;
    setReRollCount(reRollCount + reRolledCount);
    updateWoundResults(reRolled);
  };

  const updateWoundResults = (newRolls) => {
    setRollResults(newRolls);
    const woundThreshold = calculateWoundThreshold(Number(strength), Number(toughness), woundModifier);
    const wounds = newRolls.filter((roll) => roll >= woundThreshold);
    setWoundResults(wounds);
    if (setWounds) setWounds(wounds.length);
  };

  const countRollResults = rollResults.reduce((acc, roll) => {
    acc[roll] = (acc[roll] || 0) + 1;
    return acc;
  }, {});

  const resisted = manualHits - woundResults.length;

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
        WOUND ROLLS
      </Typography>
      <Box marginBottom={3} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>Hits</Typography>
          <TextField
            type="number"
            value={manualHits}
            onChange={(e) => setManualHits(Number(e.target.value))}
            variant="outlined"
            inputProps={{ min: 0 }}
            sx={sharedFieldStyle}
          />
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>Strength</Typography>
          <FormControl sx={sharedFieldStyle}>
            <Select value={strength} onChange={(e) => setStrength(Number(e.target.value))} displayEmpty>
              {[...Array(20).keys()].map((val) => (
                <MenuItem key={val + 1} value={val + 1}>{val + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>Toughness</Typography>
          <FormControl sx={sharedFieldStyle}>
            <Select value={toughness} onChange={(e) => setToughness(Number(e.target.value))} displayEmpty>
              {[...Array(20).keys()].map((val) => (
                <MenuItem key={val + 1} value={val + 1}>{val + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>Modifier</Typography>
          <FormControl sx={sharedFieldStyle}>
            <Select value={woundModifier} onChange={(e) => setWoundModifier(Number(e.target.value))} displayEmpty>
              {[-1, 0, 1].map((val) => (
                <MenuItem key={val} value={val}>{val > 0 ? `+${val}` : val}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleWoundRoll}
          disabled={!manualHits || !strength || !toughness}
        >
          Roll Wounds
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReRollOnes} disabled={!rollResults.length}>
          Re-roll 1s
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReRollFails} disabled={!rollResults.length}>
          Re-roll Failed
        </Button>
      </Box>
      <Box marginTop={4}>
        <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
          Results:
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} marginTop={2}>
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
                  filter: rollResults.length &&
                    rollResults.filter((roll) => roll < calculateWoundThreshold(Number(strength), Number(toughness), woundModifier)).includes(index + 1)
                    ? 'grayscale(1) sepia(1) hue-rotate(-90deg) saturate(100) brightness(0.9)'
                    : 'none',
                }}
              />
              <Typography variant="body1" sx={{ color: '#ffffff' }}>
                {countRollResults[index + 1] || 0}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h5" marginTop={2} sx={{ color: '#ffffff' }}>
          Total Wounds: {woundResults.filter((roll) => roll !== null).length}
        </Typography>
        <Typography variant="h6" marginTop={1} sx={{ color: 'red' }}>
          Resisted: {resisted}
        </Typography>
      </Box>
    </Box>
  );
};

export default WoundRolls;
