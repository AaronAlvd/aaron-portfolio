import './Skills.css';
import pythonLogo from '../../assets/pythonLogo.png';
import reactLogo from '../../assets/reactLogo.png';
import jsLogo from '../../assets/js.png';
import htmlLogo from '../../assets/html-5.png';
import cssLogo from '../../assets/css-3.png';
import nodejsLogo from '../../assets/nodejs.png';
import sqlLogo from '../../assets/sql-server.png';

export default function Skills() {
  return (
    <section className="skills-container">
      <div className="skills-grid">
        <div className="skills-section">
          <p className='skills-section-title'>Skills</p>
          <div className='skills-section1-box'>
            <img src={pythonLogo} className='skills-logos'/>
            <p className='skills-logo-text'>Python</p>
          </div>
          <div className='skills-section1-box'>
            <img src={jsLogo} className='skills-logos'/>
            <p className='skills-logo-text'>JavaScript</p>
          </div>
          <div className='skills-section1-box'>
            <img src={cssLogo} className='skills-logos'/>
            <p className='skills-logo-text'>CSS3</p>
          </div>
          <div className='skills-section1-box'>
            <img src={htmlLogo} className='skills-logos'/>
            <p className='skills-logo-text'>HTML5</p>
          </div>
          <div className='skills-section1-box'>
            <img src={sqlLogo} className='skills-logos'/>
            <p className='skills-logo-text'>SQL</p>
          </div>
          <div className='skills-section1-box'>
              <img src={reactLogo} className='skills-logos'/>
              <p className='skills-logo-text'>React</p>
            </div>
            <div className='skills-section1-box'>
              <img src={nodejsLogo} className='skills-logos'/>
              <p className='skills-logo-text'>Nodejs</p>
            </div>
            <div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>Expressjs</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>Flask</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>OpenAI API</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>Sequelize</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>SQLalchemy</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>PyGame</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>ML/AI</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>VSCode</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>Figma</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>GitHub</p>
              </div>
              <div className='skills-textlogo-box'>
                <p className='skills-textlogo'>Render</p>
              </div>
            </div>
        </div>
      </div>

      <div className='skills-grid-2'>
        <div className='skill-card'>
          <p className='skill-card-title'>Frontend Development</p>
          <p className='skill-card-title2'>React | React-Redux</p>
          <ul className='skill-card-ul'>
            <li>Developed interactive UIs in three major projects:</li>
            <li>Airbnb Clone</li>
            <li>Document Webpage</li>
            <li>Social Media App</li>
          </ul>
        </div>

        <div className='skill-card'>
          <p className='skill-card-title'>Backend Development</p>
          <p className='skill-card-title2'>Express | Sequelize | Flask | SQLAlchemy</p>
          <ul className='skill-card-ul'>
            <li>Built scalable backend systems for:</li>
            <li>Airbnb Clone (Express + Sequelize)</li>
            <li>Social Media App (Express + Sequelize)</li>
            <li>Document Webpage (Flask + SQLAlchemy)</li>
          </ul>
        </div>

        <div className='skill-card'>
          <p className='skill-card-title'>State Management</p>
          <p className='skill-card-title2'>React-Redux</p>
          <ul className='skill-card-ul'>
            <li>Implemented state management in all major projects:</li>
            <li>Airbnb Clone</li>
            <li>Document Webpage</li>
            <li>Social Media App</li>
          </ul>
        </div>

        <div className='skill-card'>
          <p className='skill-card-title'>Databases</p>
          <p className='skill-card-title2'>PostgreSQL | SQL</p>
          <ul className='skill-card-ul'>
            <li>Worked with SQL databases for all projects:</li>
            <li>Airbnb Clone (PostgreSQL)</li>
            <li>Document Webpage (PostgreSQL)</li>
            <li>Social Media App (PostgreSQL)</li>
          </ul>
        </div>

        <div className='skill-card'>
          <p className='skill-card-title'> Team Collaboration</p>
          <p className='skill-card-title2'>Collaborative Projects</p>
          <ul className='skill-card-ul'>
            <li>Worked in a team of 2 for:</li>
            <li>Airbnb Clone</li>
            <li>Document Webpage</li>
          </ul>
        </div>

        <div className='skill-card'>
          <p className='skill-card-title'>Code Optimization</p>
          <p>Efficiency Testing</p>
          <ul className='skill-card-ul'>
            <li>Regularly test and optimize algorithms to improve speed and performance.</li>
            <li>Focused on enhancing efficiency across projects.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}