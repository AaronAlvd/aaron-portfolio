import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Navigation, Home } from './Components';
import './index.css'

function Layout() {

  return (
    <>
    <Navigation/>
    <Outlet/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
