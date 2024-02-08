import React, { useState, useEffect } from 'react';
import boxShadowSetter from "../ressources/projectRessources"
import "../style/project.css";

const Card = ({ shadowStyles, onClick }) => {
  return (
    <div
      className="card"
      style={{ boxShadow: shadowStyles }}
      onClick={onClick}
    >
    </div>
  );
};

const Cards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const initialShadows = boxShadowSetter(windowWidth)

  const [shadows, setShadows] = useState(initialShadows);

  const handleShadowChange = (index) => {
    const updatedShadows = shadows.map((shadow, i) => {
      if (i === index) {
        let layers = shadow.split(', ');
        if (layers.length > 1) {
          layers.pop();
          return layers.join(', ');
        } else {
          return initialShadows[i];
        }
      }
      return shadow;
    });
    setShadows(updatedShadows);
  };

  return (
    <div className='cards'>
      {shadows.map((shadow, index) => (
        <Card
          key={index}
          shadowStyles={shadow}
          onClick={() => handleShadowChange(index)}
        />
      ))}
    </div>
  );
};


const Project = () => {

  return (
    <section id='project' className="libContent">
      <h1 className='textLib'>
        <span style={{ color: 'aquamarine' }}>III. </span>My personnal websites
      </h1>
      <Cards />
    </section>
  );
};

export default Project;
