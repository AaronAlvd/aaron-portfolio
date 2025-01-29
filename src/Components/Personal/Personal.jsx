import './Personal.css';
import anonymous from '../../assets/download.jpeg';
import { useState, useEffect } from 'react';

export default function Personal() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);


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
      </div>
    </div>
  );
};