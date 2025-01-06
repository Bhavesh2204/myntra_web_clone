import React from 'react';
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../../Components/images/logo.jpeg';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';

const NBar: React.FC = () => {
  const menMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#">T-Shirts</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Shirts</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Jeans</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#">Jackets</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#">Shoes</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="#">Accessories</a>
      </Menu.Item>
    </Menu>
  );

  const womenMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#">Dresses</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Tops</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Skirts</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#">Jeans</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#">Shoes</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="#">Accessories</a>
      </Menu.Item>
    </Menu>
  );

  const kidsMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#">T-Shirts</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Shorts</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Jeans</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#">Dresses</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#">Shoes</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="#">Accessories</a>
      </Menu.Item>
    </Menu>
  );

  const homeLivingMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#">Furniture</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Decor</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Bedding</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#">Kitchen</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#">Bath</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="#">Storage</a>
      </Menu.Item>
    </Menu>
  );

  // const beautyMenu = (
  //   <Menu>
  //     <Menu.Item key="1">
  //       <a href="#">Makeup</a>
  //     </Menu.Item>
  //     <Menu.Item key="2">
  //       <a href="#">Skincare</a>
  //     </Menu.Item>
  //     <Menu.Item key="3">
  //       <a href="#">Haircare</a>
  //     </Menu.Item>
  //     <Menu.Item key="4">
  //       <a href="#">Fragrances</a>
  //     </Menu.Item>
  //     <Menu.Item key="5">
  //       <a href="#">Tools</a>
  //     </Menu.Item>
  //     <Menu.Item key="6">
  //       <a href="#">Accessories</a>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Dropdown overlay={menMenu} trigger={['hover']} overlayClassName="dropdown-menu">
            <Link to="/mens" className="text-gray-700 hover:text-blue-500">
              Men
            </Link>
          </Dropdown>
          <Dropdown overlay={womenMenu} trigger={['hover']} overlayClassName="dropdown-menu">
            <Link to="/women" className="text-gray-700 hover:text-blue-500">
              Women
            </Link>
          </Dropdown>
          <Dropdown overlay={kidsMenu} trigger={['hover']} overlayClassName="dropdown-menu">
            <Link to="/kids" className="text-gray-700 hover:text-blue-500">
              Kids
            </Link>
          </Dropdown>
          <Dropdown overlay={homeLivingMenu} trigger={['hover']} overlayClassName="dropdown-menu">
            <Link to="/homeliving" className="text-gray-700 hover:text-blue-500">
              Home & Living
            </Link>
          </Dropdown>
          {/* <Dropdown overlay={beautyMenu} trigger={['hover']} overlayClassName="dropdown-menu">
            <Link to="/beauty" className="text-gray-700 hover:text-blue-500">
              Beauty
            </Link>
          </Dropdown> */}
          <a href="#" className="text-gray-700 hover:text-blue-500">Studio</a>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-lg mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-md border border-gray-300 rounded-full py-2 px-4 pl-10 transition-all duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <UserOutlined className="text-gray-700 text-xl hover:text-blue-500 cursor-pointer" />
          <HeartOutlined className="text-gray-700 text-xl hover:text-blue-500 cursor-pointer" />
          <ShoppingCartOutlined className="text-gray-700 text-xl hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default NBar;
