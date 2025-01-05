import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Section 1 */}
        <div>
          <h3 className="text-gray-900 text-lg font-bold mb-4">ONLINE SHOPPING</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Men</a></li>
            <li><a href="#" className="hover:text-blue-500">Women</a></li>
            <li><a href="#" className="hover:text-blue-500">Kids</a></li>
            <li><a href="#" className="hover:text-blue-500">Home & Living</a></li>
            <li><a href="#" className="hover:text-blue-500">Beauty</a></li>
            <li><a href="#" className="hover:text-blue-500">Gift Cards</a></li>
            <li><a href="#" className="hover:text-blue-500">Myntra Insider</a></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-gray-900 text-lg font-bold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500">Site Map</a></li>
            <li><a href="#" className="hover:text-blue-500">Corporate Information</a></li>
            <li><a href="#" className="hover:text-blue-500">Whitehat</a></li>
            <li><a href="#" className="hover:text-blue-500">Cleartrip</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-gray-900 text-lg font-bold mb-4">CUSTOMER POLICIES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-500">T&C</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-blue-500">Track Orders</a></li>
            <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
            <li><a href="#" className="hover:text-blue-500">Cancellation</a></li>
            <li><a href="#" className="hover:text-blue-500">Returns</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Grievance Officer</a></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-gray-900 text-lg font-bold mb-4">EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="flex space-x-4" style={{height:'120px'}}>
            {/* Replace with actual app store logos */}
            <img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" alt="App Store" />
            <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" alt="Google Play" />
          </div>
          <h3 className="text-gray-900 text-lg font-bold mt-8 mb-4">KEEP IN TOUCH</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FacebookOutlined className="text-2xl" /></a>
            <a href="#" className="hover:text-blue-500"><TwitterOutlined className="text-2xl" /></a>
            <a href="#" className="hover:text-blue-500"><InstagramOutlined className="text-2xl" /></a>
          </div>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="text-gray-900 text-lg font-bold mb-4">POPULAR SEARCHES</h3>
          <p className="text-sm">
            Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees
          </p>
        </div>
      </div>

      <div className="container mx-auto text-center border-t border-gray-300 mt-8 pt-4">
        <p>100% ORIGINAL guarantee for all products at myntra.com</p>
        <p>Return within 14 days of receiving your order</p>
        <p className="mt-4">&copy; 2024 www.myntra.com. All rights reserved. A Flipkart company</p>
        <p className="mt-4">
          In case of any concern, <a href="#" className="text-blue-500 hover:underline">Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
