import './Homepage.css';
import Personal from '../Personal/Personal';
import NavBar from '../Navigation/NavBar/NavBar';
import Education from '../Education/Education';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Homepage() {
  const location = useLocation();
  const [height, setHeight] = useState(window.innerHeight);
  const [education, setEducation] = useState(location.pathname === '/aaron-portfolio/education');
  const [experience, setExperience] = useState(location.pathname === '/aaron-portfolio/experience');
  const [skills, setSkills] = useState(location.pathname === '/aaron-portfolio/skills');
  const [projects, setProjects] = useState(location.pathname === '/aaron-portfolio/projects');

  return (
    <div className='Homepage-div' onKeyDown={() => handleKeyDown()}>
      <Personal />
      { education && <Education />}
    </div>
  )
}

