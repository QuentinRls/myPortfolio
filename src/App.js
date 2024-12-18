import React, { useState, useEffect, lazy, Suspense } from 'react';
import './style/App.css';
import Navbar from './styling/navbar';
import FixeContact from './styling/fixeContact';
import useScrollListener from './utils/useScrollListener';
import Fireflies from './utils/fireflies';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter
import ScreenLoader from './styling/screenLoader';

// Lazy load sections
const Home = lazy(() => import('./sections/home'));
const About = lazy(() => import('./sections/about'));
const Work = lazy(() => import('./sections/work'));
const Project = lazy(() => import('./sections/project'));
const Contact = lazy(() => import('./sections/contact'));

function App() {
  const [isFixedContactVisible, setFixedContactVisible] = useState(true);
  const scrollData = useScrollListener();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Simule le chargement des données
      const timer = setTimeout(() => setIsLoading(false), 2000);

      // Gestion de la visibilité du contact fixe
      const handleResizeAndScroll = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth <= 1080 && scrollData.y > 100) {
              setFixedContactVisible(false);
          } else {
              setFixedContactVisible(true);
          }
      };

      // Écoute les événements de scroll et de redimensionnement
      window.addEventListener('resize', handleResizeAndScroll);
      handleResizeAndScroll();

      return () => {
          clearTimeout(timer); // Nettoyage du timer
          window.removeEventListener('resize', handleResizeAndScroll);
      };
  }, [scrollData.y]);

  if (isLoading) {
      return <ScreenLoader />;
  }

  return (
    <Router>
       <div className={`screenLoaderContainer ${isLoading ? '' : 'hidden'}`}>
                <ScreenLoader />
            </div>
            {!isLoading && (
      <div className="backgroundColor" id="canvas-club">
        <Fireflies />
        <Navbar />
        {isFixedContactVisible ? <FixeContact noShow={false} /> : <FixeContact noShow={true} />}
        <div className="sections">
          <Suspense fallback={<ScreenLoader />}>
            <Home />
            <About />
            <Work />
            <Project />
            <Contact />
          </Suspense>
        </div>
      </div>
            )}
    </Router>
  );
}

export default App;
