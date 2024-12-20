// BattleScars.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import d1Icon from '../../assets/d1.png';
import d2Icon from '../../assets/d2.png';
import d3Icon from '../../assets/d3.png';
import d4Icon from '../../assets/d4.png';
import d5Icon from '../../assets/d5.png';
import d6Icon from '../../assets/d6.png';

// Exporting battleScars array so it can be used elsewhere, like in Rules.jsx for search functionality
export const battleScars = [
  {
    title: "CRIPPLING DAMAGE",
    description: `Reduced to walking wounded, plagued by engine faults or hobbled by lacerations, the impaired still limp stoically into battle.
    This unit cannot Advance and you must subtract 1" from the Move characteristic of models in this unit.`,
    icon: d1Icon,
  },
  {
    title: "BATTLE-WEARY",
    description: `Sapped of energy and impetus, fighting formations that endure extended tours can be psychologically crippled by constant attack.
    Each time this unit takes a Battle-shock, Leadership, Desperate Escape or Out of Action test, subtract 1 from that test.`,
    icon: d2Icon,
  },
  {
    title: "FATIGUED",
    description: `These fighters have suffered heavily in war, indecision and disorganisation hampering their ability at effective battlefield cohesion.
    Subtract 1 from the Objective Control characteristic of models in this unit and this unit never receives a Charge bonus.`,
    icon: d3Icon,
  },
  {
    title: "DISGRACED",
    description: `Having committed some gross failure in battle, these warriors are excluded from high strategies and tasked with unheroic actions.
    You cannot use any Stratagems to affect this unit and this unit cannot be Marked for Greatness.`,
    icon: d4Icon,
  },
  {
    title: "MARK OF SHAME",
    description: `Humiliated, cursed or haunted by terrible injury, these fighters are shunned or avoided and few will acknowledge them even in war.
    This unit cannot form an Attached unit, it is unaffected by the Aura abilities of friendly units, and it cannot be Marked for Greatness.`,
    icon: d5Icon,
  },
  {
    title: "DEEP SCARS",
    description: `Battle damage and grievous injuries can linger and fester, worsening until they severely hamper a unit’s constitution.
    Each time a Critical Hit is scored against this unit, that attack automatically wounds this unit.`,
    icon: d6Icon,
  },
];

const BattleScars = () => {
  return (
    <Box marginTop={2}>
      <Grid container spacing={2}>
        {battleScars.map((scar, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box display="flex" alignItems="flex-start" marginBottom={2}>
              <img
                src={scar.icon}
                alt={`${scar.title} icon`}
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {scar.title}
                </Typography>
                <Typography variant="body2">{scar.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BattleScars;
