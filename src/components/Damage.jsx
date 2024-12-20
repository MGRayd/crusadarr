import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';

const diceImages = [null, d1, d2, d3, d4, d5, d6];

const Damage = ({ failedSaves: initialFailedSaves }) => {
  const [failedSaves, setFailedSaves] = useState(initialFailedSaves || 0);
  const [damageType, setDamageType] = useState('N/A');
  const [damageResults, setDamageResults] = useState([]);
  const [rollResults, setRollResults] = useState([]);

  const rollDie = () => Math.floor(Math.random() * 6) + 1;

  const calculateDamage = () => {
    const rolls = [];
    const damages = [];
    for (let i = 0; i < failedSaves; i++) {
      switch (damageType) {
        case 'D3':
          const d3Roll = Math.ceil(rollDie() / 2);
          rolls.push(d3Roll);
          damages.push(d3Roll);
          break;
        case '2xD3':
          const d3Roll1 = Math.ceil(rollDie() / 2);
          const d3Roll2 = Math.ceil(rollDie() / 2);
          rolls.push(d3Roll1, d3Roll2);
          damages.push(d3Roll1 + d3Roll2);
          break;
        case 'D6':
          const d6Roll = rollDie();
          rolls.push(d6Roll);
          damages.push(d6Roll);
          break;
        case '2xD6':
          const d6Roll1 = rollDie();
          const d6Roll2 = rollDie();
          rolls.push(d6Roll1, d6Roll2);
          damages.push(d6Roll1 + d6Roll2);
          break;
        default:
          damages.push(0); // N/A means no damage
          break;
      }
    }
    setRollResults(rolls);
    setDamageResults(damages);
  };

  const totalDamage = damageResults.reduce((sum, dmg) => sum + dmg, 0);

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

  const getMaxPossibleDamage = () => {
    switch (damageType) {
      case 'D3': return failedSaves * 3;
      case '2xD3': return failedSaves * 6;
      case 'D6': return failedSaves * 6;
      case '2xD6': return failedSaves * 12;
      default: return failedSaves;
    }
  };

  const getAverageDamage = () => {
    switch (damageType) {
      case 'D3': return failedSaves * 2;
      case '2xD3': return failedSaves * 4;
      case 'D6': return failedSaves * 3.5;
      case '2xD6': return failedSaves * 7;
      default: return failedSaves;
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
        DAMAGE
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
            Failed Saves
          </Typography>
          <TextField
            type="number"
            value={failedSaves}
            onChange={(e) => setFailedSaves(Number(e.target.value))}
            variant="outlined"
            inputProps={{ min: 0 }}
            sx={sharedFieldStyle}
          />
        </Box>
        <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '4px' }}>
            Damage Type
          </Typography>
          <FormControl sx={sharedFieldStyle}>
            <Select
              value={damageType}
              onChange={(e) => setDamageType(e.target.value)}
              displayEmpty
            >
              {['N/A', 'D3', '2xD3', 'D6', '2xD6'].map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
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
          onClick={calculateDamage}
          disabled={!failedSaves || damageType === 'N/A'}
        >
          Roll Damage
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
                sx={{ width: 50, height: 50, marginBottom: 1 }}
              />
              <Typography variant="body1" sx={{ color: '#ffffff' }}>
                {countResults[value] || 0}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h5" sx={{ color: '#ffffff', marginTop: '16px' }}>
          Total Damage: {totalDamage}
        </Typography>
      </Box>
    </Box>
  );
};

export default Damage;
