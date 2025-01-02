import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation, Homepage, Education, Skills } from './Components';
import './App.css'

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
    path: '/aaron-portfolio/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
