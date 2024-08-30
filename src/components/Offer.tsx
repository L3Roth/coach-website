import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface OfferProps {
  text: string;
}

const Offer: React.FC<OfferProps> = ({ text }) => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#5E9050', color: '#FFF' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Mein Angebot
        </Typography>
        <Typography variant="body1">
          {text}
        </Typography>
      </Container>
    </Box>
  );
};

export default Offer;
