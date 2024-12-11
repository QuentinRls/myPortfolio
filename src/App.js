import React, { useState, useEffect, lazy, Suspense } from 'react';
import './style/App.css';
import Navbar from './styling/navbar';
import FixeContact from './styling/fixeContact';
import useScrollListener from './utils/useScrollListener';
import Fireflies from './utils/fireflies';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter

// Lazy load sections
const Home = lazy(() => import('./sections/home'));
const About = lazy(() => import('./sections/about'));
const Work = lazy(() => import('./sections/work'));
const Project = lazy(() => import('./sections/project'));
const Contact = lazy(() => import('./sections/contact'));

function App() {
  const [isFixedContactVisible, setFixedContactVisible] = useState(true);
  const scrollData = useScrollListener();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1080 && scrollData.y > 100) {
      setFixedContactVisible(false);
    } else {
      setFixedContactVisible(true);
    }
  }, [scrollData.y]);

  return (
    <Router>
      <div className="backgroundColor" id="canvas-club">
        <Fireflies />
        <Navbar />
        {isFixedContactVisible ? <FixeContact noShow={false} /> : <FixeContact noShow={true} />}
        <div className="sections">
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
            <About />
            <Work />
            <Project />
            <Contact />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
