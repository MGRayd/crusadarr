import { useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Box,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
} from '@mui/material';
import logo from './assets/logo.png';
import FactionSelector from './components/FactionSelector';
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Set player mode based on navigation state or default to '1' (1-player)
  const [playerMode, setPlayerMode] = useState(location.state?.playerMode || '1');

  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Faction, setPlayer1Faction] = useState(null);
  const [player2Faction, setPlayer2Faction] = useState(null);

  // Load data from localStorage each time the component mounts
  useEffect(() => {
    setPlayer1Name(localStorage.getItem('player1Name') || '');
    setPlayer2Name(localStorage.getItem('player2Name') || '');
    setPlayer1Faction(JSON.parse(localStorage.getItem('player1Faction')) || null);
    setPlayer2Faction(JSON.parse(localStorage.getItem('player2Faction')) || null);
  }, [location.state]);

  const handleModeChange = (event, newMode) => {
    if (newMode) {
      setPlayerMode(newMode);
      // Clear data when switching modes
      setPlayer1Name('');
      setPlayer2Name('');
      setPlayer1Faction(null);
      setPlayer2Faction(null);

      localStorage.removeItem('player1Name');
      localStorage.removeItem('player2Name');
      localStorage.removeItem('player1Faction');
      localStorage.removeItem('player2Faction');
    }
  };

  const handlePlayer1NameChange = (e) => {
    const name = e.target.value;
    setPlayer1Name(name);
    localStorage.setItem('player1Name', name);
  };

  const handlePlayer2NameChange = (e) => {
    const name = e.target.value;
    setPlayer2Name(name);
    localStorage.setItem('player2Name', name);
  };

  const handlePlayer1FactionSelect = (name, logo) => {
    const faction = { name, logo };
    setPlayer1Faction(faction);
    localStorage.setItem('player1Faction', JSON.stringify(faction));
  };

  const handlePlayer2FactionSelect = (name, logo) => {
    const faction = { name, logo };
    setPlayer2Faction(faction);
    localStorage.setItem('player2Faction', JSON.stringify(faction));
  };

  const handleStartTracking = () => {
    if (playerMode === '2') {
      navigate('/app2', {
        state: { player1Name, player1Faction, player2Name, player2Faction },
      });
    } else {
      navigate('/app');
    }
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '80px' }}>
      <img src={logo} alt="App Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <Typography variant="h6" gutterBottom>
        Beta 1.9
      </Typography>

      <ToggleButtonGroup
        value={playerMode}
        exclusive
        onChange={handleModeChange}
        aria-label="Player Mode"
        sx={{
          marginBottom: '20px',
          gap: '8px',
          '& .MuiToggleButton-root': {
            width: '120px',
            height: '40px',
            color: '#ffffff',
            borderRadius: '4px',
            border: 'none',
            background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(156, 39, 176, 0.3)',
            },
            '&.Mui-selected': {
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              color: '#ffffff',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(33, 203, 243, 0.3)',
              }
            }
          }
        }}
      >
        <ToggleButton value="1" aria-label="1 Player">
          1 Player
        </ToggleButton>
        <ToggleButton value="2" aria-label="2 Players">
          2 Players
        </ToggleButton>
      </ToggleButtonGroup>

      {playerMode === '2' && (
        <Box marginBottom={2} width="100%">
          {/* Player 1 Inputs */}
          <Box display="flex" alignItems="center" gap={2} marginBottom={2}>
            <TextField
              label="Player 1"
              value={player1Name}
              onChange={handlePlayer1NameChange}
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: '#ffffff' } }}
              InputProps={{
                style: {
                  color: '#ffffff',
                  backgroundColor: '#424242',
                  borderRadius: '8px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#90caf9',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#90caf9',
                  },
                },
              }}
            />
            {player1Faction?.logo && (
              <Box component="img" src={player1Faction.logo} alt={`${player1Faction.name} Logo`} sx={{ width: '50px', height: '50px', marginLeft: '8px', marginRight: '8px', borderRadius: '8px' }} />
            )}
            <FactionSelector onFactionSelect={handlePlayer1FactionSelect} />
          </Box>

          {/* Player 2 Inputs */}
          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              label="Player 2"
              value={player2Name}
              onChange={handlePlayer2NameChange}
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: '#ffffff' } }}
              InputProps={{
                style: {
                  color: '#ffffff',
                  backgroundColor: '#424242',
                  borderRadius: '8px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#90caf9',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#90caf9',
                  },
                },
              }}
            />
            {player2Faction?.logo && (
              <Box component="img" src={player2Faction.logo} alt={`${player2Faction.name} Logo`} sx={{ width: '50px', height: '50px', marginLeft: '8px', marginRight: '8px', borderRadius: '8px' }} />
            )}
            <FactionSelector onFactionSelect={handlePlayer2FactionSelect} />
          </Box>
        </Box>
      )}

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginBottom={2}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleStartTracking} 
          sx={{ 
            marginBottom: '10px', 
            width: '200px', 
            height: '50px',
            color: '#ffffff',  // Ensure text is white
            fontWeight: 'bold', // Make text bold
            '&.Mui-disabled': {
              color: 'rgba(255, 255, 255, 0.7)' // Keep disabled text visible but slightly transparent
            }
          }} 
          disabled={playerMode === '2' && (!player1Name || !player2Name || !player1Faction || !player2Faction)}
        >
          Start Tracking
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/rules')} style={{ marginBottom: '10px', width: '200px', height: '50px' }}>
          Crusade Rules
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/houserules')} style={{ marginBottom: '10px', width: '200px', height: '50px' }}>
          House Rules
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/missions')} style={{ marginBottom: '10px', width: '200px', height: '50px' }}>
          Missions
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/dice-roller')} style={{ marginBottom: '10px', width: '200px', height: '50px' }}>
          Dice Roller
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
