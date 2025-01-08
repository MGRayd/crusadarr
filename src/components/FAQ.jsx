import React from 'react';
import { Dialog, DialogContent, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = ({ open, onClose }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: '#333333',
          color: '#ffffff',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">About</Typography>
        <IconButton aria-label="close" onClick={onClose} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <Accordion expanded={expanded === 'panel0'} onChange={handleAccordionChange('panel0')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}>
            <Typography variant="body1">About Me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hi, I'm Mark! I'm 42 years old and this is my first Web App CRUSADARR.
            </Typography>
            <Typography sx={{ mt: 1 }}>
              I've been a fan of Warhammer 40K for years, and playing Crusade games with friends is a great way to spend some free time. 
              I developed Crusadarr to make it easier for us to track missions, unit progress, and command points during our games.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}>
            <Typography variant="body1">What is Crusadarr?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Crusadarr is a web application designed to support Warhammer 40K players in managing their Crusade games. It allows players to track essential gameplay elements like unit kills, deaths, and agendas, manage command and round points, view and reference Crusade and House rules, and access PDFs for missions from Leviathan and custom games. It's an all-in-one resource for tracking missions, points, and resources to streamline the tabletop experience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}>
            <Typography variant="body1">How do I add my roster?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">To add your roster:</Typography>
            <Typography component="div" sx={{ pl: 2 }}>
              • Enter your name and select your faction<br />
              • Paste 40K Roster from Official 40K app into the Paste Roster field<br />
              • Click on Parse button
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}>
            <Typography variant="body1">How do I export my game to PDF?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">To export your game to PDF:</Typography>
            <Typography component="div" sx={{ pl: 2 }}>
              • Click on Export PDF<br />
              • Save the file to your device<br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}>
            <Typography variant="body1">App Updates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div" sx={{ mb: 1 }}>Version 1.9 (24/11/2024):</Typography>
            <Typography component="div" sx={{ pl: 2 }}>
              • Enhanced PDF generation for game summaries<br />
              • Enhanced unit tracking with improved UI/UX<br />
            </Typography>
            <Typography component="div" sx={{ mb: 1, mt: 2 }}>Version 1.8a (22/11/2024):</Typography>
            <Typography component="div" sx={{ pl: 2 }}>
              • Updated all faction icons to 500x500 resolution reduced file size<br />
              • Removed depreicated files and updated code to work with new files<br />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default FAQ;
