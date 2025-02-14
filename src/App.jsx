import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Navigation, Home, Education, Skills, Projects, Footer, Projects2 } from './Components';
import './index.css'

function Layout() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  return (
    <>
    <Navigation/>
    <div style={{height: `${height - 60}px`, overflowY: 'scroll', width: '100vw', overflowX: 'hidden'}}>
      <Outlet/>
      <Footer/>
    </div>
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
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects2 />
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
