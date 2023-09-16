import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import page
import HomePage from './pages/HomePage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

// Import components
import NavBar from './components/NavBar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/project/:id', element: <ProjectPage /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
