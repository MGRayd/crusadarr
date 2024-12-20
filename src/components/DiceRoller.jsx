import React, { useState } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Navbar from './Navbar';
import HitRolls from './HitRolls';
import WoundRolls from './WoundRolls';
import Saves from './Saves';
import Damage from './Damage';
import FeelNoPain from './FeelNoPain';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const DiceRoller = () => {
  const [tab, setTab] = useState(0);
  const [hits, setHits] = useState(0);
  const [wounds, setWounds] = useState(0);
  const [failedSaves, setFailedSaves] = useState(0);
  const [totalDamage, setTotalDamage] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [tabGroup, setTabGroup] = useState(0); // Track visible tab group
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width: 450px)'); // Detect small screens

  const tabs = [
    { label: 'HITS', component: <HitRolls setHits={setHits} resetKey={resetKey} /> },
    { label: 'WOUNDS', component: <WoundRolls hits={hits} setWounds={setWounds} /> },
    { label: 'SAVES', component: <Saves wounds={wounds} setFailedSaves={setFailedSaves} /> },
    { label: 'DAMAGE', component: <Damage failedSaves={failedSaves} setTotalDamage={setTotalDamage} /> },
    { label: 'FNP', component: <FeelNoPain totalDamage={totalDamage} /> },
  ];

  // Calculate visible tabs based on screen size and tab group
  const visibleTabs = isSmallScreen
    ? tabs.slice(tabGroup * 3, (tabGroup * 3) + 3)
    : tabs;

  const handleTabChange = (event, newValue) => {
    const actualTabIndex = isSmallScreen ? (tabGroup * 3) + newValue : newValue;
    if (actualTabIndex >= 0 && actualTabIndex < tabs.length) setTab(actualTabIndex);
  };

  const getVisibleTabValue = () => {
    if (!isSmallScreen) return tab;
    const groupStartIndex = tabGroup * 3;
    const relativeIndex = tab - groupStartIndex;
    return relativeIndex >= 0 && relativeIndex < 3 ? relativeIndex : 0;
  };

  const handleError = (error) => {
    setError(error);
    console.error('Dice Roller Error:', error);
  };

  const handleGlobalReset = () => {
    try {
      const confirmed = window.confirm('Are you sure you want to reset all rolls?');
      if (!confirmed) return;

      setIsLoading(true);
      setHits(0);
      setWounds(0);
      setFailedSaves(0);
      setTotalDamage(0);
      setResetKey((prevKey) => prevKey + 1);
      setTab(0);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextGroup = () => {
    const maxGroups = Math.ceil(tabs.length / 3);
    if (tabGroup < maxGroups - 1) {
      setTabGroup(tabGroup + 1);
      setTab((tabGroup + 1) * 3); // Set tab to first tab in new group
    }
  };

  const handlePreviousGroup = () => {
    if (tabGroup > 0) {
      setTabGroup(tabGroup - 1);
      setTab(tabGroup * 3 - 3); // Set tab to first tab in previous group
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        onNavigateHome={() => console.log('Navigate home')}
        currentPage="DiceRoller"
        onExportPDF={null}
        context="DiceRoller"
      />
      <Box sx={{ 
        width: '100%',
        padding: '12px',
        backgroundColor: 'transparent'
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            textAlign: 'left',
            marginBottom: '12px',
            color: '#ffffff',
            fontWeight: 500
          }}
        >
          Dice Roller
        </Typography>
      </Box>
      <Container sx={{ maxWidth: '100%' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginTop={4}>
          <Typography variant="h4" gutterBottom>
            Dice Roller
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            marginBottom: 2,
          }}
        >
          {isSmallScreen && (
            <IconButton
              onClick={handlePreviousGroup}
              sx={{
                color: '#ffffff',
                visibility: tabGroup > 0 ? 'visible' : 'hidden',
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
          <Tabs
            value={getVisibleTabValue()}
            onChange={handleTabChange}
            variant={isSmallScreen ? 'standard' : 'scrollable'}
            sx={{
              flex: 1,
              '& .MuiTabs-indicator': {
                backgroundColor: '#90caf9',
              },
            }}
          >
            {visibleTabs.map((tabItem, index) => (
              <Tab
                key={index}
                label={tabItem.label}
                sx={{ color: '#ffffff', textTransform: 'none' }}
              />
            ))}
          </Tabs>
          {isSmallScreen && (
            <IconButton
              onClick={handleNextGroup}
              sx={{
                color: '#ffffff',
                visibility:
                  tabGroup < Math.ceil(tabs.length / 3) - 1 ? 'visible' : 'hidden',
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}
        </Box>
        <Box marginBottom={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleGlobalReset}
            sx={{ textTransform: 'none' }}
          >
            Reset All
          </Button>
        </Box>
        {tabs[tab]?.component || tabs[0].component}
      </Container>
    </ThemeProvider>
  );
};

export default DiceRoller;
