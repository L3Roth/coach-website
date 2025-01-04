import React, { useEffect, useState } from "react";
import { Box, Container, Typography, CardMedia, Button, CircularProgress } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = 'http://localhost:1337/api'; // Basis-URL

interface Offer {
  id: number;
  title: string;
  imageUrl: string | null;
  content: string;
}

export const OfferDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/offers/${id}?populate=*`);
        const data = response.data.data;

        const imageUrl =
          data.attributes.Images?.data && data.attributes.Images.data[0]?.attributes?.url
            ? `http://localhost:1337${data.attributes.Images.data[0].attributes.url}`
            : null;

        setOffer({
          id: data.id,
          title: data.attributes.Title || "Kein Titel verfügbar",
          content: data.attributes.Content || "Kein Inhalt verfügbar",
          imageUrl,
        });
      } catch (error) {
        setError("Angebot konnte nicht geladen werden.");
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ py: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ color: "red" }}>
            {error}
          </Typography>
        </Container>
      </Box>
    );
  }

  if (!offer) {
    return (
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center">
            Angebot nicht gefunden
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, marginTop: '150px'}}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={{ color: '#5E9050', fontWeight: 'bold', fontSize: '40px' }}>
          {offer.title}
        </Typography>
        {offer.imageUrl && (
          <CardMedia
            component="img"
            image={offer.imageUrl}
            alt={offer.title}
            sx={{ height: 300, objectFit: "cover", mb: 4 }}
          />
        )}
        <Typography variant="body1" sx={{ color: '#6E6343', lineHeight: 1.8 }}>
          {offer.content}
        </Typography>
        <Button
          size="medium"
          sx={{ color: '#5E9050', mt: 4 }}
          onClick={() => navigate('/contact')}
        >
          Kontakt aufnehmen
        </Button>
      </Container>
    </Box>
  );
};
