import React, { useState, useEffect } from 'react';
import './style/App.css';
import './style/background.scss';
import Navbar from './styling/navbar';
import Home from './sections/home';
import About from './sections/about';
import Project from './sections/project';
import Contact from './sections/contact';
import FixeContact from './styling/fixeContact';
import Work from './sections/work';

function App() {
  const [isFixedContactVisible, setFixedContactVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1080 && scrollPosition > 100) {
        setFixedContactVisible(false);
      } else {
        setFixedContactVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="backgroundColor" id="canvas-club">
        <Navbar />
        {isFixedContactVisible ? <FixeContact noShow={false}/> : <FixeContact noShow={true} />}
      <div className='sections'>
        <Home />
        <About />
        <Work/>
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;

