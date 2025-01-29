import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation, Homepage, Homepage1, Homepage2, Homepage3, Homepage4 } from './Components';
import './index.css'

function Layout() {

  return (
    <div className='background'>
     <Navigation />
     <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Homepage4 />,
      },
      {
        path: 'education',
        element: <Homepage />,
      },
      {
        path: 'experience',
        element: <Homepage3 />,
      },
      {
        path: 'skills',
        element: <Homepage1 />,
      },
      {
        path: 'projects',
        element: <Homepage2 />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
