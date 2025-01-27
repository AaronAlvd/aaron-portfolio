import "./Education.css";
import { useState, useEffect } from 'react';


export default function Education() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className="Education" style={{height: `${width > 1023 ? height - 170 + 'px' : 'min-content'}`}}>
      <div className="Education-section" style={{marginTop: '40px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p className="Education-title">App Academy</p>
            <p>-</p>
            <p className="Education-degree"><i>Full-Stack Software Developer</i></p>
          </div>
          <p className="Education-date">Mar 2024 - Feb 2025</p>
        </div>
        <p className="Education-text">
          Having completed my time at App Academy, I’m proud to have gained a strong foundation in full-stack web development. 
          The program was intense, covering a wide range of technologies like JavaScript, Python, React, and Express for building 
          dynamic web applications. I also worked extensively with frameworks like Flask and Sequelize, learning how to manage both 
          front-end and back-end development. I’ve built projects from the ground up, integrating APIs, working with databases using 
          SQLAlchemy and Sequelize, and deploying applications on platforms like Render. Along the way, I also sharpened my skills in 
          HTML, CSS, and debugging—essential tools for building polished, responsive web apps. Overall, the experience has given me a 
          solid technical skillset and the confidence to tackle complex development challenges in a professional setting.
        </p>
      </div>

      <div className="Education-section" style={{marginTop: '40px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p className="Education-title">American River College</p>
            <p>-</p>
            <p className="Education-degree"><i>Molecular Biology/Computer Science</i></p>
          </div>
          <p className="Education-date">Aug 2021 - present</p>
        </div>
        <p className="Education-text">
          Having completed my time at App Academy, I’m proud to have gained a strong foundation in full-stack web development. 
          The program was intense, covering a wide range of technologies like JavaScript, Python, React, and Express for building 
          dynamic web applications. I also worked extensively with frameworks like Flask and Sequelize, learning how to manage both 
          front-end and back-end development. I’ve built projects from the ground up, integrating APIs, working with databases using 
          SQLAlchemy and Sequelize, and deploying applications on platforms like Render. Along the way, I also sharpened my skills in 
          HTML, CSS, and debugging—essential tools for building polished, responsive web apps. Overall, the experience has given me a 
          solid technical skillset and the confidence to tackle complex development challenges in a professional setting.
        </p>
      </div>

      <div className="Education-section" style={{marginTop: '40px', marginBottom: '40px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p className="Education-title">Grant Union High School</p>
            <p>-</p>
            <p className="Education-degree"><i>Diploma</i></p>
          </div>
          <p className="Education-date">AUg 2017 - June 2021</p>
        </div>
        <p className="Education-text">
          Having completed my time at App Academy, I’m proud to have gained a strong foundation in full-stack web development. 
          The program was intense, covering a wide range of technologies like JavaScript, Python, React, and Express for building 
          dynamic web applications. I also worked extensively with frameworks like Flask and Sequelize, learning how to manage both 
          front-end and back-end development. I’ve built projects from the ground up, integrating APIs, working with databases using 
          SQLAlchemy and Sequelize, and deploying applications on platforms like Render. Along the way, I also sharpened my skills in 
          HTML, CSS, and debugging—essential tools for building polished, responsive web apps. Overall, the experience has given me a 
          solid technical skillset and the confidence to tackle complex development challenges in a professional setting.
        </p>
      </div>
    </div>
  );
}