import { Card, CardContent, Typography, TextField, Checkbox, Box, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const UnitCard = ({ unit, updateUnit }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card 
      sx={{ 
        mb: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <CardContent sx={{ 
        padding: { xs: 1, sm: 2 },
        '&:last-child': { paddingBottom: { xs: 1, sm: 2 } }
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', sm: 'center' },
          mb: 1 
        }}>
          <Box>
            <Typography 
              variant="h6" 
              component="div"
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}
            >
              {unit.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {unit.points} points
            </Typography>
          </Box>
          <IconButton 
            onClick={() => setExpanded(!expanded)}
            sx={{ 
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              padding: { xs: 0.5, sm: 1 }
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={unit.destroyed || false}
              onChange={(e) => updateUnit(unit.id, 'destroyed', e.target.checked)}
              sx={{ '&.Mui-checked': { color: '#ff1744' } }}
            />
            <Typography>Destroyed</Typography>
          </Box>
        </Box>

        <Collapse in={expanded}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            {/* Battle Kills Section */}
            <Box>
              <Typography variant="subtitle2" color="#90caf9" gutterBottom>
                Battle Kills
              </Typography>
              <TextField
                label="Units Killed"
                value={unit.unitsKilled || ''}
                onChange={(e) => updateUnit(unit.id, 'unitsKilled', e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
              />
            </Box>

            {/* Agenda Section */}
            <Box>
              <Typography variant="subtitle2" color="#90caf9" gutterBottom>
                Agenda
              </Typography>
              <TextField
                label="Current Agenda"
                value={unit.agenda || ''}
                onChange={(e) => updateUnit(unit.id, 'agenda', e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={2}
                sx={{ mb: 1 }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={unit.agendaCompleted || false}
                  onChange={(e) => updateUnit(unit.id, 'agendaCompleted', e.target.checked)}
                  sx={{ '&.Mui-checked': { color: '#4caf50' } }}
                />
                <Typography>Agenda Completed</Typography>
              </Box>
            </Box>

            {/* Equipment Section */}
            {unit.equipment && (
              <Box>
                <Typography variant="subtitle2" color="#90caf9" gutterBottom>
                  Equipment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {unit.equipment.join(', ')}
                </Typography>
              </Box>
            )}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default UnitCard; 