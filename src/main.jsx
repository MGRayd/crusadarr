import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#333333',
      default: '#212121'
    },
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#9c27b0'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.homepage': {
            background: 'linear-gradient(135deg, #1a237e 0%, #121212 100%)',
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#333333',
          color: '#ffffff'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333',
          color: '#ffffff'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333',
          '&:hover': {
            backgroundColor: '#424242'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333',
          color: '#ffffff',
          '&.glass-morphism': {
            backgroundColor: 'rgba(51, 51, 51, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
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
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#ffffff',
            backgroundColor: 'rgba(66, 66, 66, 0.8)',
            borderRadius: '8px',
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
          '& .MuiInputLabel-root': {
            color: '#ffffff',
          }
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(144, 202, 249, 0.2)',
          },
          '&.Mui-selected': {
            backgroundColor: '#90caf9',
            '&:hover': {
              backgroundColor: '#64b5f6',
            },
          }
        }
      }
    }
  }
});

// Lazy load components for code splitting
const SinglePlayer = lazy(() => import('./SinglePlayer.jsx'));
const App2Player = lazy(() => import('./App2Player.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const Rules = lazy(() => import('./components/Rules.jsx'));
const HouseRules = lazy(() => import('./components/HouseRules.jsx'));
const Missions = lazy(() => import('./components/Missions.jsx'));
const DiceRoller = lazy(() => import('./components/DiceRoller.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app" element={<SinglePlayer />} />
            <Route path="/app2" element={<App2Player />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/houserules" element={<HouseRules />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/dice-roller" element={<DiceRoller />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
);
