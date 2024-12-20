import React from 'react';
import { Box, Typography } from '@mui/material';

const Forces = () => {
  return (
    <Box marginTop={2}>
      <Typography variant="h5" gutterBottom>
        Crusade Forces
      </Typography>
      <Typography variant="body1">
        A Crusade force is one that allows you to track the development of your units from the greenest of recruits to the most hard-bitten veterans over the course of many battles. The more you play with a Crusade force, the more its units will gain experience, abilities, acquire long-lost artefacts, and gain scars. 
      </Typography>
      <Typography variant="body1" marginTop={2}>
        Crusade forces are designed to be used as part of a campaign where you grow your favourite collection from a fledgling force into a powerful army feared across the galaxy, earning new Battle Honours with every victory (or defeat).
      </Typography>
      <Typography variant="body1" marginTop={2}>
        To play with a Crusade force, you will first need to create an Order of Battle.
      </Typography>
    </Box>
  );
};

export default Forces;
