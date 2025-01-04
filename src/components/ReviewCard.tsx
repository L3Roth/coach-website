import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Divider, Rating } from '@mui/material';
import { styled } from '@mui/system';

const FlippableCard = styled(Card)(({ theme }) => ({
  perspective: '1000px',
  width: 250,
  height: 300,
  borderRadius: '15px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    '& .inner': {
      cursor: 'pointer',
    },
  },
}));

const InnerCard = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
});

const Front = styled(CardContent)({
  backfaceVisibility: 'hidden',
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '15px',
});

const Back = styled(CardContent)({
  backfaceVisibility: 'hidden',
  position: 'absolute',
  width: '100%',
  height: '100%',
  transform: 'rotateY(180deg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#5E9050', // Dunkleres Grün für die Rückseite
  borderRadius: '15px',
  color: '#fff',
});

interface ReviewCardProps {
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, avatar, review, rating }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <FlippableCard onClick={handleClick} sx={{ position: 'relative' }}>
      <InnerCard className="inner" sx={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}>
        {/* Vorderseite */}
        <Front>
          <Avatar src={avatar} sx={{ width: 80, height: 80, mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
            {name}
          </Typography>
          <Divider sx={{ width: '80%', my: 2, backgroundColor: '#5E9050' }} />
        </Front>

        {/* Rückseite */}
        <Back>
          <Typography variant="body2" sx={{ mb: 2, textAlign: 'center', fontStyle: 'italic' }}>
            "{review}"
          </Typography>
          <Rating name="read-only" value={rating} readOnly sx={{ color: '#FFD700' }} />
        </Back>
      </InnerCard>
    </FlippableCard>
  );
};

export default ReviewCard;
