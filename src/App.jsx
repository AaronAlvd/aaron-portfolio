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
        element: <Personal/>,
      },
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'personal',
        element: <Personal />
      },
      {
        path: 'projects',
        element: <Projects />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
