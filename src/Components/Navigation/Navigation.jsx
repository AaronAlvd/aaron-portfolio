import github from '../../assets/github.svg';
import linkedinLogo from '../../assets/linkedinLogo.png';
import docsLogo from '../../assets/google-docs.png';
import NavBar from './NavBar/NavBar';
import { TbWorld } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faCircle, faArrowLeft, faArrowRight, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();
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

  return (
    <>
    <NavBar />
    </>
  )
}