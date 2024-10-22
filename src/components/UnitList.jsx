import React, { useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  TextField,
  Collapse,
} from '@mui/material';

const UnitList = ({ units, updateUnit }) => {
  // State to manage which unit types are expanded
  const [expandedCategories, setExpandedCategories] = useState({});

  // Function to toggle the visibility of unit categories
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Group units by category
  const groupedUnits = units.reduce((acc, unit) => {
    if (!acc[unit.category]) {
      acc[unit.category] = [];
    }
    acc[unit.category].push(unit);
    return acc;
  }, {});

  return (
    <div className="unit-list">
      {Object.entries(groupedUnits).map(([category, unitArray]) => (
        <Box key={category} sx={{ marginBottom: 2 }}>
          <Typography
            variant="h6"
            onClick={() => toggleCategory(category)}
            sx={{
              cursor: 'pointer',
              color: '#007bff',
              borderBottom: '1px solid #ccc',
              paddingBottom: 0.5,
            }}
          >
            {category} {expandedCategories[category] ? '-' : '+'}
          </Typography>
          <Collapse in={expandedCategories[category]}>
            <Box sx={{ paddingLeft: 2 }}>
              {unitArray.map((unit) => (
                <Box key={unit.id} className="unit-info" sx={{ marginBottom: 1 }}>
                  <Typography variant="subtitle1" className="unit-name">
                    {unit.name}
                  </Typography>
                  <Box className="kills-container" sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      label="Units Killed"
                      type="number"
                      value={unit.kills}
                      onChange={(e) =>
                        updateUnit(unit.id, 'kills', parseInt(e.target.value, 10) || 0)
                      }
                      size="small"
                      sx={{ marginRight: 2 }}
                    />
                    <Box className="destroyed-checkbox">
                      <Checkbox
                        checked={unit.destroyed}
                        onChange={(e) =>
                          updateUnit(unit.id, 'destroyed', e.target.checked)
                        }
                      />
                      <Typography variant="body2">Destroyed</Typography>
                    </Box>
                  </Box>

                  {/* New TextField for Agenda */}
                  <TextField
                    label="Agenda"
                    variant="outlined"
                    fullWidth
                    value={unit.agenda || ''} // Ensure agenda state is tracked
                    onChange={(e) => updateUnit(unit.id, 'agenda', e.target.value)} // Update agenda state
                    margin="normal"
                  />

                  {/* Checkbox for Agenda Completed */}
                  <Box className="agenda-completed-checkbox" sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    <Checkbox
                      checked={unit.agendaCompleted} // Check if agenda is completed
                      onChange={(e) =>
                        updateUnit(unit.id, 'agendaCompleted', e.target.checked) // Update completed status
                      }
                    />
                    <Typography variant="body2">Agenda Completed</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Collapse>
        </Box>
      ))}
    </div>
  );
};

export default UnitList;
