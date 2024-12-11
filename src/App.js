import React, { useState, useEffect, lazy, Suspense } from 'react';
import './style/App.css';
import Navbar from './styling/navbar';
import FixeContact from './styling/fixeContact';
import useScrollListener from './utils/useScrollListener';
import Fireflies from './utils/fireflies'; // Import du composant Fireflies

// Lazy load sections
const Home = lazy(() => import('./sections/home'));
const About = lazy(() => import('./sections/about'));
const Work = lazy(() => import('./sections/work'));
const Project = lazy(() => import('./sections/project'));
const Contact = lazy(() => import('./sections/contact'));

function App() {
  const [isFixedContactVisible, setFixedContactVisible] = useState(true);
  const scrollData = useScrollListener(); // Utiliser scrollData pour suivre le scroll

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1080 && scrollData.y > 100) {
      setFixedContactVisible(false);
    } else {
      setFixedContactVisible(true);
    }
  }, [scrollData.y]); // Dépendance sur scrollData.y

  return (
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
  );
}

export default App;