import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Box sx={{ 
      minHeight: '70vh', // Stellt sicher, dass die Box mindestens die Bildschirmhöhe hat
      display: 'flex',
      marginTop: '150px',
      flexDirection: 'column',
      justifyContent: 'space-between', // Stellt sicher, dass der Footer immer unten bleibt
      backgroundColor: '#FFF9D8'
    }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h1" align="center" gutterBottom sx={{ color: '#5E9050', fontWeight: 'bold', fontSize: '40px' }}>
          Kontakt
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="E-Mail"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nachricht"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Nachricht senden
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
