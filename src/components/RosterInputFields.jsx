import { Box, Button, TextField, useTheme, useMediaQuery } from '@mui/material';

const RosterInputFields = ({
  rosterText,
  setRosterText,
  gameDate,
  setGameDate,
  customFileName,
  setCustomFileName,
  parseRoster,
  resetData
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
      <TextField
        label="Paste Roster Text"
        multiline
        rows={4}
        value={rosterText}
        onChange={(e) => setRosterText(e.target.value)}
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
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2 
      }}>
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          width: { xs: '100%', sm: 'auto' }
        }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={parseRoster}
            fullWidth={isMobile}
          >
            Parse
          </Button>

          <Button 
            variant="contained" 
            color="secondary"
            onClick={resetData}
            fullWidth={isMobile}
          >
            Reset
          </Button>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          width: '100%'
        }}>
          <TextField
            label="Game Date"
            type="date"
            value={gameDate}
            onChange={(e) => setGameDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          
          <TextField
            label="File Name"
            value={customFileName}
            onChange={(e) => setCustomFileName(e.target.value)}
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RosterInputFields;
