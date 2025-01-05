import React from 'react';

const categories = [
  { name: 'Men', image: 'https://static.magicpin.com/storage/blog/images/myntra-online-shopping-for-mens_Cover12.png' },
  { name: 'Women', image: 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/10/01/202310013063155-scaled.jpg?quality=80&zoom=1&ssl=1' },
  { name: 'Kids', image: 'https://img.freepik.com/premium-photo/stylish-cute-kids-posing-color-background-stylish-cute-kids-posing-colorful-bg_483187-7653.jpg' },
  { name: 'Home & Living', image: 'https://media.istockphoto.com/id/1388092850/photo/mock-up-poster-frame-in-modern-interior-background-with-sofa-and-accessories-in-the-room.jpg?s=612x612&w=0&k=20&c=hej2e-1VpBf3xggnXVZl0fmUOdJ2gweLrrB7NnGW8ws=' },
  { name: 'Beauty', image: 'https://elle.in/wp-content/uploads/2023/02/Untitled-design-11.png' },
];

const ShopByCategory: React.FC = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-extrabold mb-10 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
