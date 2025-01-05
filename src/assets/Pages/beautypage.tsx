import React from 'react';

const BeautyPage: React.FC = () => {
  const imageUrl = 'https://example.com/your-banner-image.jpg';

  return (
    <div className="relative w-full" style={{ height: '426px', backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
      <div className="absolute inset-0">
        {imageUrl ? (
          <img
            src={'src/assets/Components/images/homeliving.png'}
            alt="BeautyPage"
            className="w-full h-full object-cover" style={{height:'453px'}}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-xl">Men's Banner Image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeautyPage;