import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa"; 
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import Personal from '../Personal/Personal';

import "./Education.css" 

export default function Education() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(false);
  const totalSlides = 4; // Number of slides

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    if (width > 1439) {
      setPosition(1650)
    } else if (width > 1039) {
      setPosition(1350)
    } else if (width > 767) {
      setPosition(width * .97 * 1.5)
    } else {
      setPosition(width * 1.5)
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
      if (direction === "left") {
        setIndex(index - 1);
        setPosition(position + 1100);
      } else if (direction === "right") {
        setIndex(index + 1);
        setPosition(position - 1100);
      }
    } else if (width > 1039) {
      if (direction === "left") {
        setIndex(index - 1);
        setPosition(position + 900);
      } else if (direction === "right") {
        setIndex(index + 1);
        setPosition(position - 900);
      }
    } else if (width > 767) {
      if (direction === "left") {
        setIndex(index - 1);
        setPosition(position + (width * .97));
      } else if (direction === "right") {
        setIndex(index + 1);
        setPosition(position - (width * .97));
      }
    } else {
     if (direction === "left") {
        setIndex(index - 1);
        setPosition(position + (width));
      } else if (direction === "right") {
        setIndex(index + 1);
        setPosition(position - (width));
      }
    }
  }

  if (!position) return null;

  return ( 
    <div className="Education" >
      {index > 0 && <FaChevronLeft className="arrow left" onClick={() => handleMove("left")} />}
      
      {/* <Personal /> */}
      
      <div className="Education-box">
        <div className="Education-section" style={{ transform: `translateX(${position}px)`}}>
          <div className="Education-section_div">
            <div className="Education-title">
              <p className="Education-date">Mar 2024 - Feb 2025</p>
              <p className="Education-degree">Full Stack Software Developer</p>
              <p className="Education-school">App Academy</p>
            </div>
            <div className="Education-body">
              <p className="Education-text">
                As an App Academy student, I gained hands-on experience in full-stack web development, working on multiple projects that honed my
                skills in React, Redux, JavaScript, Python, PostgreSQL, and more. I built a fully functional Airbnb clone, where I implemented
                complex state management using Redux and optimized database interactions with Express and Sequelize. I also developed WikiDocs, a
                Wikipedia-like web application using Flask and SQLAlchemy, focusing on backend development and clean UI integration. Additionally,
                I created a social media app using Vite, incorporating real-time data and interactive features. Throughout my time at App Academy,
                I collaborated in small teams, improving my ability to write scalable, maintainable code while following industry best practices.
                These experiences reinforced my problem-solving skills and deepened my understanding of software engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="Education-section" style={{transform: `translateX(${position}px)`}}>
          <div className="Education-section_div">
            <div className="Education-title">
              <p className="Education-date">In Progress</p>
              <p className="Education-degree">Molecular Biology Transfer</p>
              <p className="Education-school">American River College</p>
              <p style={{color: 'rgb(163, 54, 61)', fontWeight: '700'}}>Improve Your Tomorrow</p>
            </div>

            <div className="Education-body">
              <p className="Education-text">
                At American River College, I am pursuing coursework in Molecular Biology while preparing to transfer to a University of California. 
                My studies focus on the fundamental principles of genetics, biochemistry, and cell biology, providing me with a strong foundation in 
                the life sciences. Alongside my biology coursework, I am also honing my skills in computer science, as I believe that the 
                intersection of computational tools and biological research will play a crucial role in solving complex scientific challenges. My 
                goal is to leverage both disciplines to contribute to advancements in biotechnology and medical research, particularly in the 
                application of AI to disease treatment. Through rigorous coursework and hands-on lab experience, I am developing the critical 
                thinking and analytical skills needed to excel in both fields.
              </p>
            </div>
          </div>
        </div>

        <div className="Education-section" style={{transform:`translateX(${position}px)`}}>
          <div className="Education-section_div">
            <div className="Education-title">
              <p className="Education-date">In Progress</p>
              <p className="Education-degree">Computer Science Transfer</p>
              <p className="Education-school">Sacramento City College</p>
              <p style={{color: 'rgb(163, 54, 61)', fontWeight: '700'}}>Programming Club</p>
            </div>

            <div className="Education-body">
              <p className="Education-text">
                At Sacramento City College, I am studying Computer Science, building a strong foundation in algorithms, data structures, and 
                software development. My coursework emphasizes problem-solving, programming, and computational theory, equipping me with the skills 
                needed to tackle complex technical challenges. Alongside my studies, I am continuously refining my coding abilities through hands-on 
                projects, exploring areas like full-stack web development, artificial intelligence, and software optimization. My goal is to transfer 
                to a University of California, where I can further deepen my expertise and integrate my knowledge of computer science with my passion 
                for molecular biology to drive innovation in biotech and medical research.
              </p>
            </div>
          </div>
        </div>

        <div className="Education-section" style={{transform: `translateX(${position}px)`}}>
          <div className="Education-section_div">
            <div className="Education-title">
              <p className="Education-date">Aug 2017 - June 2021</p>
              <p className="Education-degree">High School Diploma</p>
              <p className="Education-school">Grant Union High School</p>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <p style={{color: 'rgb(163, 54, 61)', fontWeight: '700'}}>Academic Honors</p>
                <p style={{color: 'rgb(163, 54, 61)', fontWeight: '700'}}>Certificate of Achievement</p>
                <p style={{color: 'rgb(163, 54, 61)', fontWeight: '700'}}>This Way Ahead</p>
              </div>
            </div>

            <div className="Education-body">
              <p className="Education-text">
                At Grant Union High School, I focused on building a strong foundation in both biology and math, which sparked my passion for 
                combining these fields in my future studies. Through rigorous coursework, I developed a deep understanding of scientific principles 
                and analytical problem-solving. This foundation has guided my current academic journey, where I am pursuing Molecular Biology and 
                Computer Science at American River College, with plans to transfer to a University of California. The skills I gained at Grant Union
                continue to drive my ambition to contribute to innovative solutions in biotechnology and AI-driven medical research.
              </p>
            </div>
          </div>
        </div>
      </div>

      {index < totalSlides - 1 && <FaChevronRight className="arrow right" onClick={() => handleMove("right")} />}
    </div>
  ) 
}