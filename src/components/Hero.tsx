import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AutismAndADHD from '../images/Autism_and_ADHD.webp';
import InnerSpark1 from '../images/InnerSpark1.webp';
import NarcissmHelp from '../images/NarcissmHelp.webp';

const Hero: React.FC = () => {
  const settings = {
    dots: true, // Aktiviert die Punkte unter dem Slider
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 5000,
    customPaging: (i: number) => (
      <Box
        sx={{
          width: '10px',
          height: '10px',
          backgroundColor: '#c4c4c4',
          borderRadius: '50%',
          display: 'inline-block',
          margin: '0 5px',
        }}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        position: 'absolute', 
        bottom: '10px', 
        width: '100%',
        }}>
        <ul style={{ margin: 0, padding: 0, listStyleType: 'none', display: 'flex' }}>{dots}</ul>
      </Box>
    ),
  };

  const slides = [
    {
      image: AutismAndADHD,
      title: 'Fokus auf Ihr persönliches Wachstum',
      subtitle: 'Erreichen Sie Ihre Ziele mit mentaler Klarheit und Fokus',
    },
    {
      image: InnerSpark1,
      title: 'Psychologische Beratung für innere Stärke',
      subtitle: 'Gemeinsam Wege finden, um Herausforderungen zu meistern',
    },
    {
      image: NarcissmHelp,
      title: 'Coaching für mehr Lebensqualität',
      subtitle: 'Individuelle Unterstützung für Ihre Entwicklung',
    },
  ];

  return (
    <Box sx={{ height: '50vh', position: 'relative', marginTop: '150px' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: '50vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255, 249, 216, 0.7)',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: '100%',
              }}
            >
              <Typography variant="h1" gutterBottom sx={{fontSize: '45px'}}>
                {slide.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {slide.subtitle}
              </Typography>
              <Button variant="contained" color="primary" href='/contact'>
                Kostenloses Telefonat vereinbaren
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;
