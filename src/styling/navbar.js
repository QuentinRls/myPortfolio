import React, { useEffect, useState } from 'react';
import useScrollListener from "./scrolling";
import '../style/navBar.css';
import logo from "../image/logo.svg"


function Navbar() {
  const [navClassList, setNavClassList] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 800);
  const scroll = useScrollListener();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const _classList = ['navBar'];

    if (scroll.y > 10 && scroll.y - scroll.lastY > 0)
      _classList.push("navBar--hidden");
    if (scroll.y < scroll.lastY && scroll.y > 0)
      _classList.push("navBar--reshow");
    if (scroll.y === 0)
      _classList.push("navBar");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY, isSmallScreen]);


  useEffect(() => {
      const timeoutId = setTimeout(() => {
          setIsVisible(true);
      }, 1000); // 1000 milliseconds (1 second) delay

      return () => clearTimeout(timeoutId);
  }, []);

  return (
<div className={`fade-in ${isVisible ? 'visible' : ''}`}>
  <nav className={navClassList.join(" ")}>
    <img src={logo} alt="Votre SVG" className='logoSvg'/>
    {isSmallScreen ? (
      <ul>
        <li><button className="resumeButtonAlone">Resume</button></li>
      </ul>
    ) : (
      <ul className='navList'>
        <li><p className="navCount">I.</p> About</li>
        <li><p className="navCount">II.</p> Experience</li>
        <li><p className="navCount">III.</p> My Library</li>
        <li><p className="navCount">IV.</p> Contact</li>
        <li><button className="resumeButton">Resume</button></li>
      </ul>
    )}
    <div className='nightModeContainer'></div>
  </nav>
</div>

  );
}

export default Navbar;
