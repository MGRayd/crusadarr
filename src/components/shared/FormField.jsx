import { TextField } from '@mui/material';

export const FormField = ({ label, value, onChange, type = 'text', ...props }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    type={type}
    variant="outlined"
    fullWidth
    sx={{
      '& .MuiOutlinedInput-root': {
        color: 'text.primary',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
      },
    }}
    {...props}
  />
); 