import React from 'react';

const MensBanner: React.FC = () => {
  return (
    <div className="w-full text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-blue-500 to-blue-800 text-white overflow-hidden py-16 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Level Up Your Style</h1>
            <p className="text-lg md:text-xl mb-6">Discover hand-picked trends that redefine modern fashion.</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Browse Collection
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://static.magicpin.com/storage/blog/images/myntra-online-shopping-for-mens_Cover12.png"
              alt="Fashion Model"
              className="w-full h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

{/* Product Spotlight */}
<section className="py-16 px-8 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-8">🔥 Product Spotlight</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        id: 1,
        name: "Urban Explorer Jacket",
        desc: "Stay warm and stylish with our premium urban explorer jacket.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4NsmeKcl1WPjUe161MaeIQtnqBWp2LD-9A&s",
      },
      {
        id: 2,
        name: "Classic Leather Boots",
        desc: "Walk with confidence in handcrafted leather boots.",
        img: "https://image.made-in-china.com/2f0j00vgUbPCZMYfzp/Luxury-Winter-Boots-for-Men-Classic-Leather-High-Heels.webp",
      },
      {
        id: 3,
        name: "Smart Casual Shirt",
        desc: "Perfect for office meetings and casual outings.",
        img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ].map((product) => (
      <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
          <button className="text-blue-500 hover:underline">View Details</button>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Coupon Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">🎟️ Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Save 20% Off</h3>
              <p className="text-sm mb-4">Use code: <strong>MEN20</strong></p>
              <button className="bg-white text-yellow-600 px-4 py-2 rounded-md font-medium hover:bg-gray-200">
                Redeem Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">✨ Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-md">
            <img
              src="https://img.freepik.com/premium-vector/retro-hipster-typography-elements-template-clothes-shop-cafe-beer-shoprestaurantbusinesslabelpostervintage-brand_607588-10687.jpg?semt=ais_hybrid"
              alt="Premium Quality"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Exceptional craftsmanship for every item.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-md">
            <img
              src="https://t3.ftcdn.net/jpg/04/73/02/64/360_F_473026422_k3XjtqTh0Br3Iw8IfhlB9c72n9dqi9n5.jpg"
              alt="Fast Delivery"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Quick shipping to your doorstep.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-md">
            <img
              src="https://t3.ftcdn.net/jpg/05/52/94/44/360_F_552944475_CdTrX59EPSCoxhkhbtMrpAGWU3gEMgqv.jpg"
              alt="24/7 Support"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="text-gray-600 text-sm">We’re always here to help.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-4 px-8 bg-blue-600 text-white flex justify-between items-center">
        <p className="text-lg font-semibold">Don’t miss out on our exclusive offers!</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100">
          Shop Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 bg-gray-900 text-white text-center mt-16">
        <p>&copy; 2024 Men's Fashion Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MensBanner;
