import React from 'react';

const WomenPage: React.FC = () => {
  const categories = [
    { name: 'Dresses', image: 'https://img.freepik.com/premium-photo/horizontal-image-attractive-brunette-young-woman-with-white-hat-head-walking-beach-sea-sunset-background-pretty-female-wearing-striped-dress-enjoy-ocean-breeze_616427-1448.jpg' },
    { name: 'Tops', image: 'https://cdn01.pinkoi.com/product/k7uLiqdS/0/2/640x530.jpg' },
    { name: 'Jeans', image: 'https://media.istockphoto.com/id/1349960077/photo/rocking-denim-wear.jpg?s=612x612&w=0&k=20&c=fB3hzEp_aOF2lk6QmMW4sUGDiQhhQkgwQ9OOO3VlDHc=' },
    { name: 'Shoes', image: 'https://media.istockphoto.com/id/1339440288/photo/white-sneakers-shoes-and-girl%C3%A2s-legs-on-nude-background-casual-footwear.jpg?s=612x612&w=0&k=20&c=huKyqMekfhKH7uY7XWmyi2LI7mJuctzNhOAKjbrlReU=' },
  ];

  const featuredProducts = [
    { name: 'Floral Dress', price: 'Rs-2000', image: 'https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.jpg?s=612x612&w=0&k=20&c=UzOoNF1-F6pR5uSu6mTqnPAYR4eg6paDy4FKfhYVInU=' },
    { name: 'Stylish Top', price: 'Rs-1300', image: 'https://www.shutterstock.com/image-photo/horizontal-photo-beautiful-brazilian-woman-260nw-2272187249.jpg' },
    { name: 'Denim Jacket', price: 'Rs-3000', image: 'https://www.shutterstock.com/image-photo/pretty-adorable-youthful-woman-fair-600nw-2174491447.jpg' },
    { name: 'Casual Shoes', price: 'Rs-2200', image: 'https://www.shutterstock.com/image-photo/woman-stylish-sneakers-tying-shoe-260nw-2318464139.jpg' },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* 🚀 Hero Section */}
<section className="relative w-full h-[600px] overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img
      src="https://static.vecteezy.com/system/resources/previews/048/912/903/non_2x/stylish-modern-girl-feeling-satisfaction-while-shopping-posing-with-money-dollars-and-shop-bags-beige-studio-background-photo.jpg"
      alt="Women's Fashion"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-70"></div>
  </div>
  <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 text-white">
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-[50%]">Empower Your Style</h1>
    <p className="text-lg md:text-2xl mt-4 mb-6 max-w-[50%]">
      Discover premium fashion tailored just for you.
    </p>
    <div className="max-w-[50%]">
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-md shadow-md text-sm">
        Explore Now
      </button>
    </div>
  </div>
</section>


      {/* 🛍️ Shop by Category */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">🛍️ Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white text-lg font-semibold">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✨ Featured Products */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">✨ Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-xl font-bold">{product.name}</p>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 Call to Action */}
      <section className="py-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">🔥 Limited-Time Offer</h2>
        <p className="text-lg mb-8">Get exclusive discounts on our best-selling collections.</p>
        <button className="bg-white text-purple-500 hover:text-purple-600 font-bold px-6 py-3 rounded-md">Grab the Deal</button>
      </section>

      {/* 🌟 Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">🌟 What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="text-gray-600">"Amazing quality and fantastic service! Highly recommend!"</p>
            <p className="mt-4 font-bold">- Sarah K.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="text-gray-600">"The best shopping experience I've ever had. Love the style!"</p>
            <p className="mt-4 font-bold">- Emily R.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="text-gray-600">"Trendy, stylish, and affordable. Will shop again!"</p>
            <p className="mt-4 font-bold">- Jessica T.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenPage;
