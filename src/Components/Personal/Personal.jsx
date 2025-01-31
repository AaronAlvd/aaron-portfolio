import './Personal.css';
import anonymous from '../../assets/download.jpeg';
import { useState, useEffect } from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


export default function Personal() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  const displayLinks = () => {
    return (
      <div className='Personal-div_logos'>
        <IoLogoGithub className='Personal-logos'/>
        <IoLogoLinkedin className='Personal-logos'/>
      </div>
    )
  };

  return (
    <div className='Personal'>
      <div className="Personal-div">
        <img src={anonymous} className="Personal-image"/>
        <div style={{width: '245px', textAlign: 'center'}} className="Personal-center">
          <p className="Personal-name">Aaron Alvarado</p>
        </div>
        <div style={{width: '225px', textAlign: 'center'}} className="Personal-center">
          <p className="Personal-occupation">Full Stack Software Developer</p>
        </div>
        <div style={{width: '125px', textAlign: 'center'}} className="Personal-center">
          <p className="Personal-location">Sacramento, CA</p>
        </div>
        {width < 1040 && displayLinks()}
      </div>
    </div>
  );
};