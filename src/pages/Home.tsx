import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import ReviewCarousel from '../components/ReviewCarousel';
import GameBoard from '../game/GameBoard';
//import { fetchOffers, fetchReviews } from '../services/api';

const Home: React.FC = () => {
  const [aboutMe, setAboutMe] = useState<string>('');
  const [offers, setOffers] = useState<string>('');
  const [reviews, setReviews] = useState<any[]>([]);

  /*useEffect(() => {
    const fetchData = async () => {
      //const aboutMeData = await fetchAboutMe();
      //const offersData = await fetchOffers();
      //const reviewsData = await fetchReviews();

      //setAboutMe(aboutMeData.text);
      //setOffers(offersData.text);
      //setReviews(reviewsData);
    };

    //fetchData();
  }, []);*/

  return (
    <div>
      <Hero />
      <AboutMe/>
      <Offer/>
    </div>
  );
};

export default Home;
