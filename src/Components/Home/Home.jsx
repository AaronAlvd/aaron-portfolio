import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Personal from '../Personal/Personal';

import './Home.css';

export default function Home() {

  return (
    <div className='Home'>
      <div className='Home-header'>
        <p className='Home-career'>Software Developer</p>
        <p className='Home-name'>Aaron Alvarado</p>
        <p className='Home-location'>Sacramento, CA</p>
        <p className='Home-bio'>
          I'm a 21 year old college student with a deep passion for web devlopment. My strong problem solving ability allows me to solve any 
          problem put before me. 
        </p>
      </div>
      <div className='Home-body'>
        
      </div>
    </div>
  )
}