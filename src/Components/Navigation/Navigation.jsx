import './Navigation.css';

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { GoHomeFill } from "react-icons/go";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { IoBriefcaseSharp } from "react-icons/io5";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {

  }, [location])

  if (width < 1040) {
    return (
      <div className='Navigation'>
        <div className='Navigation-div_name'>
          <p className='Navigation-text'>Aaron</p>
          <p className='Navigation-text' style={{color: 'rgb(163, 54, 61)', marginLeft: '10px'}}>Alvarado</p>
        </div>
        <div className='Navigation-div_nav'>
          <GoHomeFill className='Navigation-icon'/>
          <GiGraduateCap className='Navigation-icon'/>
          <IoBriefcaseSharp className='Navigation-icon'/>
          <MdOutlineSettings className='Navigation-icon'/>
        </div>
      </div>
    )
  }

  return (
    <div className='Navigation'>
      <div className='Navigation-div_name'>
        <p className='Navigation-text'>Aaron</p>
        <p className='Navigation-text' style={{color: 'rgb(163, 54, 61)', marginLeft: '10px'}}>Alvarado</p>
      </div>
      <div className='Navigation-div_nav'>
        <p className={location.pathname === '/' ? 'Navigation-text2_a' : 'Navigation-text2'} onClick={() => navigate('/')}>Home</p>
        <p className={location.pathname === '/education' ? 'Navigation-text2_a' : 'Navigation-text2'} 
           onClick={() => navigate('/education')}>Education</p>
        <p className={location.pathname === '/projects' ? 'Navigation-text2_a' : 'Navigation-text2'} 
           onClick={() => navigate('/projects')}>Projects</p>
        <p className={location.pathname === '/experience' ? 'Navigation-text2_a' : 'Navigation-text2'} 
           onClick={() => navigate('/experience')}>Experience</p>
      </div>
    </div>
  )
}