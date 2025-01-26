import './Personal.css';
import anonymous from '../../assets/download.jpeg';
import { useState, useEffect } from 'react';

export default function Personal() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);


  return (
    <div className='Personal' style={{height: `${width > 1023 ? height - 170 + 'px' : 'min-content'}`}}>
      <div className="Personal-div">
        <img src={anonymous} className="Personal-image"/>
        <div style={{width: '155px', textAlign: 'center'}} className="Personal-center">
          <p className="Personal-name">Aaron Alvarado</p>
        </div>
        <div style={{width: '230px', textAlign: 'center'}} className="Personal-center">
          <p className="Personal-occupation">Full Stack Software Developer</p>
        </div>
        {/* <div style={{width: '100%'}} className="Personal-center">
          <div style={{width: '185px', display: 'flex', position: 'relative'}}>
            <div className="Personal-blinking"></div>
            <p className="Personal-search">Searching for job...</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};