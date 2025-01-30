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
  const [url, setUrl] = useState(location.pathname);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);


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

  useEffect(() => {
    setUrl(location.pathname)
  }, [location])

  if (width < 1040) return <NavBar />;

  return (
    <>
    <div>
      <div className='Navigation-div'>
        <div className='Navigate-div-windowHeader'>
          <FontAwesomeIcon icon={faCircle} className='Navigate-icons' style={{color: 'red'}}/>
          <FontAwesomeIcon icon={faCircle} className='Navigate-icons' style={{color: 'orange'}}/>
          <FontAwesomeIcon icon={faCircle} className='Navigate-icons' style={{color: 'rgb(17, 220, 17)'}}/>
        </div>

        <div className='Navigation-tabs-active'>
          <span style={{display: 'flex', alignItems: 'center', cursor: 'default'}}>
            <TbWorld style={{color: 'white', marginLeft: 10}}/>
            <small style={{marginLeft: '10px'}}><a className='Navigation-link'>Aaron Alvarado | Portfolio</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>

        <div className='Navigation-tabs' onClick={() => window.open('https://github.com/AaronAlvd', '_blank')}
             onMouseEnter={() => setTab1(true)} onMouseLeave={() => setTab1(false)}>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <img src={github} className='Navigation-logo'/>
            <small style={{marginLeft: '10px'}}><a className='Navigation-link'>github.com/AaronAlvd</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>

        <p className={!tab1 && !tab2 ? 'Navigation-divider' : 'Navigation-divider_active'}/>

        <div className='Navigation-tabs' onClick={() => window.open('https://linkedin.com/in/aaron-alvd', '_blank')}
             onMouseEnter={() => setTab2(true)} onMouseLeave={() => setTab2(false)}>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <img src={linkedinLogo} style={{height: 15, marginLeft: 5}}/>
            <small style={{marginLeft: '10px'}}><a className='Navigation-link'>Aaron Alvarado | LinkedIn</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>

        <p className={!tab3 && !tab2 ? 'Navigation-divider' : 'Navigation-divider_active'}/>

        <div className='Navigation-tabs' onClick={() => window.open('https://docs.google.com/document/d/12JpzucT_WPg1ebPhQpQxmfbrAaCm0G3VKmaSW7I6TrM/edit?usp=sharing', '_blank')}
             onMouseEnter={() => setTab3(true)} onMouseLeave={() => setTab3(false)}>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <img src={docsLogo} style={{height: 15, marginLeft: 5}}/>
            <small style={{marginLeft: '10px'}}><a className='Navigation-link'>Aaron Alvarado - Resume</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>

        <p style={{ backgroundColor: 'rgb(65, 65, 65)', minWidth: 2, minHeight: 15, transform: 'translateY(-2px)'}}/>

        <FontAwesomeIcon icon={faPlus} className='Navigation-icon' style={{transform: 'translate(12px, 15px)'}}/>
      </div>

      <div className='Navigation-div-2'>
        <FontAwesomeIcon icon={faArrowLeft} className='Navigation-icon-2'/>
        <FontAwesomeIcon icon={faArrowRight} className='Navigation-icon-2'/>
        <FontAwesomeIcon icon={faRotateRight} className='Navigation-icon-2' style={{color: 'lightgrey'}} onClick={() => window.location.reload()}/>

        <div className='Navigation-div-searchBar'>
          <AiOutlineInfoCircle style={{color: 'white', marginLeft: 5}}/>
          <small className='Navigation-url'>aaronalvd.us{ url === '/' ? null : url}</small>
        </div>
      </div>
    </div>
    <NavBar />
    </>
  )
}