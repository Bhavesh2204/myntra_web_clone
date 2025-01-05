import React from 'react';
import NBar from '../Components/Navigationbars/NBar'; // Remove .tsx if unnecessary
import ImageCarousel from './carousel'; // Remove .tsx if unnecessary
import ShopByCategory from './Category'; // Remove .tsx if unnecessary
import Footer from './footer'; // Remove .tsx if unnecessary



const HomePage: React.FC = () => {
  return (
    <div>
      <NBar />
      <ImageCarousel />
      <ShopByCategory />
      <Footer />
      
    </div>
  );
};

export default HomePage;

