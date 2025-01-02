import './BottomNav.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);

  useEffect(() => {
    setUrl(location.pathname)
  }, [location]);
  
  return (
    <div className='BottomNav-div'>
      <div className='BottomNav-div-text'>
        <p className={(url === '/') ? 'BottomNav-p-active' : 'BottomNav-p'} onClick={() => navigate('/')}>About Me</p>
      </div>
      |
      <div className='BottomNav-div-text'>
        <p className={(url === '/education') ? 'BottomNav-p-active' : 'BottomNav-p'} onClick={() => navigate('/aaron-portfolio/education')}>Education</p>
      </div>
      |
      <div className='BottomNav-div-text'>
        <p className={(url === null) ? null : 'BottomNav-p'} onClick={() => navigate('/projects')}>Projects</p>
      </div>
      |
      <div className='BottomNav-div-text'>
        <p className={(url === '/skills') ? 'BottomNav-p-active' : 'BottomNav-p'} onClick={() => navigate('/aaron-portfolio/skills')}>Skills</p>
      </div>
    </div>
  )
}