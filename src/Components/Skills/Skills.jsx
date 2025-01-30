import './Skills.css';
import pythonLogo from '../../assets/pythonLogo.png';
import reactLogo from '../../assets/reactLogo.png';
import jsLogo from '../../assets/js.png';
import htmlLogo from '../../assets/html-5.png';
import cssLogo from '../../assets/css-3.png';
import nodejsLogo from '../../assets/nodejs.png';
import sqlLogo from '../../assets/sql-server.png';
import sqliteLogo from '../../assets/sqlite.png';
import postgreLogo from '../../assets/postgre.png';
import sequelizeLogo from '../../assets/sequelize.svg';
import openAILogo from '../../assets/openAI.svg';
import driveLogo from '../../assets/googleDrive.svg';
import expressLogo from '../../assets/express.svg';
import flaskLogo from '../../assets/flask.svg';
import githubLogo from '../../assets/github.png';


import { useEffect, useState } from 'react';

export default function Skills() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

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
    <div className='Skills' style={{height: `${width > 1039 ? height - 170 + 'px' : 'min-content'}`}}>
      <div className='Skills-section'>
        {/* <p className='Skills-title'>Languages</p> */}
        <div className='Skills-div-logos'>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={pythonLogo} className='Skills-logo'/>
            <p>Python</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={jsLogo} className='Skills-logo'/>
            <p>JavaScript</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={htmlLogo} className='Skills-logo'/>
            <p>HTML 5</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={cssLogo} className='Skills-logo'/>
            <p>CSS 3</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={sqlLogo} className='Skills-logo'/>
            <p>SQL</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={reactLogo} className='Skills-logo'/>
            <p>React</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={postgreLogo} className='Skills-logo'/>
            <p>PostgreSQL</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={nodejsLogo} className='Skills-logo'/>
            <p>Nodejs</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={sqliteLogo} className='Skills-logo' style={{backgroundColor: 'white', padding: '5px 10px', transform: 'translateY(15px)'}}/>
            <p style={{transform: 'translateY(22px)'}}>SQLite</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={sequelizeLogo} className='Skills-logo'/>
            <p>Sequelize</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={openAILogo} className='Skills-logo'/>
            <p>OpenAI API</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={driveLogo} className='Skills-logo'/>
            <p>Drive API</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={expressLogo} className='Skills-logo'/>
            <p>ExpressJS</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={flaskLogo} className='Skills-logo'/>
            <p>Flask</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={githubLogo} className='Skills-logo'/>
            <p>GitHub</p>
          </div>
        </div>
      </div>

      <div className='Skills-section' style={{marginTop: '40px'}}>
        {/* <p className='Skills-title'>Libraries & Frameworks</p> */}
        <div className='Skills-div-logos_2'>

          <div className='Skills-custom-logo'>
            <p className='Skills-custom_logo-text'>SqlAlchemy</p>
          </div>

        </div>
      </div>

      <div style={{minHeight: '40px'}}>
      </div>
    </div>
  );
}