import React, { useEffect, useState } from 'react';
import useScrollListener from "./scrolling";
import '../style/navBar.css';
import logo from "../image/logo.svg";
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
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fade-in-nav ${isVisible ? 'visible' : ''}`}>
      <nav className={navClassList.join(" ")}>
        <img src={logo} alt="Votre SVG" className="logoSvg" />
        {isSmallScreen ? (
          <ul>
            <li>
              <a href="/QuentinRiolsCV.pdf" download="QuentinRiolsCV.pdf" className="resumeButton">
                Resume
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navList">
            <li onClick={() => scrollToSection('about')}>
              <p className='textLinkUnderlineNavBar'><p className="navCount">I.</p> About</p>
            </li>
            <li onClick={() => scrollToSection('Work')}>
            <p className='textLinkUnderlineNavBar'><p className="navCount">II.</p> Experience</p>
            </li>
            <li onClick={() => scrollToSection('project')}>
            <p className='textLinkUnderlineNavBar'><p className="navCount">III.</p> IA Apps</p>
            </li>
            <li onClick={() => scrollToSection('contact')}>
            <p className='textLinkUnderlineNavBar'><p className="navCount">IV.</p> Contact</p>
            </li>
            <li>
              <a href="/QuentinRiolsCV.pdf" download="QuentinRiolsCV.pdf" className="resumeButton">
                Resume
              </a>
            </li>
          </ul>
        )}
        <div className="nightModeContainer"></div>
      </nav>
    </div>
  );
}

export default Navbar;
