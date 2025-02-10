import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGoogleDrive, FaGithub, FaFigma } from "react-icons/fa";
import { SiSequelize, SiSqlalchemy, SiSqlite, SiFlask, SiPostgresql, SiRedux, SiAxios, SiExpress, SiRender } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import { MdPlayArrow } from "react-icons/md";

import "./Skills.css" 

export default function Desktop() {
  const location = useLocation(); 
  const navigate = useNavigate();

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const [active, setActive] = useState('all');

  const [javascript, setJavascript] = useState(false);
  const [sqlAlchemy, setSqlAlchemy] = useState(false);
  const [sequelize, setSequelize] = useState(false);
  const [postgre, setPostgre] = useState(false);
  const [express, setExpress] = useState(false);
  const [render, setRender] = useState(false);
  const [openAI, setOpenAI] = useState(false);
  const [python, setPython] = useState(false);
  const [sqlite, setSqlite] = useState(false);
  const [github, setGithub] = useState(false);
  const [vscode, setVscode] = useState(false);
  const [redux, setRedux] = useState(false);
  const [react, setReact] = useState(false);
  const [axios, setAxios] = useState(false);
  const [flask, setFlask] = useState(false);
  const [drive, setDrive] = useState(false);
  const [figma, setFigma] = useState(false);
  const [HTML, setHTML] = useState(false);
  const [css, setCSS] = useState(false);


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

  const displayAll = () => {
    return (
      <div className="Skills-right"> 
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

        <div className="Skills-item" onMouseEnter={() => setDrive(true)} onMouseLeave={() => setDrive(false)}>
          <FaGoogleDrive className={drive ? "Skills-logo_active" : "Skills-logo"}/>
          {drive && 
          <div className="Skills-div_label">
            <p className="Skills-label">Google Drive</p>
          </div>}
        </div>
        
        <div className="Skills-item" onMouseEnter={() => setOpenAI(true)} onMouseLeave={() => setOpenAI(false)}>
          <AiOutlineOpenAI className={openAI ? "Skills-logo_active" : "Skills-logo"}/>
          {openAI&& 
          <div className="Skills-div_label">
            <p className="Skills-label">OpenAI</p>
          </div>}
        </div>

        <div className="Skills-item" onMouseEnter={() => setGithub(true)} onMouseLeave={() => setGithub(false)}>
          <FaGithub className={github ? "Skills-logo_active" : "Skills-logo"}/>
          {github && 
          <div className="Skills-div_label">
            <p className="Skills-label">GitHub</p>
          </div>}
        </div>
        <div className="Skills-item" onMouseEnter={() => setFigma(true)} onMouseLeave={() => setFigma(false)}>
          <FaFigma className={figma ? "Skills-logo_active" : "Skills-logo"}/>
          {figma && 
          <div className="Skills-div_label">
            <p className="Skills-label">Figma</p>
          </div>}
        </div>
        <div className="Skills-item" onMouseEnter={() => setVscode(true)} onMouseLeave={() => setVscode(false)}>
          <VscVscode className={vscode ? "Skills-logo_active" : "Skills-logo"}/>
          {vscode && 
          <div className="Skills-div_label">
            <p className="Skills-label">VSCode</p>
          </div>}
        </div>
        <div className="Skills-item" onMouseEnter={() => setRender(true)} onMouseLeave={() => setRender(false)}>
          <SiRender className={render ? "Skills-logo_active" : "Skills-logo"}/>
          {render && 
          <div className="Skills-div_label">
            <p className="Skills-label">Render</p>
          </div>}
        </div>
      </div>
    )
  }

  return ( 
    <div className="Skills">
      <div className="Skills-left_div">
        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('all')}>All</p>
          {active === 'all' && <MdPlayArrow className="Skills-arrow"/>}
        </div>

        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('languages')}>Languages</p>
          {active === 'languages' && <MdPlayArrow className="Skills-arrow"/>}
        </div>

        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('web')}>Web</p>
          {active === 'web' && <MdPlayArrow className="Skills-arrow"/>}
        </div>

        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('frontend')}>Frontend</p>
          {active === 'frontend' && <MdPlayArrow className="Skills-arrow"/>}
        </div>

        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('backend')}>Backend</p>
          {active === 'backend' && <MdPlayArrow className="Skills-arrow"/>}
        </div>

        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('database')}>Database</p>
          {active === 'database' && <MdPlayArrow className="Skills-arrow"/>}
        </div>

        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('api')}>API</p>
          {active === 'api' && <MdPlayArrow className="Skills-arrow"/>}
        </div>

        {/* <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('game')}>Game</p>
          {active === 'game' && <MdPlayArrow className="Skills-arrow"/>}
        </div> */}

        <div className="Skills-div_name">
          <p className="Skills-name" onClick={() => setActive('tools')}>Tools</p>
          {active === 'tools' && <MdPlayArrow className="Skills-arrow"/>}
        </div>
      </div>

      <div className="Skills-right_div" style={{minHeight: `${height - 160}px`}}>
        {active === 'all' && displayAll()}
        {active === 'languages' && 
        <div className="Skills-right"> 
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
        </div>}

        {active === 'frontend' && 
        <div className="Skills-right">
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
        </div>}

        {active === 'backend' && 
        <div className="Skills-right">
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
        </div>}

        {active === 'database' && 
        <div className="Skills-right">
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
        </div>}

        {active === 'api' && 
        <div className="Skills-right">
          <div className="Skills-item" onMouseEnter={() => setDrive(true)} onMouseLeave={() => setDrive(false)}>
            <FaGoogleDrive className={drive ? "Skills-logo_active" : "Skills-logo"}/>
            {drive && 
            <div className="Skills-div_label">
              <p className="Skills-label">Google Drive</p>
            </div>}
          </div>
          
          <div className="Skills-item" onMouseEnter={() => setOpenAI(true)} onMouseLeave={() => setOpenAI(false)}>
            <AiOutlineOpenAI className={openAI ? "Skills-logo_active" : "Skills-logo"}/>
            {openAI&& 
            <div className="Skills-div_label">
              <p className="Skills-label">OpenAI</p>
            </div>}
          </div>
        </div>}

        {active === 'game' && 
        <div className="Skills-right">

        </div>}

        {active === 'tools' && 
        <div className="Skills-right">
          <div className="Skills-item" onMouseEnter={() => setGithub(true)} onMouseLeave={() => setGithub(false)}>
            <FaGithub className={github ? "Skills-logo_active" : "Skills-logo"}/>
            {github && 
            <div className="Skills-div_label">
              <p className="Skills-label">GitHub</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setFigma(true)} onMouseLeave={() => setFigma(false)}>
            <FaFigma className={figma ? "Skills-logo_active" : "Skills-logo"}/>
            {figma && 
            <div className="Skills-div_label">
              <p className="Skills-label">Figma</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setVscode(true)} onMouseLeave={() => setVscode(false)}>
            <VscVscode className={vscode ? "Skills-logo_active" : "Skills-logo"}/>
            {vscode && 
            <div className="Skills-div_label">
              <p className="Skills-label">VSCode</p>
            </div>}
          </div>

          <div className="Skills-item" onMouseEnter={() => setRender(true)} onMouseLeave={() => setRender(false)}>
            <SiRender className={render ? "Skills-logo_active" : "Skills-logo"}/>
            {render && 
            <div className="Skills-div_label">
              <p className="Skills-label">Render</p>
            </div>}
          </div>
        </div>}

        {active === 'web' && 
        <div className="Skills-right">
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
        </div>}
      </div>
    </div> 
  ) 
}