import React, { useEffect, useState } from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReviewCard from './ReviewCard';
import ReviewImage from '../images/Profilbild.jpg';
import { fetchReviews } from '../services/api';

const reviews = [
  { name: 'John Doe', avatar: ReviewImage, review: 'Fantastisches Coaching!', rating: 5 },
  { name: 'Jane Smith', avatar: ReviewImage, review: 'Sehr hilfreich und professionell.', rating: 4 },
  { name: 'Sam Wilson', avatar: ReviewImage, review: 'Eine tolle Erfahrung.', rating: 5 },
  { name: 'Anna Brown', avatar: ReviewImage, review: 'Exzellenter Service!', rating: 4 },
  { name: 'Michael Green', avatar: ReviewImage, review: 'Sehr unterstützend.', rating: 5 },
  { name: 'Sophia White', avatar: ReviewImage, review: 'Hoch empfehlenswert.', rating: 5 },
  { name: 'William Black', avatar: ReviewImage, review: 'Hat mir sehr geholfen.', rating: 4 },
  { name: 'Emily Johnson', avatar: ReviewImage, review: 'Großartige Beratung.', rating: 5 },
  { name: 'David King', avatar: ReviewImage, review: 'Sehr zufrieden!', rating: 5 },
];

interface Review {
  id: number;
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

const ReviewCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const reviews = await fetchReviews();
      setReviews(reviews);
    };

    getBlogPosts();
  }, []);

  console.log('REVIEWS ', reviews)

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4, mb: 4}}>
      <IconButton onClick={handlePrev}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container spacing={2} justifyContent="center">
        {reviews.slice(index, index + 3).map((review, i) => (
          <Grid item key={i}>
            <ReviewCard
              name={review.name}
              avatar={review.avatar}
              review={review.review}
              rating={review.rating}
            />
          </Grid>
        ))}
      </Grid>
      <IconButton onClick={handleNext}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default ReviewCarousel;
