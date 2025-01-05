import React, { useState, useEffect } from 'react';

const ImageCarousel: React.FC = () => {
  const images = [
    'https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg',
    'https://assets.isu.pub/document-structure/230520200100-f899ee12ac33fd00e4faa8ac2a39d1e7/v1/0cdca8b82bf42b2813b6e5429da2649a.jpeg',
    'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/242473827_10160157467293221_2645921924837005982_n-sixteen_nine.jpg?size=948:533'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[34rem] overflow-hidden"> {/* Custom height */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Ensure the image covers the container
            />
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
