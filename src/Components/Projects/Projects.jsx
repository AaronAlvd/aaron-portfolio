import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Desktop from './Desktop'
import Mobile from './Mobile'

import "./Projects.css" 

export default function Projects2() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight); 

  if (width > 1039) return <Desktop/>

  return <Mobile/>
}