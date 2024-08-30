import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#FFF9D8' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
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
