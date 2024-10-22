import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Button, Container, Typography } from '@mui/material';
import logo from './assets/logo.png'; // Adjust the path as needed

const HomePage = () => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={logo} alt="App Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <Typography variant="h6" gutterBottom>
      Alpha 0.1
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/app')} // Navigate to the app page
      >
        Start Tracking
      </Button>
    </Container>
  );
};

export default HomePage;
