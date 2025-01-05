import React from 'react';

const KidsPage: React.FC = () => {
  return (
    <div className="w-full text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-pink-400 to-yellow-300 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center">
          <div className="flex-1 p-8 md:p-16 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Kids Zone!</h1>
            <p className="text-lg md:text-xl mb-6">Discover fun, colorful, and exciting products just for kids.</p>
            <button className="bg-white text-pink-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Explore Now
            </button>
          </div>
          <div className="flex-1 h-full">
            <img
              src="https://images.pexels.com/photos/3662634/pexels-photo-3662634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Kids Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">🧸 Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { id: 1, name: "Toys", img: "https://www.parents.com/thmb/RIpKP4Bxv64fijWgjlSCELgJImI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kids-get-anxious-too-here-are-8-psychologist-approved-toys-tips-to-relieve-their-anxiety-from-7-tout-82b4bb72d97c45dbb12b5ff687fa0f2a.jpg" },
            { id: 2, name: "Clothing", img: "https://cdn.shopify.com/s/files/1/0509/7966/8159/files/Zig_shot03_253_480x480.jpg?v=1700170360" },
            { id: 3, name: "Accessories", img: "https://images.pexels.com/photos/5709013/pexels-photo-5709013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
          ].map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <button className="text-pink-500 hover:underline mt-2">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">🌟 Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {[
            "https://www.fancydresswale.com/cdn/shop/products/G32-Main_1024x1024.jpg?v=1647005398",
            "https://images.meesho.com/images/products/336992493/uhfdk_512.webp",
            "https://jdinstitute.ac.in/wp-content/uploads/2021/01/79-fashion-design-for-kids-apparel.jpeg",
            "https://thelittlebunny.in/cdn/shop/files/WhatsApp_Image_2024-09-06_at_09.55.28_1.jpg?v=1725596809",
          ].map((img, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src={img} alt={`Best Seller ${index + 1}`} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-md font-semibold">Product {index + 1}</h4>
                <p className="text-sm text-gray-600 mb-2">Top-rated kids' product</p>
                <button className="text-pink-500 hover:underline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-8 bg-yellow-300 text-center">
        <h2 className="text-2xl font-bold mb-2">🎁 Special Offers Just for Kids!</h2>
        <p className="text-gray-800 mb-4">Don't miss out on amazing discounts and deals.</p>
        <button className="bg-white text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          Grab Your Deal
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center mt-16">
        <p>&copy; 2024 Kids Fun Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default KidsPage;
