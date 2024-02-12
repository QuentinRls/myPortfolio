import React from 'react';
import '../style/background.scss'; // Chemin relatif au fichier actuel

const Background = () => {
  const generateCElements = () => {
    const cElements = [];

    for (let i = 0; i < 300; i++) {
      cElements.push(<div key={i} className="SphereParticles"></div>);
    } 

    return cElements;
  };

  return (
    <div className="wrap">
      {generateCElements()}
    </div>
  );
};

export default Background;
