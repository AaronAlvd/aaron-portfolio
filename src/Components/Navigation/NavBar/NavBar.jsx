import './NavBar.css';
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { GrBook } from "react-icons/gr";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const [home, setHome] = useState();
  const [education, setEducation] = useState();
  const [projects, setProjects] = useState();
  const [experience, setExperience] = useState();
  const [skills, setSkills] = useState();

  return (
    <nav className="NavBar">
      <div style={{display: 'flex'}}>
        <div style={{position: 'relative'}}>
          <FiHome className='NavBar-icon' onMouseEnter={() => setHome(true)} onMouseLeave={() => setHome(false)}
                  onClick={() => navigate('/')}/>
          {home && <p className='NavBar-label NavBar-label_1'>Home</p>}
        </div>

        <div style={{position: 'relative'}}>
          <GrBook className='NavBar-icon' onMouseEnter={() => setEducation(true)} onMouseLeave={() => setEducation(false)}
                  onClick={() => navigate('/education')}/>
          {education && <p className='NavBar-label NavBar-label_2'>Education</p>}
        </div>

        <div style={{position: 'relative'}}>
          <FaRegFolder className='NavBar-icon' onMouseEnter={() => setProjects(true)} onMouseLeave={() => setProjects(false)}
                       onClick={() => navigate('/projects')}/>
          {projects && <p className='NavBar-label NavBar-label_3'>Projects</p>}
        </div>

        <div style={{position: 'relative'}}>
          <BsSuitcaseLg className='NavBar-icon' onMouseEnter={() => setExperience(true)} onMouseLeave={() => setExperience(false)}
                        onClick={() => navigate('/experience')}/>
          {experience && <p className='NavBar-label NavBar-label_4'>Experience</p>}
        </div>

        <div style={{position: 'relative'}}>
          <MdComputer className='NavBar-icon' onMouseEnter={() => setSkills(true)} onMouseLeave={() => setSkills(false)}
                      onClick={() => navigate('/skills')}/>
          {skills && <p className='NavBar-label NavBar-label_5'>Skills</p>}
        </div>
      </div>
    </nav>
  )
}