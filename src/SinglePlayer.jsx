import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UnitList from './components/UnitList';
import CommandPointsTracker from './components/CommandPointsTracker';
import RoundPointsTracker from './components/RoundPointsTracker';
import Navbar from './components/Navbar';
import RosterInputFields from './components/RosterInputFields';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, Box, Container, Accordion, AccordionSummary, AccordionDetails, TextField, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { saveData, loadData } from './utils/localStorageUtil';
import { exportToPDF } from './utils/pdfUtil';
import { resetData } from './utils/dataUtil';
import { calculateTotalScore } from './utils/scoreUtil';
import { parseRoster } from './utils/rosterParser';
import { factionCategories } from './utils/factionIconsUtil';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const SinglePlayer = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(['roster', 'cp', 'vp']);

  const [units, setUnits] = useState(loadData('units') || []);
  const [commandPoints, setCommandPoints] = useState(loadData('commandPoints') || 0);
  const [rosterText, setRosterText] = useState(loadData('rosterText') || "");
  const [roundPoints, setRoundPoints] = useState(loadData('roundPoints') || Array(5).fill(0));
  const [paintedBonus, setPaintedBonus] = useState(loadData('paintedBonus') || false);
  const [gameDate, setGameDate] = useState(loadData('gameDate') || new Date().toISOString().split('T')[0]);
  const [customFileName, setCustomFileName] = useState(loadData('customFileName') || "");
  const [playerName, setPlayerName] = useState(loadData('playerName') || '');
  const [playerFaction, setPlayerFaction] = useState(loadData('playerFaction') || '');
  const [playerInfoExpanded, setPlayerInfoExpanded] = useState(true);

  // Save state to localStorage on changes
  useEffect(() => {
    saveData('units', units);
    saveData('commandPoints', commandPoints);
    saveData('rosterText', rosterText);
    saveData('roundPoints', roundPoints);
    saveData('paintedBonus', paintedBonus);
    saveData('gameDate', gameDate);
    saveData('customFileName', customFileName);
    saveData('playerName', playerName);
    saveData('playerFaction', playerFaction);
  }, [units, commandPoints, rosterText, roundPoints, paintedBonus, gameDate, customFileName, playerName, playerFaction]);

  const updateUnit = (id, field, value) => {
    setUnits(prevUnits =>
      prevUnits.map(unit =>
        unit.id === id ? { ...unit, [field]: value } : unit
      )
    );
  };

  const handleExportPDF = () => {
    exportToPDF({
      units,
      commandPoints,
      roundPoints,
      paintedBonus,
      gameDate,
      customFileName,
      playerName,
      playerFaction
    });
  };

  const handleNavigateHome = () => {
    navigate('/', { state: { playerMode: '1' } });
  };

  const handleResetData = () => {
    const confirmed = window.confirm('Are you sure you want to reset all data?');
    if (!confirmed) return;
    resetData({
      setUnits,
      setCommandPoints,
      setRosterText,
      setRoundPoints,
      setPaintedBonus,
      setGameDate,
      setCustomFileName,
      setPlayerName,
      setPlayerFaction
    });
  };

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handlePlayerFactionChange = (event) => {
    setPlayerFaction(event.target.value);
  };

  const getFactionOptions = () => {
    const options = [];
    Object.entries(factionCategories).forEach(([category, factions]) => {
      Object.entries(factions).forEach(([factionName, iconPath]) => {
        options.push({
          category,
          name: factionName,
          icon: iconPath
        });
      });
    });
    return options;
  };

  const handleParseRoster = () => {
    console.log('Parsing roster text:', rosterText);
    try {
      const parsedUnits = parseRoster(rosterText);
      console.log('Parsed units:', parsedUnits);
      setUnits(parsedUnits);
    } catch (error) {
      console.error('Error parsing roster:', error);
      alert('Error parsing roster. Please check the console for details.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container 
        maxWidth="md" 
        sx={{ 
          paddingTop: { xs: '48px', sm: '64px' },
          paddingBottom: '20px',
          paddingLeft: { xs: '8px', sm: '24px' },
          paddingRight: { xs: '8px', sm: '24px' }
        }}
      >
        <Navbar
          onExportPDF={handleExportPDF}
          onNavigateHome={handleNavigateHome}
          onReset={handleResetData}
          context="singlePlayer"
          currentPage="App"
          sx={{
            '& .MuiButton-root': {
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              '&.MuiButton-containedPrimary': {
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(33, 203, 243, 0.3)',
                }
              },
              '&.MuiButton-containedSecondary': {
                background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(156, 39, 176, 0.3)',
                }
              }
            }
          }}
        />

        <Box className="scrollable-container">
          {/* Player Information Section */}
          <Accordion 
            expanded={playerInfoExpanded}
            onChange={() => setPlayerInfoExpanded(!playerInfoExpanded)}
          >
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />} 
              aria-controls="player-info-content" 
              id="player-info-header"
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h6">
                  {playerName ? playerName : 'Player Information'}
                </Typography>
                {playerFaction && (
                  <img
                    src={playerFaction.icon}
                    alt={playerFaction.name}
                    style={{ width: '80px', height: '80px' }}
                  />
                )}
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Player Name"
                  value={playerName}
                  onChange={handlePlayerNameChange}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: '#90caf9' },
                      '&.Mui-focused fieldset': { borderColor: '#90caf9' },
                    },
                    '& .MuiInputLabel-root': { color: 'white' },
                  }}
                />
                <Autocomplete
                  value={playerFaction}
                  onChange={(event, newValue) => {
                    setPlayerFaction(newValue);
                  }}
                  options={getFactionOptions()}
                  groupBy={(option) => option.category}
                  getOptionLabel={(option) => option?.name || ''}
                  isOptionEqualToValue={(option, value) => option?.name === value?.name}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img
                          src={option.icon}
                          alt={option.name}
                          style={{ width: '80px', height: '80px' }}
                        />
                        {option.name}
                      </Box>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Faction"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': { borderColor: 'white' },
                          '&:hover fieldset': { borderColor: '#90caf9' },
                          '&.Mui-focused fieldset': { borderColor: '#90caf9' },
                        },
                        '& .MuiInputLabel-root': { color: 'white' },
                      }}
                    />
                  )}
                  sx={{
                    '& .MuiAutocomplete-groupLabel': {
                      color: '#90caf9',
                      fontWeight: 'bold',
                    },
                    '& .MuiAutocomplete-paper': {
                      backgroundColor: '#424242',
                    },
                    '& .MuiAutocomplete-option': {
                      color: 'white',
                    },
                  }}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Roster Section */}
          <Accordion
            expanded={expanded.includes('roster')}
            onChange={() =>
              setExpanded((prev) =>
                prev.includes('roster') ? prev.filter((exp) => exp !== 'roster') : [...prev, 'roster']
              )
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="roster-content" id="roster-header">
              <Typography variant="h6">Roster</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RosterInputFields
                rosterText={rosterText}
                setRosterText={setRosterText}
                gameDate={gameDate}
                setGameDate={setGameDate}
                customFileName={customFileName}
                setCustomFileName={setCustomFileName}
                parseRoster={handleParseRoster}
                resetData={handleResetData}
              />
              <UnitList units={units} updateUnit={updateUnit} />
            </AccordionDetails>
          </Accordion>

          {/* Command Points Section */}
          <Accordion
            expanded={expanded.includes('cp')}
            onChange={() =>
              setExpanded((prev) => (prev.includes('cp') ? prev.filter((exp) => exp !== 'cp') : [...prev, 'cp']))
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cp-content" id="cp-header">
              <Typography variant="h6">Command Points</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CommandPointsTracker commandPoints={commandPoints} setCommandPoints={setCommandPoints} />
            </AccordionDetails>
          </Accordion>

          {/* Victory Points Section */}
          <Accordion
            expanded={expanded.includes('vp')}
            onChange={() =>
              setExpanded((prev) => (prev.includes('vp') ? prev.filter((exp) => exp !== 'vp') : [...prev, 'vp']))
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="vp-content" id="vp-header">
              <Typography variant="h6">Victory Points</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RoundPointsTracker 
                roundPoints={roundPoints} 
                setRoundPoints={setRoundPoints} 
                paintedBonus={paintedBonus} 
                setPaintedBonus={setPaintedBonus} 
              />
            </AccordionDetails>
          </Accordion>

          <Box flexGrow={1} />

          {/* Move Total Score outside of the Victory Points accordion */}
          <Typography variant="h6" align="center" className="total-score" gutterBottom>
            Total Score: {calculateTotalScore(roundPoints, paintedBonus)}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SinglePlayer;
