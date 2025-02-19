import { useEffect, useState, useRef, useMemo } from "react" 
import { useLocation, useNavigate } from "react-router-dom" 
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight); 

  return ( 
    <div className="Home-footer text-center mt-6 p-4 bg-[rgb(163,54,61)] text-white">
      <p className="text-md mt-2">
        <a href="mailto:ayaldr@icloud.com" className="text-blue-400 hover:text-blue-300 underline ml-1">
          ayaldr@icloud.com
        </a>
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-3">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[rgb(220,220,220)]">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[rgb(220,220,220)]">
          LinkedIn
        </a>
      </div>

      <p className="text-sm text-white mt-3">&copy; {new Date().getFullYear()} Aaron Alvarado. All Rights Reserved.</p>
    </div>
  ) 

}