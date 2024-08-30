import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#FFF9D8' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Rezensionen
        </Typography>
        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{review.name}</Typography>
                  <Typography variant="body2">Bewertung: {review.rating}/5</Typography>
                  <Typography variant="body2">{review.comment}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
