import { useEffect, useState, useRef, useMemo } from "react" 
import { useLocation, useNavigate } from "react-router-dom" 

import "./Footer.css" 

export default function Footer() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight); 

  return ( 
    <div className="Footer">
       
    </div> 
  ) 
}