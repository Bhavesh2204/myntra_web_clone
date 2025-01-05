import React from 'react';

//this is for testing

const HomeLivingPage: React.FC = () => {
  const categories = [
    { name: 'Furniture', image: 'https://st.hzcdn.com/simgs/pictures/living-rooms/dyna-portage-bay-dyna-contracting-img~0c7141880048befb_14-0031-1-27a4125.jpg' },
    { name: 'Home Decor', image: 'https://media.istockphoto.com/id/1388092850/photo/mock-up-poster-frame-in-modern-interior-background-with-sofa-and-accessories-in-the-room.jpg?s=612x612&w=0&k=20&c=hej2e-1VpBf3xggnXVZl0fmUOdJ2gweLrrB7NnGW8ws=' },
    { name: 'Bedding', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayWsNNqHDGZ8fn1ju6kxIFixjCYlvVilvFg&s' },
    { name: 'Kitchenware', image: 'https://www.durasupreme.com/wp-content/uploads/2020/08/BambooVeneer_GRAY_03.jpg' },
  ];

  const featuredProducts = [
    { name: 'Modern Sofa', price: 'Rs-150000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeWptphqkE2V97y8jF3dKLMlFepJkzLXMPg&s' },
    { name: 'Wooden Coffee Table', price: 'Rs-5000', image: 'https://atinymistake.com/cdn/shop/products/WhatsAppImage2020-09-21at14.19.21.jpg?v=1600678768&width=1445' },
    { name: 'Kitchen Essentials', price: 'Rs-2000', image: 'https://static.vecteezy.com/system/resources/previews/015/605/253/non_2x/various-kitchen-utensils-against-a-white-brick-wall-in-the-modern-kitchen-kitchen-background-eco-items-photo.jpg' },
    { name: 'Wall Art Decor', price: 'Rs-3000', image: 'https://i.pinimg.com/736x/b3/79/4e/b3794e970b6f567292e4ec380c3ae084.jpg' },
  ];

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full" style={{ height: '426px', backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
        <div className="absolute inset-0">
          <img
            src="src\assets\Components\images\homeliving.png"
            alt="Home Living Banner"
            className="w-full h-full object-cover"
            style={{ height: '453px' }}
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Collections Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Trending Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/previews/032/475/224/large_2x/modern-living-room-interior-with-black-sofa-coffee-table-and-golden-frame-on-wall-3d-rendering-horizontal-black-and-gold-oil-painting-wavy-abstract-pattern-ai-generated-free-photo.jpg"
                alt="Summer Collection"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">Modern Furniture</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/previews/040/150/459/non_2x/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-and-elegant-personal-accessories-modern-home-decor-bright-and-sunny-room-generative-ai-illustration-photo.jpg"
                alt="Winter Collection"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">Home Decor</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnjzBMnvkVzyDGtMX09Exo8fODMMmJak1xw&s"
                alt="Accessories Collection"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">Kitchenware</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto py-10">
        <div className="bg-blue-500 text-white rounded-md p-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Special Offers Just for You</h2>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLivingPage;
