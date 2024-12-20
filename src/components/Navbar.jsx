import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import FAQDialog from './FAQ';

const Navbar = ({ onExportPDF, onNavigateHome, context, currentPage }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleReturn = () => {
    const fromPage = location.state?.from || '/';
    navigate(fromPage);
  };
  const handleOpenFAQ = () => setFaqOpen(true);
  const handleCloseFAQ = () => setFaqOpen(false);

  const hoverStyle = {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 0,
    },
    borderRadius: 0,
    transition: 'none',
  };

  const renderDrawerList = () => (
    <List>
      <ListItem component="button" onClick={() => navigate('/')} sx={{ ...hoverStyle }}>
        <ListItemText primary="Home" sx={{ color: '#ffffff' }} />
      </ListItem>
      {(currentPage === 'App' || currentPage === 'App2Player') && onExportPDF && (
        <ListItem component="button" onClick={onExportPDF} sx={{ ...hoverStyle }}>
          <ListItemText primary="Export PDF" sx={{ color: '#ffffff' }} />
        </ListItem>
      )}
      {(currentPage === 'App' || currentPage === 'App2Player') && (
        <>
          <ListItem
            component="button"
            onClick={() => navigate('/rules', { state: { from: location.pathname } })}
            sx={{ ...hoverStyle }}
          >
            <ListItemText primary="Rules" sx={{ color: '#ffffff' }} />
          </ListItem>
          <ListItem
            component="button"
            onClick={() => navigate('/houserules', { state: { from: location.pathname } })}
            sx={{ ...hoverStyle }}
          >
            <ListItemText primary="House Rules" sx={{ color: '#ffffff' }} />
          </ListItem>
          <ListItem
            component="button"
            onClick={() => navigate('/missions', { state: { from: location.pathname } })}
            sx={{ ...hoverStyle }}
          >
            <ListItemText primary="Missions" sx={{ color: '#ffffff' }} />
          </ListItem>
        </>
      )}
      {(currentPage === 'App' || currentPage === 'App2Player') &&
        currentPage !== 'DiceRoller' && (
          <ListItem
            component="button"
            onClick={() => navigate('/dice-roller', { state: { from: location.pathname } })}
            sx={{ ...hoverStyle }}
          >
            <ListItemText primary="Dice Roller" sx={{ color: '#ffffff' }} />
          </ListItem>
        )}
      {(currentPage === 'Rules' ||
        currentPage === 'HouseRules' ||
        currentPage === 'Missions' ||
        currentPage === 'DiceRoller') && (
        <ListItem component="button" onClick={handleReturn} sx={{ ...hoverStyle }}>
          <ListItemText primary="Return" sx={{ color: '#ffffff' }} />
        </ListItem>
      )}
      <ListItem component="button" onClick={handleOpenFAQ} sx={{ ...hoverStyle }}>
        <ListItemText primary="Info" sx={{ color: '#ffffff' }} />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          backgroundColor: '#333333',
          color: '#ffffff',
          left: 0,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
            minHeight: { xs: '56px', sm: '64px' },
            height: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'block', md: 'none' }, ...hoverStyle }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1 }}>
              CRUSADARR
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              gap: 1,
            }}
          >
            <IconButton
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ mx: 1, ...hoverStyle }}
            >
              <Typography variant="body1">Home</Typography>
            </IconButton>
            {(currentPage === 'App' || currentPage === 'App2Player') && onExportPDF && (
              <IconButton
                color="inherit"
                onClick={onExportPDF}
                sx={{ mx: 1, ...hoverStyle }}
              >
                <Typography variant="body1">Export PDF</Typography>
              </IconButton>
            )}
            {(currentPage === 'App' || currentPage === 'App2Player') && (
              <>
                <IconButton
                  color="inherit"
                  onClick={() =>
                    navigate('/rules', { state: { from: location.pathname } })
                  }
                  sx={{ mx: 1, ...hoverStyle }}
                >
                  <Typography variant="body1">Rules</Typography>
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() =>
                    navigate('/houserules', { state: { from: location.pathname } })
                  }
                  sx={{ mx: 1, ...hoverStyle }}
                >
                  <Typography variant="body1">House Rules</Typography>
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() =>
                    navigate('/missions', { state: { from: location.pathname } })
                  }
                  sx={{ mx: 1, ...hoverStyle }}
                >
                  <Typography variant="body1">Missions</Typography>
                </IconButton>
              </>
            )}
            {(currentPage === 'App' || currentPage === 'App2Player') &&
              currentPage !== 'DiceRoller' && (
                <IconButton
                  color="inherit"
                  onClick={() =>
                    navigate('/dice-roller', { state: { from: location.pathname } })
                  }
                  sx={{ mx: 1, ...hoverStyle }}
                >
                  <Typography variant="body1">Dice Roller</Typography>
                </IconButton>
              )}
            {(currentPage === 'Rules' ||
              currentPage === 'HouseRules' ||
              currentPage === 'Missions' ||
              currentPage === 'DiceRoller') && (
              <IconButton
                color="inherit"
                onClick={handleReturn}
                sx={{ mx: 1, ...hoverStyle }}
              >
                <Typography variant="body1">Return</Typography>
              </IconButton>
            )}
            <IconButton
              color="inherit"
              onClick={handleOpenFAQ}
              sx={{ mx: 1, ...hoverStyle }}
            >
              <Typography variant="body1">Info</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#333333',
            color: '#ffffff',
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ width: { xs: 250, sm: 300 } }}
        >
          {renderDrawerList()}
        </Box>
      </Drawer>
      <FAQDialog open={faqOpen} onClose={handleCloseFAQ} />
    </>
  );
};

export default Navbar;
