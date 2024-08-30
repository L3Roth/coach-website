import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#6E6343', color: '#FFF' }}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Bleiben Sie verbunden
            </Typography>
            <IconButton color="inherit" href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com">
              <LinkedIn />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Kontakt
            </Typography>
            <Typography variant="body2">
              Adresse: Musterstraße 123, 12345 Musterstadt
            </Typography>
            <Typography variant="body2">
              Telefon: +49 123 456 789
            </Typography>
            <Typography variant="body2">
              E-Mail: info@mustercoach.de
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Dein Coach. Alle Rechte vorbehalten.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
