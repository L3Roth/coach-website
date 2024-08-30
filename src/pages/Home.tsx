import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
//import AboutMe from '../components/AboutMe';
import Offer from '../components/Offer';
import Reviews from '../components/Reviews';
import { fetchAboutMe, fetchOffers, fetchReviews } from '../services/api';

const Home: React.FC = () => {
  const [aboutMe, setAboutMe] = useState<string>('');
  const [offers, setOffers] = useState<string>('');
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const aboutMeData = await fetchAboutMe();
      const offersData = await fetchOffers();
      const reviewsData = await fetchReviews();

      setAboutMe(aboutMeData.text);
      setOffers(offersData.text);
      setReviews(reviewsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      {/*<AboutMe text={aboutMe} />*/}
      <Offer text={offers} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Home;
