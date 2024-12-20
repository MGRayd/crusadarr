import { useEffect, useState } from 'react';
import { fetchGameRules } from '../HouseRulesService';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import d3Icon from '../assets/D3-Icon.png';
import d6Icon from '../assets/D6-Icon.png';
import Navbar from './Navbar';

const CACHE_KEY = 'houseRulesCache';
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const HouseRules = () => {
  const [rules, setRules] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadRules = async () => {
      const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
      const now = new Date().getTime();

      if (cachedData && now - cachedData.timestamp < CACHE_EXPIRATION) {
        setRules(cachedData.rules);
      } else {
        const data = await fetchGameRules();
        setRules(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ rules: data, timestamp: now }));
      }
    };

    loadRules();
  }, []);

  const handleRefresh = async () => {
    const data = await fetchGameRules();
    setRules(data);
    localStorage.setItem(CACHE_KEY, JSON.stringify({ rules: data, timestamp: new Date().getTime() }));
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredRules = rules.filter((rule) =>
    rule[1].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorizedRules = {};
  filteredRules.forEach(rule => {
    const category = rule[0];
    if (!categorizedRules[category]) {
      categorizedRules[category] = [];
    }
    categorizedRules[category].push(rule);
  });

  return (
    <>
      <Navbar
        onExportPDF={null}
        onNavigateHome={() => navigate('/')}
        context="houseRules"
        currentPage="HouseRules"
      />
      <Container sx={{ paddingTop: { xs: '56px', sm: '64px' }, paddingBottom: '20px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
          <Typography variant="h4" gutterBottom>
            House Rules
          </Typography>
        </Box>
        <Box marginTop={4} />
        <Box display="flex" justifyContent="flex-end" marginBottom={2}>
          <Button variant="contained" color="primary" onClick={handleRefresh}>
            Refresh Data
          </Button>
        </Box>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            label="Search Rules"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for rules..."
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
                '& fieldset': { borderColor: '#ffffff' },
                '&:hover fieldset': { borderColor: '#90caf9' },
                '&.Mui-focused fieldset': { borderColor: '#90caf9' },
              },
            }}
          />
        </Box>
        <Box marginTop={4} />
        {Object.keys(categorizedRules).map((category) => (
          <Accordion
            key={category}
            expanded={expanded === category}
            onChange={handleAccordionChange(category)}
            sx={{ backgroundColor: '#424242', color: '#ffffff', marginBottom: '8px' }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
              aria-controls={`${category}-content`}
              id={`${category}-header`}
              sx={{ backgroundColor: '#333333', color: '#ffffff' }}
            >
              <Typography variant="h5">{category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper} sx={{ backgroundColor: '#424242', color: '#ffffff' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: '#333333', color: '#ffffff' }}>
                        Rule Name
                      </TableCell>
                      <TableCell style={{ backgroundColor: '#333333', color: '#ffffff' }}>
                        Rule Description
                      </TableCell>
                      <TableCell style={{ backgroundColor: '#333333', color: '#ffffff' }} />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categorizedRules[category].map((rule, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ color: '#ffffff' }}>{rule[1]}</TableCell>
                        <TableCell style={{ color: '#ffffff' }}>{rule[2]}</TableCell>
                        <TableCell align="center" style={{ color: '#ffffff' }}>
                          {rule[3] === 'D3' ? (
                            <img src={d3Icon} alt="D3 dice icon" style={{ width: '36px' }} />
                          ) : rule[3] === 'D6' ? (
                            <img src={d6Icon} alt="D6 dice icon" style={{ width: '36px' }} />
                          ) : null}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default HouseRules;
