import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UnitList from './components/UnitList';
import CommandPointsTracker from './components/CommandPointsTracker';
import CommandPointsTracker2 from './components/CommandPointsTracker2';
import RoundPointsTracker from './components/RoundPointsTracker';
import RoundPointsTracker2 from './components/RoundPointsTracker2';
import Navbar from './components/Navbar';
import RosterInputFields from './components/RosterInputFields';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { saveData, loadData } from './utils/localStorageUtil';
import { exportTwoPlayerToPDF } from './utils/pdfUtil2';
import { calculateTotalScore } from './utils/scoreUtil';
import { parseRoster } from './utils/rosterParser';
import { resetData } from './utils/dataUtil';
import './App.css';

const theme = createTheme({
  palette: { mode: 'dark' },
});

const App2Player = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [player1Name, setPlayer1Name] = useState(
    location.state?.player1Name || localStorage.getItem('player1Name') || 'Player 1'
  );
  const [player1Faction, setPlayer1Faction] = useState(
    location.state?.player1Faction || JSON.parse(localStorage.getItem('player1Faction')) || { name: 'Imperium', logo: '' }
  );
  const [player2Name, setPlayer2Name] = useState(
    location.state?.player2Name || localStorage.getItem('player2Name') || 'Player 2'
  );
  const [player2Faction, setPlayer2Faction] = useState(
    location.state?.player2Faction || JSON.parse(localStorage.getItem('player2Faction')) || { name: 'Imperium', logo: '' }
  );

  const [units, setUnits] = useState(loadData('units') || []);
  const [rosterText, setRosterText] = useState(loadData('rosterText') || '');
  const [commandPointsPlayer1, setCommandPointsPlayer1] = useState(loadData('commandPointsPlayer1') || 0);
  const [commandPointsPlayer2, setCommandPointsPlayer2] = useState(loadData('commandPointsPlayer2') || 0);
  const [roundPointsPlayer1, setRoundPointsPlayer1] = useState(loadData('roundPointsPlayer1') || Array(5).fill(0));
  const [roundPointsPlayer2, setRoundPointsPlayer2] = useState(loadData('roundPointsPlayer2') || Array(5).fill(0));
  const [paintedBonusPlayer1, setPaintedBonusPlayer1] = useState(loadData('paintedBonusPlayer1') || false);
  const [paintedBonusPlayer2, setPaintedBonusPlayer2] = useState(loadData('paintedBonusPlayer2') || false);
  const [gameDate, setGameDate] = useState(loadData('gameDate') || new Date().toISOString().split('T')[0]);
  const [customFileName, setCustomFileName] = useState(loadData('customFileName') || '');
  const [expanded, setExpanded] = useState(['roster', 'cp', 'vp']);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('player1Name', player1Name);
    localStorage.setItem('player2Name', player2Name);
    localStorage.setItem('player1Faction', JSON.stringify(player1Faction));
    localStorage.setItem('player2Faction', JSON.stringify(player2Faction));
    saveData('units', units);
    saveData('rosterText', rosterText);
    saveData('commandPointsPlayer1', commandPointsPlayer1);
    saveData('commandPointsPlayer2', commandPointsPlayer2);
    saveData('roundPointsPlayer1', roundPointsPlayer1);
    saveData('roundPointsPlayer2', roundPointsPlayer2);
    saveData('paintedBonusPlayer1', paintedBonusPlayer1);
    saveData('paintedBonusPlayer2', paintedBonusPlayer2);
    saveData('gameDate', gameDate);
    saveData('customFileName', customFileName);
  }, [
    player1Name, player2Name, player1Faction, player2Faction,
    units, rosterText, commandPointsPlayer1, commandPointsPlayer2,
    roundPointsPlayer1, roundPointsPlayer2,
    paintedBonusPlayer1, paintedBonusPlayer2,
    gameDate, customFileName,
  ]);

  const updateUnit = (id, field, value) => {
    setUnits(prevUnits =>
      prevUnits.map(unit =>
        unit.id === id ? { ...unit, [field]: value } : unit
      )
    );
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

  const handleNavigateHome = () => {
    navigate('/', { state: { playerMode: '2' } });
  };

  const handleResetData = () => {
    const confirmed = window.confirm('Are you sure you want to reset all data?');
    if (!confirmed) return;
    resetData({
      setUnits,
      setRosterText,
      setCommandPointsPlayer1,
      setCommandPointsPlayer2,
      setRoundPointsPlayer1,
      setRoundPointsPlayer2,
      setPaintedBonusPlayer1,
      setPaintedBonusPlayer2,
      setGameDate,
      setCustomFileName,
      setPlayer1Name,
      setPlayer2Name,
      setPlayer1Faction,
      setPlayer2Faction,
    });
  };

  const handleExportPDF = () => {
    exportTwoPlayerToPDF({
      units,
      commandPointsPlayer1,
      commandPointsPlayer2,
      roundPointsPlayer1,
      roundPointsPlayer2,
      paintedBonusPlayer1,
      paintedBonusPlayer2,
      gameDate,
      customFileName,
      player1Name,
      player2Name,
      player1FactionLogo: player1Faction.logo,
      player2FactionLogo: player2Faction.logo,
    });
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
          context="twoPlayer"
          currentPage="App2Player"
        />

        <Box className="scrollable-container">
          {/* Player 1's Roster Section */}
          <Accordion
            expanded={expanded.includes('roster')}
            onChange={() =>
              setExpanded(prev =>
                prev.includes('roster') 
                  ? prev.filter(exp => exp !== 'roster') 
                  : [...prev, 'roster']
              )
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{player1Name}'s Roster</Typography>
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
              setExpanded(prev => (prev.includes('cp') ? prev.filter(exp => exp !== 'cp') : [...prev, 'cp']))
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cp-content" id="cp-header">
              <Typography variant="h6">Command Points</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                marginBottom={2}
              >
                <Box 
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    mb: { xs: 2, sm: 0 }
                  }}
                >
                  {player1Faction.logo && (
                    <img
                      src={player1Faction.logo}
                      alt={`${player1Faction.name} logo`}
                      style={{ height: '60px', maxWidth: '100%', objectFit: 'contain', marginRight: '10px' }}
                    />
                  )}
                  <CommandPointsTracker
                    commandPoints={commandPointsPlayer1}
                    setCommandPoints={setCommandPointsPlayer1}
                    customHeading={`${player1Name} - CP`}
                  />
                </Box>
                <Box 
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <CommandPointsTracker2
                    commandPoints={commandPointsPlayer2}
                    setCommandPoints={setCommandPointsPlayer2}
                    customHeading={`${player2Name} - CP`}
                  />
                  {player2Faction.logo && (
                    <img
                      src={player2Faction.logo}
                      alt={`${player2Faction.name} logo`}
                      style={{ height: '60px', maxWidth: '100%', objectFit: 'contain', marginLeft: '10px' }}
                    />
                  )}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Victory Points Section */}
          <Accordion
            expanded={expanded.includes('vp')}
            onChange={() =>
              setExpanded(prev => (prev.includes('vp') ? prev.filter(exp => exp !== 'vp') : [...prev, 'vp']))
            }
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="vp-content" id="vp-header">
              <Typography variant="h6">Victory Points</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RoundPointsTracker
                roundPoints={roundPointsPlayer1}
                setRoundPoints={setRoundPointsPlayer1}
                paintedBonus={paintedBonusPlayer1}
                setPaintedBonus={setPaintedBonusPlayer1}
                customHeading={`${player1Name} - VP`}
              />
              <RoundPointsTracker2
                roundPoints={roundPointsPlayer2}
                setRoundPoints={setRoundPointsPlayer2}
                paintedBonus={paintedBonusPlayer2}
                setPaintedBonus={setPaintedBonusPlayer2}
                customHeading={`${player2Name} - VP`}
              />
            </AccordionDetails>
          </Accordion>

          {/* Total Score Section */}
          <Typography variant="h6" align="center" className="total-score" gutterBottom>
            Total Score {player1Name}: {calculateTotalScore(roundPointsPlayer1, paintedBonusPlayer1)}
          </Typography>
          <Typography variant="h6" align="center" className="total-score" gutterBottom>
            Total Score {player2Name}: {calculateTotalScore(roundPointsPlayer2, paintedBonusPlayer2)}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App2Player;
