import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Desktop from './Desktop';
import Mobile from './Mobile';

import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiSequelize, SiSqlalchemy, SiSqlite, SiFlask, SiPostgresql, SiRedux, SiAxios, SiExpress } from "react-icons/si";

import "./Skills.css" 

export default function Skills() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight);
  const [python, setPython] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [HTML, setHTML] = useState(false);
  const [css, setCSS] = useState(false);
  const [react, setReact] = useState(false);
  const [sequelize, setSequelize] = useState(false);
  const [sqlAlchemy, setSqlAlchemy] = useState(false);
  const [flask, setFlask] = useState(false);
  const [sqlite, setSqlite] = useState(false);
  const [postgre, setPostgre] = useState(false);
  const [redux, setRedux] = useState(false);
  const [axios, setAxios] = useState(false);
  const [express, setExpress] = useState(false);

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

  if (width > 1039) return <Desktop />

  if (width < 1040) return <Mobile/>

  return ( 
    <div className="Skills">
      <div className="Skills-section">
        <div className="Skills-div_txtLarge">
          <p className="Skills-text_large">Languages</p>
        </div>
        <div className="Skills-div">
          <div className="Skills-item" onMouseEnter={() => setPython(true)} onMouseLeave={() => setPython(false)}>
            <FaPython className={python ? "Skills-logo_active" : "Skills-logo"}/>
            {python && 
            <div className="Skills-div_label">
              <p className="Skills-label">Python</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setJavascript(true)} onMouseLeave={() => setJavascript(false)}>
            <FaJs className={javascript ? "Skills-logo_active" : "Skills-logo"}/>
            {javascript && 
            <div className="Skills-div_label">
              <p className="Skills-label">JavaScript</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setHTML(true)} onMouseLeave={() => setHTML(false)}>
            <FaHtml5 className={HTML ? "Skills-logo_active" : "Skills-logo"}/>
            {HTML && 
            <div className="Skills-div_label">
              <p className="Skills-label">HTML5</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setCSS(true)} onMouseLeave={() => setCSS(false)}>
            <FaCss3Alt className={css ? "Skills-logo_active" : "Skills-logo"}/>
            {css && 
            <div className="Skills-div_label">
              <p className="Skills-label">CSS3</p>
            </div>}
          </div>
        </div>
      </div>

      <div className="Skills-section">
        <div className="Skills-div_txtLarge">
          <p className="Skills-text_large">Frontend</p>
        </div>
        <div className="Skills-div">
          <div className="Skills-item" onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)}>
            <FaReact className={react ? "Skills-logo_active" : "Skills-logo"}/>
            {react && 
            <div className="Skills-div_label">
              <p className="Skills-label">React</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setRedux(true)} onMouseLeave={() => setRedux(false)}>
            <SiRedux className={redux ? "Skills-logo_active" : "Skills-logo"}/>
            {redux && 
            <div className="Skills-div_label">
              <p className="Skills-label">Redux</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setAxios(true)} onMouseLeave={() => setAxios(false)}>
            <SiAxios className={axios ? "Skills-logo_active" : "Skills-logo"}/>
            {axios && 
            <div className="Skills-div_label">
              <p className="Skills-label">Axios</p>
            </div>}
          </div>
        </div>
      </div>

      <div className="Skills-section">
        <div className="Skills-div_txtLarge">
          <p className="Skills-text_large">Backend</p>
        </div>
        <div className="Skills-div">
          <div className="Skills-item" onMouseEnter={() => setFlask(true)} onMouseLeave={() => setFlask(false)}>
            <SiFlask className={flask ? "Skills-logo_active" : "Skills-logo"}/>
            {flask && 
            <div className="Skills-div_label">
              <p className="Skills-label">Flask</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setExpress(true)} onMouseLeave={() => setExpress(false)}>
            <SiExpress className={express ? "Skills-logo_active" : "Skills-logo"}/>
            {express && 
            <div className="Skills-div_label">
              <p className="Skills-label">ExpressJS</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setSqlAlchemy(true)} onMouseLeave={() => setSqlAlchemy(false)}>
            <SiSqlalchemy className={sqlAlchemy ? "Skills-logo_active" : "Skills-logo"}/>
            {sqlAlchemy && 
            <div className="Skills-div_label">
              <p className="Skills-label">SqlAlchemy</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setSequelize(true)} onMouseLeave={() => setSequelize(false)}>
            <SiSequelize className={sequelize ? "Skills-logo_active" : "Skills-logo"}/>
            {sequelize && 
            <div className="Skills-div_label">
              <p className="Skills-label">Sequelize</p>
            </div>}
          </div>
        </div>
      </div>

      <div className="Skills-section" style={{marginBottom: '40px'}}>
        <div className="Skills-div_txtLarge">
          <p className="Skills-text_large">Database</p>
        </div>
        <div className="Skills-div">
          <div className="Skills-item" onMouseEnter={() => setSqlite(true)} onMouseLeave={() => setSqlite(false)}>
            <SiSqlite className={sqlite ? "Skills-logo_active" : "Skills-logo"}/>
            {sqlite && 
            <div className="Skills-div_label">
              <p className="Skills-label">Sqlite3</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setPostgre(true)} onMouseLeave={() => setPostgre(false)}>
            <SiPostgresql className={postgre ? "Skills-logo_active" : "Skills-logo"}/>
            {postgre && 
            <div className="Skills-div_label">
              <p className="Skills-label">PostgreSQL</p>
            </div>}
          </div>
        </div>
      </div>
    </div> 
  ) 
}