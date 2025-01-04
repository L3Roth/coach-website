import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Button, CardMedia, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchOffers } from '../services/api'; // Import der fetchOffers Methode

interface Offer {
  id: number;
  title: string;
  shortDescription: string | null;
  content: string;
  imageUrl: string | null;
}

const OfferOverview: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const navigate = useNavigate();

  // Daten laden
  useEffect(() => {
    const getOffers = async () => {
      const data = await fetchOffers();
      setOffers(data); // Daten im State speichern
    };

    getOffers();
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: '#FFF9D8', marginTop: '100px' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ color: '#5E9050', fontWeight: 'bold' }}>
          Mein Angebot
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#6E6343', mb: 6 }}>
          Entdecken Sie unsere individuellen Coaching-Angebote, die Ihnen helfen, in verschiedenen Lebensbereichen erfolgreich und erfüllt zu sein.
        </Typography>

        {/* Angebot-Abschnitte */}
        {offers.map((offer, index) => (
          <Grid
            container
            key={offer.id}
            spacing={4}
            sx={{
              mb: 6,
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Abwechselnd Bild-Text Position
              alignItems: 'center',
            }}
          >
            {/* Bild */}
            <Grid item xs={12} md={6}>
            <CardMedia
                component="img"
                image={offer.imageUrl || '/path/to/placeholder.jpg'} // Fallback, falls imageUrl null ist
                alt={offer.title}
                sx={{ height: 300, objectFit: 'cover', borderRadius: '10px' }}
            />
            </Grid>

            {/* Text */}
            <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: '#5E9050', fontWeight: 'bold' }}>
                {offer.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#6E6343', mb: 4 }}>
                {offer.shortDescription}
            </Typography>
              <CardActions>
                <Button
                  size="medium"
                  sx={{ color: '#FFF', backgroundColor: '#667A61', ':hover': { backgroundColor: '#5E9050' } }}
                  onClick={() => navigate(`/offer/${offer.id}`)}
                >
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
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default OfferOverview;
