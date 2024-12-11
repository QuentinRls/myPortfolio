import React, { useEffect, useState } from 'react';
import './fireflies.scss'; // Importer le fichier SCSS


const Fireflies = () => {
    const [fireflies, setFireflies] = useState([]);
  
    const generateFireflies = () => {
      const quantity = 40;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
    
      const newFireflies = [];
      for (let i = 0; i < quantity; i++) {
        newFireflies.push({
          id: i,
          left: Math.random() * viewportWidth + 'px', // Assure que les lucioles restent dans la largeur de l'écran
          top: Math.random() * viewportHeight + 'px', // Assure qu'elles restent dans la hauteur
        });
      }
      setFireflies(newFireflies);
    };
  
    useEffect(() => {
      generateFireflies();
      window.addEventListener('resize', generateFireflies); // Recalcule les lucioles lors du redimensionnement
      return () => window.removeEventListener('resize', generateFireflies);
    }, []);
  
    return (
      <>
        {fireflies.map((firefly) => (
          <div
            key={firefly.id}
            className="firefly"
            style={{
              left: firefly.left,
              top: firefly.top,
            }}
          ></div>
        ))}
      </>
    );
  };
  
  export default Fireflies;
