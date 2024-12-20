import { useEffect, useState, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const CACHE_KEY = 'missionsCache';
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const MissionsDisplay = () => {
  const [missions, setMissions] = useState([]);
  const [selectedMission, setSelectedMission] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const folderId = '1gizwwE0gqZy30G0pZ1dMo2Nj8pxCEv9k';
  const driveApiKey = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
  const navigate = useNavigate();
  const pdfViewerRef = useRef(null);

  const fetchMissions = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${driveApiKey}&fields=files(id,name,mimeType)`
      );
      const pdfFiles = response.data.files
        .filter(file => file.mimeType === 'application/pdf')
        .sort((a, b) => a.name.localeCompare(b.name));

      const monthRegex = /^(January|February|March|April|May|June|July|August|September|October|November|December)\b/i;
      const incursionARegex = /\d+a\b/i;
      const incursionBRegex = /\d+b\b/i;

      const customMissions = pdfFiles.filter(mission => monthRegex.test(mission.name));
      const incursionStrikeForceA = pdfFiles.filter(mission => incursionARegex.test(mission.name));
      const incursionStrikeForceB = pdfFiles.filter(mission => incursionBRegex.test(mission.name));

      setMissions({
        customMissions,
        incursionStrikeForceA,
        incursionStrikeForceB,
      });

      const now = new Date().getTime();
      localStorage.setItem(CACHE_KEY, JSON.stringify({ missions: { customMissions, incursionStrikeForceA, incursionStrikeForceB }, timestamp: now }));
    } catch (error) {
      console.error('Error fetching missions:', error);
    }
  };

  const loadCachedMissions = () => {
    const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
    const now = new Date().getTime();

    if (cachedData && now - cachedData.timestamp < CACHE_EXPIRATION) {
      setMissions(cachedData.missions);
    } else {
      fetchMissions();
    }
  };

  useEffect(() => {
    loadCachedMissions();
  }, []);

  const refreshMissions = () => {
    fetchMissions();
  };

  const getDriveFileUrl = (fileId) => `https://drive.google.com/file/d/${fileId}/preview`;

  const filterBySearch = (missionsList) =>
    missionsList.filter(mission => mission.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleMissionSelect = (mission) => {
    setSelectedMission(mission);
    setTimeout(() => {
      pdfViewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <Navbar
        onExportPDF={null}
        onNavigateHome={() => navigate('/')}
        context="Missions"
        currentPage="Missions"
      />
      <Container sx={{ paddingTop: { xs: '56px', sm: '64px' }, maxWidth: '100%' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginTop={4}>
          <Typography variant="h4" gutterBottom>
            Missions
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <TextField
            fullWidth
            label="Search Missions"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for missions..."
            InputLabelProps={{ style: { color: '#ffffff' } }}
            InputProps={{
              style: { color: '#ffffff', backgroundColor: '#424242', borderRadius: '8px' },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ffffff' },
                '&:hover fieldset': { borderColor: '#90caf9' },
                '&.Mui-focused fieldset': { borderColor: '#90caf9' },
              },
            }}
          />
          <Button variant="contained" color="primary" onClick={refreshMissions} sx={{ marginLeft: 2 }}>
            Refresh Data
          </Button>
        </Box>
        {missions.customMissions && filterBySearch(missions.customMissions).length > 0 && (
          <Accordion sx={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#333333', color: '#ffffff' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#333333', color: '#ffffff' }}>
              <Typography variant="h5">Custom Missions</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box sx={{ backgroundColor: '#424242', width: '100%' }}>
                <List sx={{ padding: 0 }}>
                  {filterBySearch(missions.customMissions).map((mission, index) => (
                    <ListItem
                      key={index}
                      component="button"
                      onClick={() => handleMissionSelect(mission)}
                      sx={{
                        borderBottom: '1px solid #333',
                        width: '100%',
                        margin: 0,
                        padding: '8px 16px',
                        '&:hover': { backgroundColor: '#555555' },
                      }}
                    >
                      <ListItemText primary={mission.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {missions.incursionStrikeForceA && filterBySearch(missions.incursionStrikeForceA).length > 0 && (
          <Accordion sx={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#333333', color: '#ffffff' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#333333', color: '#ffffff' }}>
              <Typography variant="h5">Incursion/Strike Force A</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box sx={{ backgroundColor: '#424242', width: '100%' }}>
                <List sx={{ padding: 0 }}>
                  {filterBySearch(missions.incursionStrikeForceA).map((mission, index) => (
                    <ListItem
                      key={index}
                      component="button"
                      onClick={() => handleMissionSelect(mission)}
                      sx={{
                        borderBottom: '1px solid #333',
                        width: '100%',
                        margin: 0,
                        padding: '8px 16px',
                        '&:hover': { backgroundColor: '#555555' },
                      }}
                    >
                      <ListItemText primary={mission.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {missions.incursionStrikeForceB && filterBySearch(missions.incursionStrikeForceB).length > 0 && (
          <Accordion sx={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#333333', color: '#ffffff' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#333333', color: '#ffffff' }}>
              <Typography variant="h5">Incursion/Strike Force B</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box sx={{ backgroundColor: '#424242', width: '100%' }}>
                <List sx={{ padding: 0 }}>
                  {filterBySearch(missions.incursionStrikeForceB).map((mission, index) => (
                    <ListItem
                      key={index}
                      component="button"
                      onClick={() => handleMissionSelect(mission)}
                      sx={{
                        borderBottom: '1px solid #333',
                        width: '100%',
                        margin: 0,
                        padding: '8px 16px',
                        '&:hover': { backgroundColor: '#555555' },
                      }}
                    >
                      <ListItemText primary={mission.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
        {selectedMission && (
          <Box ref={pdfViewerRef} marginTop={4} width="100%">
            <Typography variant="h6" gutterBottom>
              Viewing: {selectedMission.name}
            </Typography>
            <iframe
              key={selectedMission?.id}
              src={getDriveFileUrl(selectedMission.id)}
              width="100%"
              height="600px"
              style={{ border: 'none' }}
              title={selectedMission.name}
              onError={() => console.error('Error loading PDF in iframe')}
            />
          </Box>
        )}
      </Container>
    </>
  );
};

export default MissionsDisplay;
