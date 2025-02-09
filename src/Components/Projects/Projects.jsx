import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import reduxLogo from '../../assets/redux.svg';
import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/node.svg';
import expressLogo from '../../assets/expressjs.svg';
import sequelizeLogo from '../../assets/Sequelize.svg';
import postgreLogo from '../../assets/PostgreSQL.svg';
import driveLogo from '../../assets/googleDrive.svg';
import flaskLogo from '../../assets/flask.svg';
import jsLogo from '../../assets/js.png';
import pythonLogo from '../../assets/pythonLogo.png';
import groundbnb from '../../assets/groundbnb.png';

import { FaCircle } from "react-icons/fa"; 
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import { useModal } from '../../context/modal';
import DisplayImage from '../Modals/DisplayImage/DisplayImage';

import "./Projects.css" 

export default function Projects() {
  const { setModalContent } = useModal();
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(false);
  const totalSlides = 3; // Number of slides

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    if (width > 1439) {
      setPosition(1100)
    } else if (width > 1039) {
      setPosition(1000)
    } else if (width > 767 && width < 1040) {
      setPosition(768)
    } else {
      setPosition(width * .97)
    }

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  function handleMove(direction) {
    if (width > 1439) {
      setIndex(prev => prev + (direction === "right" ? 1 : -1));
      setPosition(prev => prev + (direction === "right" ? -1100 : 1100));
    } else if (width > 1039) {
      setIndex(prev => prev + (direction === "right" ? 1 : -1));
      setPosition(prev => prev + (direction === "right" ? -1000 : 1000));
    } else if (width < 1040 && width > 767) {
      setIndex(prev => prev + (direction === "right" ? 1 : -1));
      setPosition(prev => prev + (direction === "right" ? -768 : 768));
    } else {
      setIndex(prev => prev + (direction === "right" ? 1 : -1));
      setPosition(prev => prev + (direction === "right" ? -(width * 0.97) : (width * 0.97)));
    }
  }

  if (position === false) return null;

  return ( 
    <div className="Projects">
      {index > 0 && <FaChevronLeft className="arrow left" onClick={() => handleMove("left")} />}
      
      <div className="Projects-box">
        <div className="Projects-section" style={{ transform: `translateX(${position}px)`}}>
          <div className="Projects-section_div">
            <div className="Projects-title">
              <p className="Projects-name">Social App</p>
              <p className="Projects-date">In Progress</p>
            </div>
            <div className="Projects-alt_body">
              <div className="Projects-col">
                <p className="Projects-text_large">Frontend</p>
                <div className="Projects-div_logos">
                  <div className="Projects-div_logo">
                    <img src={reduxLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Redux</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={reactLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">React</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={nodeLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Nodejs</p>
                  </div>
                </div>
              </div>

              <div className="Projects-col">
                <p className="Projects-text_large">Backend</p>

                <div className="Projects-div_logos">
                  <div className="Projects-div_logo">
                    <img src={jsLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">JavaScript</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={expressLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Express</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={sequelizeLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Sequelize</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={postgreLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">PostgreSQL</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={driveLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Drive API</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Projects-body">
              <p className="Projects-text">
                Social App is a real-time social platform designed to enhance user engagement and foster meaningful connections. Currently in development, it enables users to share posts, comment, and interact seamlessly while maintaining a smooth and intuitive experience.
                Built with React and Redux on the front end and powered by Express and Sequelize on the backend, Social App ensures efficient state management and real-time updates. A standout feature is the "Users for You" system, which helps users discover and connect with others based on shared interests.
                As development progresses, new features and optimizations are continuously being added to improve scalability, accessibility, and overall performance. With a focus on modern design and seamless interaction, Social App is evolving into a dynamic and engaging platform for users to connect and share.  
              </p>
            </div>
          </div>
        </div>

        <div className="Projects-section" style={{transform: `translateX(${position}px)`}}>
          <div className="Projects-section_div">
          <div className="Projects-title">
              <p className="Projects-name">WikiDocs</p>
              <p className="Projects-date">2024</p>
            </div>
            <div className="Projects-alt_body">
              <div className="Projects-col">
                <p className="Projects-text_large">Frontend</p>
                <div className="Projects-div_logos">
                  <div className="Projects-div_logo">
                    <img src={reduxLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Redux</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={reactLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">React</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={nodeLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Nodejs</p>
                  </div>
                </div>
              </div>

              <div className="Projects-col">
                <p className="Projects-text_large">Backend</p>
                <div className="Projects-div_logos">
                  <div className="Projects-div_logo">
                    <img src={pythonLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Python</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={flaskLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Flask</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={postgreLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Projects-body">
              <p className="Projects-text">
                WikiDocs is a full-stack web application that allows users to browse, create, and share a variety of documents, articles, and 
                prompts. Designed with a sleek, minimalist interface, it provides a seamless reading and writing experience. Users can publish 
                their own content, edit or delete their submissions, and explore work created by others. While non-owners can read and engage 
                with shared materials, only the original authors have the ability to modify or remove their content. Built for simplicity and 
                efficiency, WikiDocs makes knowledge sharing more accessible and intuitive.
              </p>

            </div>
          </div>
        </div>

        <div className="Projects-section" style={{transform:`translateX(${position}px)`}}>
          <div className="Projects-section_div">
          <div className="Projects-title">
              <p className="Projects-name">GroundBnb</p>
              <p className="Projects-date">2024</p>
            </div>
            <div className="Projects-alt_body">
              <div className="Projects-col">
                <p className="Projects-text_large">Frontend</p>
                <div className="Projects-div_logos">
                  <div className="Projects-div_logo">
                    <img src={reduxLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Redux</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={reactLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">React</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={nodeLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Nodejs</p>
                  </div>
                </div>
              </div>

              <div className="Projects-col">
                <p className="Projects-text_large">Backend</p>
                <div className="Projects-div_logos">
                  <div className="Projects-div_logo">
                    <img src={jsLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">JavaScript</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={expressLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Express</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={sequelizeLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">Sequelize</p>
                  </div>

                  <div className="Projects-div_logo">
                    <img src={postgreLogo} className="Projects-logo"/>
                    <p className="Projects-logo_label">PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Projects-body">
              <p className="Projects-text">
                GroundBnb is a full-stack web application modeled after Airbnb, replicating its core features while providing a seamless user 
                experience. Built with React, Redux, Express, PostgreSQL, and Sequelize, it offers a dynamic and responsive interface for browsing, 
                booking, and listing rental properties. The application features JWT authentication for secure user login and session management. 
                GroundBnb also includes a modern UI with a four-column layout and infinite scrolling for easy property exploration. With efficient 
                state management powered by Redux and optimized database interactions through Sequelize, the platform ensures smooth performance 
                and scalability.  
              </p>

              <div className="Projects-div_button">
                <button className="Projects-button" onClick={() => window.open('https://ground-bnb-n5l7.onrender.com/', '_blank')}>
                  Visit Site
                </button>
                <button className="Projects-button" 
                        onClick={() => setModalContent(<DisplayImage image={groundbnb}/>)}>
                  View Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {index < totalSlides - 1 && <FaChevronRight className="arrow right" onClick={() => handleMove("right")} />}
      
    </div>
  ) 
}