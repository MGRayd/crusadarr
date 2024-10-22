import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import UnitList from './components/UnitList';
import CommandPointsTracker from './components/CommandPointsTracker';
import RoundPointsTracker from './components/RoundPointsTracker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings'; // Import settings icon
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [units, setUnits] = useState([]); // To manage units list
  const [commandPoints, setCommandPoints] = useState(0); // Command points state
  const [rosterText, setRosterText] = useState(""); // Store roster text
  const [roundPoints, setRoundPoints] = useState(Array(5).fill(0)); // Round points for 5 rounds
  const [paintedBonus, setPaintedBonus] = useState(false); // Painted bonus as a boolean
  const [gameDate, setGameDate] = useState(""); // State for game date
  const [customFileName, setCustomFileName] = useState(""); // State for custom file name

  // State for managing the settings menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to parse pasted roster data
  const parseRoster = () => {
    const data = rosterText;
    const lines = data.split('\n');
    const unitRegex = /\((\d+) points\)/; // Regex to match unit lines with "(X points)"
    let parsedUnits = [];
    let currentCategory = '';

    const validCategories = ["CHARACTERS", "BATTLELINE", "DEDICATED TRANSPORTS", "OTHER DATASHEETS", "ALLIED UNITS"];

    lines.forEach((line) => {
      line = line.trim();

      // Check if the current line is one of the valid categories
      if (validCategories.includes(line)) {
        currentCategory = line;
      } 
      // Check if the line contains a unit (i.e., matches the points pattern)
      else if (unitRegex.test(line) && currentCategory) {
        const unitName = line;
        const unitId = `${unitName}-${parsedUnits.length}`; // Create a unique ID
        parsedUnits.push({ 
          id: unitId, 
          name: unitName, 
          kills: 0, 
          destroyed: false, 
          category: currentCategory, 
          agenda: '', // Initialize agenda field
          agendaCompleted: false // Initialize agenda completed field
        }); 
      }
    });

    setUnits(parsedUnits); // Set parsed units to state
  };

  // Function to reset all data
  const resetData = () => {
    setUnits([]); // Clear units
    setCommandPoints(0); // Reset command points
    setRosterText(""); // Clear roster text
    setRoundPoints(Array(5).fill(0)); // Reset round points to 0 for 5 rounds
    setPaintedBonus(false); // Reset painted bonus to false
    setGameDate(""); // Reset game date
    setCustomFileName(""); // Reset custom file name
  };

  // Function to update the unit kills or destroyed status
  const updateUnit = (id, field, value) => {
    setUnits(prevUnits =>
      prevUnits.map(unit =>
        unit.id === id ? { ...unit, [field]: value } : unit
      )
    );
  };

  // Calculate total score based on round points and painted bonus
  const calculateTotalScore = () => {
    const totalRoundPoints = roundPoints.reduce((total, points) => total + points, 0);
    const totalScore = totalRoundPoints + (paintedBonus ? 10 : 0); // Add 10 if painted bonus is true
    return Math.min(totalScore, 100); // Ensure total score does not exceed 100
  };

  // Open settings menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close settings menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to export data to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height; // Get the height of the page
    const margin = 14; // Margin from the left
    let y = 30; // Start position for y-coordinate

    // Determine header content
    const headerDate = gameDate ? new Date(gameDate).toLocaleDateString('en-CA') : new Date().toLocaleDateString('en-CA');
    const headerName = customFileName || `Game on ${headerDate}`;

    // Add header
    doc.setFontSize(16);
    doc.text(headerName, margin, 22);
    doc.setFontSize(12); // Reset font size for the rest of the document

    // Add unit data
    units.forEach((unit) => {
      // Check if the current y position exceeds page height
      if (y + 60 > pageHeight) {
        doc.addPage(); // Add a new page if the content exceeds the height
        y = 30; // Reset y position for the new page
      }
      
      doc.text(`Unit: ${unit.name}`, margin, y);
      y += 6;
      doc.text(`Kills: ${unit.kills}`, margin, y);
      y += 6;
      doc.text(`Destroyed: ${unit.destroyed ? 'Yes' : 'No'}`, margin, y);
      y += 6;
      doc.text(`Category: ${unit.category}`, margin, y);
      y += 6;
      doc.text(`Agenda: ${unit.agenda || ''}`, margin, y);
      y += 6;
      doc.text(`Agenda Completed: ${unit.agendaCompleted ? 'Yes' : 'No'}`, margin, y); // Include agenda completed status
      y += 6;
      doc.text("----------------------------------------------------", margin, y);
      y += 10; // Space between units
    });

    // Summary information
    if (y + 40 > pageHeight) {
      doc.addPage(); // Add a new page if the content exceeds the height
      y = 30; // Reset y position for the new page
    }

    doc.text(`Command Points Unused: ${commandPoints}`, margin, y);
    y += 6;
    doc.text(`Score per Round: ${roundPoints.join(", ")}`, margin, y);
    y += 6;
    doc.text(`Total Score: ${calculateTotalScore()}`, margin, y);
    y += 6;
    doc.text(`Painted Bonus: ${paintedBonus ? 'Yes' : 'No'}`, margin, y);

    // Generate the filename
    const formattedDate = gameDate ? new Date(gameDate).toLocaleDateString('en-CA') : new Date().toLocaleDateString('en-CA');
    const fileName = customFileName || `unit_data_${formattedDate}.pdf`;

    // Save the PDF
    doc.save(fileName);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          {/* Settings Menu */}
          <IconButton onClick={handleClick} color="inherit">
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { handleClose(); navigate('/'); }}>
              Home
            </MenuItem>
            <MenuItem onClick={() => { handleClose(); exportToPDF(); }}>
              Export Data as PDF
            </MenuItem>
            {/* Add Buy Me a Coffee link */}
            <MenuItem onClick={handleClose}>
              <Link href="https://buymeacoffee.com/mgrayd" color="inherit" target="_blank" rel="noopener">
                Buy Me a KitKat
              </Link>
            </MenuItem>
          </Menu>
        </Box>

        <TextField
          multiline
          fullWidth
          variant="outlined"
          placeholder="Paste your roster here"
          value={rosterText}
          onChange={(e) => setRosterText(e.target.value)}
          rows={4}
          margin="normal"
          InputProps={{
            style: { color: 'white' }, // Set text color to white
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter Game Date"
          type="date"
          value={gameDate}
          onChange={(e) => setGameDate(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter Custom File Name (Optional)"
          value={customFileName}
          onChange={(e) => setCustomFileName(e.target.value)}
          margin="normal"
        />

        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Button variant="contained" color="primary" onClick={parseRoster}>
            Parse Roster
          </Button>
          <Button variant="contained" color="secondary" onClick={resetData} style={{ marginLeft: '10px' }}>
            Reset
          </Button>
        </Box>

        {/* Render the list of units */}
        <UnitList units={units} updateUnit={updateUnit} />

        {/* Command Points Tracker */}
        <CommandPointsTracker commandPoints={commandPoints} setCommandPoints={setCommandPoints} />

        {/* Round Points Tracker */}
        <RoundPointsTracker 
          roundPoints={roundPoints} 
          setRoundPoints={setRoundPoints} 
          paintedBonus={paintedBonus} 
          setPaintedBonus={setPaintedBonus} 
        />

        {/* Total Score */}
        <Typography variant="h6" align="center" className="total-score">
          Total Score: {calculateTotalScore()}
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
