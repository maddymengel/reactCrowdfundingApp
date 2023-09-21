import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import page
import HomePage from './pages/HomePage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import CreateProjectPage from './pages/CreateProjectPage.jsx';
import PledgePage from './pages/PledgePage.jsx'
import CreatePledgePage from './pages/CreatePledgePage.jsx';
import UserPage from './pages/UserPage.jsx'


// Import components
import NavBar from './components/NavBar.jsx'
import { AuthProvider } from "./components/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/create-project', element: <CreateProjectPage /> },
      { path: '/create-pledge', element: <CreatePledgePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/users', element: <UserPage /> },
      { path: '/project/:id', element: <ProjectPage /> },
      { path: '/pledges/:id', element: <PledgePage /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
