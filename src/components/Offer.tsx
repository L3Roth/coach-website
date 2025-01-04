import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { fetchOffers } from '../services/api';

interface Offer {
  id: number;
  title: string;
  shortDescription: string | null;
  content: string;
  imageUrl: string | null;
}

const OfferPage: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
      const getOffers = async () => {
        const data = await fetchOffers();
        setOffers(data); // Daten im State speichern
      };
  
      getOffers();
  }, []);
  
  return (
    <Box sx={{ py: 8, backgroundColor: '#667A61' }}>
      <Container maxWidth="lg">
        {/* Überschrift */}
        <Typography variant="h1" align="center" gutterBottom sx={{ color: '#FFF9D8', fontWeight: 'bold', fontSize: '40px' }}>
          Mein Angebot
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#FFF9D8', mb: 6 }}>
          Entdecken Sie unsere individuellen Coaching-Angebote, die Ihnen helfen, in verschiedenen Lebensbereichen erfolgreich und erfüllt zu sein.
        </Typography>
        
        {/* Angebot-Karten */}
        <Grid container spacing={4}>
          {offers.map((offer, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'transform 0.5s ease', ':hover': {
                    transform: 'scale(1.05)', // Leichte Vergrößerung bei Hover
                  }, 
                  backgroundColor: '#FFF9D8'
                }}>

                <CardMedia
                  component="img"
                  image={offer.imageUrl || '/path/to/placeholder.jpg'}
                  alt={offer.title}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
                
                {/* Inhalt */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#5E9050', fontWeight: 'bold' }}>
                    {offer.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6E6343' }}>
                    {offer.shortDescription}
                  </Typography>
                </CardContent>
                
                {/* Interaktive Elemente */}
                <CardActions>
                  <Button
                    size="medium"
                    sx={{ color: '#FFF', backgroundColor: '#7EA30D', ':hover': { backgroundColor: '#5E9050' } }}
                    onClick={() => navigate(`/offer/${offer.id}`)}>
                      Mehr erfahren
                  </Button>
                  <Button
                      size="medium"
                      sx={{ color: '#5E9050' }}
                      onClick={() => navigate('/contact')} // Navigiert zur Contact-Seite
                  >
                      Kontakt aufnehmen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OfferPage;
