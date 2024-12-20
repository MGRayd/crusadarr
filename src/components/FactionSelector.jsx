import { Box, TextField, Autocomplete, FormControl} from '@mui/material';
import { useState} from 'react';

// Import faction logos
//Imperium
import AdeptaSororitas from '../assets/Faction Icons/Imperium/Adepta Sororitas.png';
import AdeptusAstartes from '../assets/Faction Icons/Imperium/Adeptus Astartes.png';
import AdeptusCustodes from '../assets/Faction Icons/Imperium/Adeptus Custodes.png';
import AdeptusMechanicus from '../assets/Faction Icons/Imperium/Adeptus Mechanicus.png';
import AstraMilitarum from '../assets/Faction Icons/Imperium/Astra Militarum.png';
import BlackTemplars from '../assets/Faction Icons/Imperium/Black Templars.png';
import BloodAngels from '../assets/Faction Icons/Imperium/Blood Angels.png';
import DarkAngels from '../assets/Faction Icons/Imperium/Dark Angels.png';
import LeaguesOfVotann from '../assets/Faction Icons/Imperium/Leagues of Votann.png';
import SpaceWolves from '../assets/Faction Icons/Imperium/Space Wolves.png';

//Xenos
import Aeldari from '../assets/Faction Icons/Xenos/Aeldari.png';
import Drukhari from '../assets/Faction Icons/Xenos/Drukhari.png';
import GenestealerCults from '../assets/Faction Icons/Xenos/Genestealer Cults.png';
import Necrons from '../assets/Faction Icons/Xenos/Necrons.png';
import Orks from '../assets/Faction Icons/Xenos/Orks.png';
import Tau from '../assets/Faction Icons/Xenos/Tau.png';
import Tyranids from '../assets/Faction Icons/Xenos/Tyranids.png';

//Chaos
import AlphaLegion from '../assets/Faction Icons/Chaos/Alpha Legion.png';
import ChaosDaemons from '../assets/Faction Icons/Chaos/Chaos Daemons.png';
import DeathGuard from '../assets/Faction Icons/Chaos/Death Guard.png';
import Khorne from '../assets/Faction Icons/Chaos/Khorne.png';
import Nurgle from '../assets/Faction Icons/Chaos/Nurgle.png';
import Slaanesh from '../assets/Faction Icons/Chaos/Slaanesh.png';
import ThousandSons from '../assets/Faction Icons/Chaos/Thousand Sons.png';
import WorldBearers from '../assets/Faction Icons/Chaos/World Bearers.png';
import WorldEaters from '../assets/Faction Icons/Chaos/World Eaters.png';

// Reorganize factions into categories
const factionCategories = {
  Imperium: {
    "Adepta Sororitas": AdeptaSororitas,
    "Adeptus Astartes": AdeptusAstartes,
    "Adeptus Custodes": AdeptusCustodes,
    "Adeptus Mechanicus": AdeptusMechanicus,
    "Astra Militarum": AstraMilitarum,
    "Black Templars": BlackTemplars,
    "Blood Angels": BloodAngels,
    "Dark Angels": DarkAngels,
    "Leagues of Votann": LeaguesOfVotann,
    "Space Wolves": SpaceWolves,
  },
  Chaos: {
    "Alpha Legion": AlphaLegion,
    "Chaos Daemons": ChaosDaemons,
    "Death Guard": DeathGuard,
    "Khorne": Khorne,
    "Nurgle": Nurgle,
    "Slaanesh": Slaanesh,
    "Thousand Sons": ThousandSons,
    "World Bearers": WorldBearers,
    "World Eaters": WorldEaters,
  },
  Xenos: {
    "Aeldari": Aeldari,
    "Drukhari": Drukhari,
    "Genestealer Cults": GenestealerCults,
    "Necrons": Necrons,
    "Orks": Orks,
    "Tau": Tau,
    "Tyranids": Tyranids,
  }
};

const FactionSelector = ({ onFactionSelect, sx }) => {
  const [selectedFaction, setSelectedFaction] = useState(null);

  // Convert categories to flat options array with category information
  const getFactionOptions = () => {
    const options = [];
    Object.entries(factionCategories).forEach(([category, factions]) => {
      Object.entries(factions).forEach(([name, logo]) => {
        options.push({
          category,
          name,
          logo
        });
      });
    });
    return options;
  };

  const handleFactionChange = (event, newFaction) => {
    setSelectedFaction(newFaction);
    if (newFaction) {
      onFactionSelect(newFaction.name, newFaction.logo);
    }
  };

  return (
    <FormControl fullWidth variant="outlined" sx={sx}>
      <Autocomplete
        options={getFactionOptions()}
        groupBy={(option) => option.category}
        value={selectedFaction}
        onChange={handleFactionChange}
        getOptionLabel={(option) => option?.name || ''}
        isOptionEqualToValue={(option, value) => option?.name === value?.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Faction"
            variant="outlined"
            sx={{
              backgroundColor: '#424242',
              color: '#ffffff',
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#90caf9',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#90caf9',
              },
              '& .MuiSvgIcon-root': {
                color: '#ffffff',
              },
            }}
          />
        )}
        renderOption={(props, option) => (
          <Box
            component="li"
            {...props}
            key={option.name}
            display="flex"
            alignItems="center"
          >
            <Box component="img" src={option.logo} alt={option.name} sx={{ width: 30, height: 30, marginRight: 1 }} />
            {option.name}
          </Box>
        )}
        sx={{
          '& .MuiAutocomplete-groupLabel': {
            color: '#90caf9',
            fontWeight: 'bold',
          },
          '& .MuiAutocomplete-paper': {
            backgroundColor: '#424242',
          },
          '& .MuiAutocomplete-option': {
            color: 'white',
          },
        }}
      />
    </FormControl>
  );
};

export default FactionSelector;
