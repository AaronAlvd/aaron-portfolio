import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

import resume from '../../assets/AaronAlvaradoResume.pdf';

import Personal from '../Personal/Personal';

import './Home.css';

export default function Home() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const generatePDF = () => {
    const doc = new jsPDF(resume);
    doc.text("Hello, this is your PDF!", 10, 10);
    doc.save("download.pdf");
  };

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

  return (
    <div className='Home' style={{height: `${height - 110}px`}}>
      <div className='Home-header'>
        <p className='Home-career'>Software Developer</p>
        <p className='Home-name'>Aaron Alvarado</p>
        <p className='Home-location'>Sacramento, CA</p>
        <p className='Home-bio'>
          I'm a 21 year old college student with a deep passion for web devlopment. My strong problem solving ability allows me to solve any 
          problem I face. 
        </p>
      </div>
      <div className='Home-body'>
        <a href={resume} className="bg-[rgb(90,90,90)] h-[30px] w-[190px] rounded-[3px] mt-[15px] flex items-center justify-center text-white"
           download="AaronAlvaradoResume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  )
}