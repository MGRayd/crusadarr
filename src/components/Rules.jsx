import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Forces from './Rules/Forces';
import WeaponModifications, { weaponModifications } from './Rules/WeaponModifications';
import BattleScars, { battleScars } from './Rules/BattleScars';
import d6Icon from '../assets/D6-Icon.png';
import factionsData from './Factions';
import Navbar from './Navbar';
import '../App.css';

const Rules = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selectedFaction, setSelectedFaction] = useState('');
  const [subFactions, setSubFactions] = useState([]);
  const dropdownRef = useRef(null);

  const handleSearchChange = (event) => setSearchTerm(event.target.value.toLowerCase());
  const handleAccordionChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);
  const handleFactionChange = (event) => {
    const faction = event.target.value;
    setSelectedFaction(faction);
    setSubFactions(Object.entries(factionsData[faction] || {}));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('button')
      ) {
        setSelectedFaction('');
        setSubFactions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredContent = {
    forces: searchTerm === '' || 'crusade forces'.includes(searchTerm),
    battleScars:
      searchTerm === '' ||
      'battle scars'.includes(searchTerm) ||
      battleScars.some(
        (scar) =>
          scar.title.toLowerCase().includes(searchTerm) ||
          scar.description.toLowerCase().includes(searchTerm)
      ),
    weaponMods:
      searchTerm === '' ||
      'weapon modifications'.includes(searchTerm) ||
      weaponModifications.some(
        (mod) =>
          mod.title.toLowerCase().includes(searchTerm) ||
          mod.description.toLowerCase().includes(searchTerm)
      ),
  };

  const accordionStyles = {
    backgroundColor: '#424242',
    color: '#ffffff',
    borderRadius: '8px',
    marginBottom: '8px',
  };

  const accordionSummaryStyles = {
    backgroundColor: '#333333',
    color: '#ffffff',
    borderRadius: '8px',
  };

  const mainFactionStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '16px',
  };

  const factionButtonStyles = {
    backgroundColor: '#424242',
    color: '#ffffff',
    '&:hover': { backgroundColor: '#666666' },
  };

  return (
    <Container sx={{ paddingTop: { xs: '56px', sm: '64px' }, paddingBottom: '20px' }}>
      <Navbar
        onNavigateHome={() => navigate('/')}
        currentPage="Rules"
        onExportPDF={null}
        context="Rules"
        onToggleLogo={() => {}}
        logoVisible={true}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={4}>
        <Typography variant="h4" gutterBottom>
          CRUSADE RULES
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Typography variant="body1">Crusade Rules 17/09/2024</Typography>
        <Typography variant="body2">
          Faction Rules with thanks to{' '}
          <a
            href="https://wahapedia.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#90caf9', textDecoration: 'none' }}
          >
            Wahapedia
          </a>
        </Typography>
      </Box>
      <Box marginTop={2} ref={dropdownRef}>
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <Select
            value={selectedFaction}
            onChange={handleFactionChange}
            displayEmpty
            style={{ backgroundColor: '#fff', color: '#000' }}
            renderValue={(value) => value || 'Factions'}
          >
            <MenuItem value="" disabled>
              <em>Factions</em>
            </MenuItem>
            {Object.keys(factionsData).map((faction) => (
              <MenuItem key={faction} value={faction}>
                {faction}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {selectedFaction && (
        <Box sx={mainFactionStyles}>
          {Object.entries(factionsData[selectedFaction]).map(([subFactionName, subFactionUrl]) => (
            <Button
              key={subFactionName}
              variant="contained"
              onClick={(e) => {
                e.stopPropagation();
                window.open(subFactionUrl, '_blank');
              }}
              sx={factionButtonStyles}
            >
              {subFactionName}
            </Button>
          ))}
        </Box>
      )}
      <Box marginTop={2}>
        <TextField
          fullWidth
          label="Search Rules"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for Weapon Modifications, Battle Scars, etc."
          InputLabelProps={{ style: { color: '#ffffff' } }}
          inputProps={{ style: { color: '#ffffff', backgroundColor: '#424242', borderRadius: '8px' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ffffff' },
              '&:hover fieldset': { borderColor: '#90caf9' },
              '&.Mui-focused fieldset': { borderColor: '#90caf9' },
            },
          }}
        />
      </Box>
      <Box marginTop={4} />
      {filteredContent.forces && (
        <Accordion
          expanded={expanded === 'forces'}
          onChange={handleAccordionChange('forces')}
          sx={accordionStyles}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
            aria-controls="forces-content"
            id="forces-header"
            sx={accordionSummaryStyles}
          >
            <Typography variant="h5">Crusade Forces</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Forces />
          </AccordionDetails>
        </Accordion>
      )}
      {filteredContent.weaponMods && (
        <Accordion
          expanded={expanded === 'weaponMods'}
          onChange={handleAccordionChange('weaponMods')}
          sx={accordionStyles}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
            aria-controls="weapon-mods-content"
            id="weapon-mods-header"
            sx={accordionSummaryStyles}
          >
            <Typography variant="h5">Weapon Modifications</Typography>
            <Box display="flex" alignItems="center">
              <img src={d6Icon} alt="D6 Icon" style={{ width: '32px', height: '32px', marginRight: '8px' }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <WeaponModifications />
          </AccordionDetails>
        </Accordion>
      )}
      {filteredContent.battleScars && (
        <Accordion
          expanded={expanded === 'battleScars'}
          onChange={handleAccordionChange('battleScars')}
          sx={accordionStyles}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
            aria-controls="battle-scars-content"
            id="battle-scars-header"
            sx={accordionSummaryStyles}
          >
            <Typography variant="h5">Battle Scars</Typography>
            <Box display="flex" alignItems="center">
              <img src={d6Icon} alt="D6 Icon" style={{ width: '32px', height: '32px', marginRight: '8px' }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <BattleScars />
          </AccordionDetails>
        </Accordion>
      )}
    </Container>
  );
};

export default Rules;
