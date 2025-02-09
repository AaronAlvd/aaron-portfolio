import './Personal.css';
import anonymous from '../../assets/download.jpeg';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useState, useEffect } from 'react';

export default function Personal() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);


  return (
    <div className='Personal'>
      <div className="Personal-div">
        <img src={anonymous} className="Personal-image"/>
          {/* <p className="Personal-name">Aaron Alvarado</p> */}
          <p className="Personal-occupation">Full Stack Software Developer</p>
          <p className="Personal-location">Sacramento, CA</p>
          <div style={{display: 'flex'}}>
            <FaGithub className='Personal-logo'/>
            <FaLinkedin className='Personal-logo'/>
          </div>
      </div>
    </div>
  );
};