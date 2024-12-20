import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UnitCard from './UnitCard';
import { useState } from 'react';

const UnitList = ({ units, updateUnit }) => {
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState(['CHARACTERS']);

  const categories = {
    'CHARACTERS': units.filter(unit => unit.type === 'CHARACTERS'),
    'BATTLELINE': units.filter(unit => unit.type === 'BATTLELINE'),
    'DEDICATED TRANSPORTS': units.filter(unit => unit.type === 'DEDICATED TRANSPORTS'),
    'OTHER DATASHEETS': units.filter(unit => unit.type === 'OTHER DATASHEETS'),
    'ALLIED UNITS': units.filter(unit => unit.type === 'ALLIED UNITS')
  };

  const handleAccordionChange = (category) => (event, isExpanded) => {
    setExpandedCategories(prev => 
      isExpanded 
        ? [...prev, category]
        : prev.filter(cat => cat !== category)
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {Object.entries(categories).map(([category, categoryUnits]) => (
        categoryUnits.length > 0 && (
          <Accordion 
            key={category}
            expanded={expandedCategories.includes(category)}
            onChange={handleAccordionChange(category)}
            sx={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              '&:before': { display: 'none' }, // Removes the default divider
              boxShadow: 'none',
              '&.Mui-expanded': {
                margin: '4px 0',
              },
            }}
          >
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              sx={{
                minHeight: { xs: '40px', sm: '48px' },
                padding: { xs: '0 8px', sm: '0 16px' },
                '& .MuiAccordionSummary-content': {
                  margin: { xs: '8px 0', sm: '12px 0' }
                }
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                flexWrap: 'wrap'
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#90caf9',
                    fontSize: { xs: '0.9rem', sm: '1.25rem' }
                  }}
                >
                  {category}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                >
                  ({categoryUnits.length} {categoryUnits.length === 1 ? 'unit' : 'units'})
                </Typography>
              </Box>
            </AccordionSummary>
            
            <AccordionDetails sx={{ pt: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {categoryUnits.map(unit => (
                  <UnitCard 
                    key={unit.id} 
                    unit={unit} 
                    updateUnit={updateUnit}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        )
      ))}
    </Box>
  );
};

export default UnitList;
