import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation, Homepage, Education, Skills, Personal, Projects } from './Components';
import './index.css'

function Layout() {

  return (
    <>
     <Navigation />
     <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/aaron-portfolio',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'education',
        element: <Homepage />,
      },
      {
        path: 'experience',
        element: <Homepage />,
      },
      {
        path: 'skills',
        element: <Homepage />,
      },
      {
        path: 'projects',
        element: <Homepage />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
