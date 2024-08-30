import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Box sx={{ backgroundColor: 'rgba(255, 249, 216, 0.7)', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h2" gutterBottom>Willkommen zu meiner Coaching-Seite</Typography>
        <Typography variant="h6" gutterBottom>Individuelles Coaching für Ihre Bedürfnisse</Typography>
        <Button variant="contained" color="primary">Kostenloses Telefonat vereinbaren</Button>
      </Box>
    </Box>
  );
};

export default Hero;
