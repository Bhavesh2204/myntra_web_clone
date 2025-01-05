import React from 'react';

const WomenPage: React.FC = () => {
  const categories = [
    { name: 'Dresses', image: 'https://img.freepik.com/premium-photo/horizontal-image-attractive-brunette-young-woman-with-white-hat-head-walking-beach-sea-sunset-background-pretty-female-wearing-striped-dress-enjoy-ocean-breeze_616427-1448.jpg'  },
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
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full" style={{ height: '426px', backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
        <div className="absolute inset-0">
          <img
            src={'src/assets/Components/images/womenpage.png'}
            alt="Women's Banner"
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
                className="w-full h-48" // Add `object-cover` to make the image fill the box while maintaining aspect ratio
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
                className="w-full h-48 object-cover" // Add `object-cover` here as well
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
                src="https://i0.wp.com/flourish-living.com/wp-content/uploads/2019/07/10-Sustainable-Summer-Fashion-Brands-for-the-Conscious-Girl.jpg?resize=960%2C640"
                alt="Summer Collection"
                className="w-full h-48 object-cover" // Again, `object-cover` for consistent fitting
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">Summer Collection</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/good-looking-tender-millennial-woman-keeps-hands-chin-smiles-toothily-wears-hat-sweater-looks-happily-listens-pleasant-words-isolated-pink-background-human-emotions-face-expressions_273609-58370.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid"
                alt="Winter Collection"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">Winter Collection</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Q1KpRsnHoOBv9HNzINPGACllk3vnCWykGJSS1eLWV3WYnANq8335k7IqdJb-xnp22_M&usqp=CAU"
                alt="Accessories Collection"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">Accessories</p>
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

export default WomenPage;
