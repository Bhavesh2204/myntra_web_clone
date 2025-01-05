import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Mens from './assets/Pages/mens.tsx';
import Women from './assets/Pages/women.tsx';
import Homeliving from './assets/Pages/homeliving.tsx';
import Kids from './assets/Pages/kids.tsx';
import Beauty from './assets/Pages/beauty.tsx';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Home page component
  },
  {
    path: 'mens',
    element: <Mens />,
  },
  {
    path: 'women',
    element: <Women />,
  },
  {
    path: 'homeliving',
    element: <Homeliving />,
  },
  {
    path: 'kids',
    element: <Kids />,
  },
  {
    path: 'beauty',
    element: <Beauty />,
  },
]);

// Render the RouterProvider with the router
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
