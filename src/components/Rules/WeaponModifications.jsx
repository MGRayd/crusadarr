import { Box, Typography, Grid } from '@mui/material';
import d1Icon from '../../assets/d1.png';
import d2Icon from '../../assets/d2.png';
import d3Icon from '../../assets/d3.png';
import d4Icon from '../../assets/d4.png';
import d5Icon from '../../assets/d5.png';
import d6Icon from '../../assets/d6.png';

export const weaponModifications = [
  {
    title: "FINELY BALANCED",
    description: `Perfectly weighted for the weapon’s owner, this weapon feels to be an extension of their own limbs. 
    Improve this weapon’s Ballistic Skill or Weapon Skill characteristic by 1.`,
    icon: d1Icon,
  },
  {
    title: "BRUTAL",
    description: `Enhanced with hyper-dense metalloids or empowered by advanced energies, this weapon can be wielded with meteoric force. 
    Add 1 to this weapon’s Strength characteristic.`,
    icon: d2Icon,
  },
  {
    title: "ARMOUR PIERCING",
    description: `Honed to a razor-edged sharpness or invested with crackling energy fields, this weapon can crack the heaviest enemy battle plate. 
    Improve this weapon’s Armour Penetration characteristic by 1.`,
    icon: d3Icon,
  },
  {
    title: "MASTER-WORKED",
    description: `Forged by master-smiths and hand-worked over generations by skilled artificers, this weapon’s deadly killing power matches its martial elegance. 
    Add 1 to this weapon’s Damage characteristic.`,
    icon: d4Icon,
  },
  {
    title: "HEIRLOOM",
    description: `Handed to worthy scions or claimed by ruthless victors, the greatest weapons are valued for their quality. 
    Add 1 to this weapon’s Attacks characteristic.`,
    icon: d5Icon,
  },
  {
    title: "PRECISE",
    description: `Whether fitted with superior scopes or crafted by master duellists, this weapon has been modified with the sole purpose of executing enemy heroes and commanders. 
    Each time a Critical Wound is scored for an attack made with this weapon, that attack has the [PRECISION] ability.`,
    icon: d6Icon,
  },
];

const WeaponModifications = () => {
  return (
    <Box marginTop={2}>
      <Grid container spacing={2}>
        {weaponModifications.map((modification, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box display="flex" alignItems="flex-start" marginBottom={2}>
              <img
                src={modification.icon}
                alt={`${modification.title} icon`}
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {modification.title}
                </Typography>
                <Typography variant="body2">{modification.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeaponModifications;
