import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Typography } from '@mui/material';

interface AboutMeProps {
  text: string;
}

const AboutMe: React.FC<AboutMeProps> = ({text}) => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#5E9050', color: '#FFF' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          {text}
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutMe;
