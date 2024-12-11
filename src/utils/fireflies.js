import React, { useEffect, useState } from 'react';
import './fireflies.scss'; // Importer le fichier SCSS

const Fireflies = () => {
    const [fireflies, setFireflies] = useState([]);

    const generateFireflies = () => {
      setTimeout(() => {
          const viewportWidth = document.documentElement.clientWidth;
          const viewportHeight = document.documentElement.clientHeight;
          const fireflySize = 10; // Taille approximative de la luciole
  
          const newFireflies = [];
          const quantity = 40;
  
          for (let i = 0; i < quantity; i++) {
              let left, top;
  
              do {
                  left = Math.random() * (viewportHeight - fireflySize);
                  top = Math.random() * (viewportWidth - fireflySize);
              } while (
                  left < 0 || left + fireflySize > viewportWidth || 
                  top < 0 || top + fireflySize > viewportHeight
              );
  
              newFireflies.push({
                  id: i,
                  left: `${left}px`,
                  top: `${top}px`,
              });
          }
  
          setFireflies(newFireflies);
      }, 100); // Donne un délai pour permettre le recalcul des dimensions
  };
  

    useEffect(() => {
        generateFireflies();
        window.addEventListener('resize', generateFireflies); // Recalcule les lucioles lors du redimensionnement
        return () => window.removeEventListener('resize', generateFireflies);
    }, []);

    return (
      <div id="firefly-container">
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
        </div>
    );
};

export default Fireflies;
