import './Homepage.css';
import Personal from '../Personal/Personal';
import Experience from '../Experience/Experience';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Homepage() {
  const location = useLocation();
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className='Homepage-div'>
      <Personal />
      <Experience />
    </div>
  )
}