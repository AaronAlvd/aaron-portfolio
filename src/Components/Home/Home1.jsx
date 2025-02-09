import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Personal from '../Personal/Personal';

import './Home.css';

export default function Home() {

  return (
    <div className='Home'>
      <Personal />
      <div className='Home-box'>
        <p className='Home-text'>
          Hi, I'm Aaron, a 21-year-old first-generation American and a full-stack software developer from Sacramento, CA.
          I believe the future is in programming, and I love the idea of building the future through technology. Software has the power to 
          shape industries, solve complex problems, and drive innovation—and I want to be part of that transformation. I'm studying Computer 
          Science and Biology because I think AI will play a key role in curing many diseases. By studying both fields, I hope to contribute to 
          finding solutions that will help cure the world. The intersection of technology and biology has endless potential, and I’m excited to be 
          a part of that future. I'm very good at problem-solving and enjoy tackling difficult challenges. There's something incredibly satisfying 
          about pushing myself to figure out complex problems—it's the feeling I get when my brain is truly challenged that keeps me going. I enjoy 
          learning and reading about what's going on in my community. Whenever I can, I'll read up on some of the fiscal policies implemented in 
          Sacramento to stay informed and engaged. I currently attend American River College and will have completed App Academy in February 2025. 
          My goal is to transfer to UC Davis, UCLA, or Berkeley to earn a bachelor's degree in Computer Science and Molecular Biology. Outside of 
          coding, I enjoy experimenting with new technologies, participating in programming challenges, and continuously refining my skills to 
          become a better developer.
        </p>
      </div>
    </div>
  )
}