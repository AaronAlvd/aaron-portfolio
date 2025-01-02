import github from '../../assets/github.svg';
import linkedinLogo from '../../assets/linkedinLogo.png';
import docsLogo from '../../assets/google-docs.png'
import { TbWorld } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faCircle, faArrowLeft, faArrowRight, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import BottomNav from './BottomNav/BottomNav';
import './Navigation.css';

export default function Navigation() {

  return (
    <div>
      <div className='Navigation-div'>
      <div className='Navigate-div-windowHeader'>
          <FontAwesomeIcon icon={faCircle} className='Navigate-icons' style={{color: 'red'}}/>
          <FontAwesomeIcon icon={faCircle} className='Navigate-icons' style={{color: 'orange'}}/>
          <FontAwesomeIcon icon={faCircle} className='Navigate-icons' style={{color: 'rgb(17, 220, 17)'}}/>
        </div>
        <div className='Navigation-tabs-active'>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <TbWorld style={{color: 'white', marginLeft: 10}}/>
            <small style={{marginLeft: '10px'}}><a href="https://github.com/AaronAlvd" target="_blank" className='Navigation-link'>Aaron Alvarado | Portfolio</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>
        <div className='Navigation-tabs' onClick={() => window.open('https://github.com/AaronAlvd', '_blank')}>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <img src={github} className='Navigation-logo'/>
            <small style={{marginLeft: '10px'}}><a href="https://github.com/AaronAlvd" target="_blank" className='Navigation-link'>github.com/AaronAlvd</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>
        <p style={{ backgroundColor: 'grey', minWidth: 2, minHeight: 15, transform: 'translateY(-2px)'}}/>
        <div className='Navigation-tabs' onClick={() => window.open('https://linkedin.com/in/aaron-alvd', '_blank')}>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <img src={linkedinLogo} style={{height: 15, marginLeft: 5}}/>
            <small style={{marginLeft: '10px'}}><a href="https://linkedin.com/in/aaron-alvd" target="_blank" className='Navigation-link'>Aaron Alvarado | LinkedIn</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>
        <p style={{ backgroundColor: 'grey', minWidth: 2, minHeight: 15, transform: 'translateY(-2px)'}}/>
        <div className='Navigation-tabs' onClick={() => window.open('https://docs.google.com/document/d/1PsJOYKA2FHJFb44nQX76NtO4K414nqmSy4NX4Qv-eeA/edit?usp=sharing', '_blank')}>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <img src={docsLogo} style={{height: 15, marginLeft: 5}}/>
            <small style={{marginLeft: '10px'}}><a href="https://docs.google.com/document/d/1PsJOYKA2FHJFb44nQX76NtO4K414nqmSy4NX4Qv-eeA/edit?usp=sharing" target="_blank" className='Navigation-link'>Aaron Alvarado - Resume</a></small>
          </span>
          <FontAwesomeIcon icon={faTimes} className='Navigation-icon'/>
        </div>
        <p style={{ backgroundColor: 'grey', minWidth: 2, minHeight: 15, transform: 'translateY(-2px)'}}/>
        <FontAwesomeIcon icon={faPlus} className='Navigation-icon' style={{transform: 'translate(12px, 15px)'}}/>
      </div>
      <div className='Navigation-div-2'>
        <FontAwesomeIcon icon={faArrowLeft} className='Navigation-icon-2'/>
        <FontAwesomeIcon icon={faArrowRight} className='Navigation-icon-2'/>
        <FontAwesomeIcon icon={faRotateRight} className='Navigation-icon-2' style={{color: 'lightgrey'}}/>
        <div className='Navigation-div-searchBar'>
          <AiOutlineInfoCircle style={{color: 'white', marginLeft: 5}}/>
          <small className='Navigation-url'>AaronAlvarado.com</small>
        </div>
      </div>
      <BottomNav/>
    </div>
  )
}