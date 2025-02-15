import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

import social from '../../assets/social.png';
import groundbnb from '../../assets/groundbnb.png';
import wikidocs from '../../assets/wikidocs.png';

import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGoogleDrive, FaGithub, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiSequelize, SiSqlalchemy, SiSqlite, SiFlask, SiPostgresql, SiRedux, SiAxios, SiExpress, SiRender } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";

import "./Projects.css" 

export default function Desktop() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight); 
  const [active, setActive] = useState('social');
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
  const [node, setNode] = useState(false);
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

  return ( 
    <div className="Projects">
      <div className="Projects-left">
        <div className="Projects-left_item">
          <p className="Projects-title" onClick={() => setActive('social')}>Social App</p>
          {active === 'social' && <MdPlayArrow className="Projects-arrow"/>}
        </div>
        <div className="Projects-left_item">
          <p className="Projects-title" onClick={() => setActive('groundbnb')}>GroundBnb</p>
          {active === 'groundbnb' && <MdPlayArrow className="Projects-arrow"/>}
        </div>
        <div className="Projects-left_item">
          <p className="Projects-title" onClick={() => setActive('wikidocs')}>WikiDocs</p>
          {active === 'wikidocs' && <MdPlayArrow className="Projects-arrow"/>}
        </div>
      </div>
      <div className="Projects-right" style={{width: `${width - 152}px`}}>
        {active === 'social' && 
        <div className="Projects-right_item">
          <div className="Projects-header">
            <p className="Projects-date">2025</p>
          </div>

          <div className="Projects-row2">
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaJs className="Projects-icon" onMouseEnter={() => setJavascript(true)} onMouseLeave={() => setJavascript(false)}/>
                {javascript && <p className="Projects-icon_label">JavaScript</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaReact className="Projects-icon" onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)}/>
                {react && <p className="Projects-icon_label">React</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiSequelize className="Projects-icon" onMouseEnter={() => setSequelize(true)} onMouseLeave={() => setSequelize(false)}/>
                {sequelize && <p className="Projects-icon_label">Sequelize</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiPostgresql className="Projects-icon" onMouseEnter={() => setPostgre(true)} onMouseLeave={() => setPostgre(false)}/>
                {postgre && <p className="Projects-icon_label">PostgreSQL</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiAxios className="Projects-icon" onMouseEnter={() => setAxios(true)} onMouseLeave={() => setAxios(false)}/>
                {axios && <p className="Projects-icon_label">Axios</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiExpress className="Projects-icon" onMouseEnter={() => setExpress(true)} onMouseLeave={() => setExpress(false)}/>
                {express && <p className="Projects-icon_label">Express</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiRedux className="Projects-icon" onMouseEnter={() => setRedux(true)} onMouseLeave={() => setRedux(false)}/>
                {redux && <p className="Projects-icon_label">Redux</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaNodeJs className="Projects-icon" onMouseEnter={() => setNode(true)} onMouseLeave={() => setNode(false)}/>
                {node && <p className="Projects-icon_label">Node</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiRender className="Projects-icon" onMouseEnter={() => setRender(true)} onMouseLeave={() => setRender(false)}/>
                {render && <p className="Projects-icon_label">Render</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaGoogleDrive className="Projects-icon" onMouseEnter={() => setDrive(true)} onMouseLeave={() => setDrive(false)}/>
                {drive && <p className="Projects-icon_label">Drive API</p>}
              </div>
            </div>
          </div>

          <div>
            <p className="Projects-text">
            Social App is a real-time social platform designed to enhance user engagement and foster meaningful connections. Currently in development, it 
            enables users to share posts, comment, and interact seamlessly while maintaining a smooth and intuitive experience. Built with React and Redux 
            on the front end and powered by Express and Sequelize on the backend, Social App ensures efficient state management and real-time updates. A 
            standout feature is the "Users for You" system, which helps users discover and connect with others based on shared interests. As development 
            progresses, new features and optimizations are continuously being added to improve scalability, accessibility, and overall performance. With a 
            focus on modern design and seamless interaction, Social App is evolving into a dynamic and engaging platform for users to connect and share.
            </p>
            <img src={social} className="Projects-img"/>
          </div>
        </div>}

        {active === 'wikidocs' && 
        <div className="Projects-right_item">
          <div className="Projects-header">
            <p className="Projects-date">2024</p>
          </div>

          <div className="Projects-row2">
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaPython className="Projects-icon" onMouseEnter={() => setPython(true)} onMouseLeave={() => setPython(false)}/>
                {python && <p className="Projects-icon_label">Python</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaReact className="Projects-icon" onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)}/>
                {react && <p className="Projects-icon_label">React</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiSqlalchemy className="Projects-icon" onMouseEnter={() => setSqlAlchemy(true)} onMouseLeave={() => setSqlAlchemy(false)}/>
                {sqlAlchemy && <p className="Projects-icon_label">SqlAlchemy</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiPostgresql className="Projects-icon" onMouseEnter={() => setPostgre(true)} onMouseLeave={() => setPostgre(false)}/>
                {postgre && <p className="Projects-icon_label">PostgreSQL</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiAxios className="Projects-icon" onMouseEnter={() => setAxios(true)} onMouseLeave={() => setAxios(false)}/>
                {axios && <p className="Projects-icon_label">Axios</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiFlask className="Projects-icon" onMouseEnter={() => setFlask(true)} onMouseLeave={() => setFlask(false)}/>
                {flask && <p className="Projects-icon_label">Flask</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiRedux className="Projects-icon" onMouseEnter={() => setRedux(true)} onMouseLeave={() => setRedux(false)}/>
                {redux && <p className="Projects-icon_label">Redux</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiRender className="Projects-icon" onMouseEnter={() => setRender(true)} onMouseLeave={() => setRender(false)}/>
                {render && <p className="Projects-icon_label">Render</p>}
              </div>
            </div>
          </div>

          <div>
            <p className="Projects-text">
            WikiDocs is a full-stack web application that allows users to browse, create, and share a variety of documents, articles, and 
            prompts. Designed with a sleek, minimalist interface, it provides a seamless reading and writing experience. Users can publish 
            their own content, edit or delete their submissions, and explore work created by others. While non-owners can read and engage 
            with shared materials, only the original authors have the ability to modify or remove their content. Built for simplicity and 
            efficiency, WikiDocs makes knowledge sharing more accessible and intuitive.
            </p>
            <img src={wikidocs} className="Projects-img"/>
          </div>
        </div>}

        {active === 'groundbnb' && 
        <div className="Projects-right_item">
          <div className="Projects-header">
            <p className="Projects-date">2024</p>
          </div>

          <div className="Projects-row2">
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaJs className="Projects-icon" onMouseEnter={() => setJavascript(true)} onMouseLeave={() => setJavascript(false)}/>
                {javascript && <p className="Projects-icon_label">JavaScript</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaReact className="Projects-icon" onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)}/>
                {react && <p className="Projects-icon_label">React</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiSequelize className="Projects-icon" onMouseEnter={() => setSequelize(true)} onMouseLeave={() => setSequelize(false)}/>
                {sequelize && <p className="Projects-icon_label">Sequelize</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiPostgresql className="Projects-icon" onMouseEnter={() => setPostgre(true)} onMouseLeave={() => setPostgre(false)}/>
                {postgre && <p className="Projects-icon_label">PostgreSQL</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiAxios className="Projects-icon" onMouseEnter={() => setAxios(true)} onMouseLeave={() => setAxios(false)}/>
                {axios && <p className="Projects-icon_label">Axios</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiExpress className="Projects-icon" onMouseEnter={() => setExpress(true)} onMouseLeave={() => setExpress(false)}/>
                {express && <p className="Projects-icon_label">Express</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiRedux className="Projects-icon" onMouseEnter={() => setRedux(true)} onMouseLeave={() => setRedux(false)}/>
                {redux && <p className="Projects-icon_label">Redux</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <FaNodeJs className="Projects-icon" onMouseEnter={() => setNode(true)} onMouseLeave={() => setNode(false)}/>
                {node && <p className="Projects-icon_label">Node</p>}
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <SiRender className="Projects-icon" onMouseEnter={() => setRender(true)} onMouseLeave={() => setRender(false)}/>
                {render && <p className="Projects-icon_label">Render</p>}
              </div>
            </div>
          </div>

          <div>
            <p className="Projects-text">
            GroundBnb is a full-stack web application modeled after Airbnb, replicating its core features while providing a seamless user 
            experience. Built with React, Redux, Express, PostgreSQL, and Sequelize, it offers a dynamic and responsive interface for browsing, 
            booking, and listing rental properties. The application features JWT authentication for secure user login and session management. 
            GroundBnb also includes a modern UI with a four-column layout and infinite scrolling for easy property exploration. With efficient 
            state management powered by Redux and optimized database interactions through Sequelize, the platform ensures smooth performance 
            and scalability. 
            </p>
            <img src={groundbnb} className="Projects-img"/>
          </div>
        </div>}
      </div>
    </div> 
  ) 
}