import React, { useState, useEffect } from 'react';
import boxShadowSetter from "../ressources/projectRessources";
import LegalRAG from "../components/LegalRAG";
import AgentAudio from "../components/Agent";
import Form from "../components/Form";
import "../style/project.css";

const Card = ({ shadowStyles, content, onClick, isExpanded, isHidden, onReturn }) => {
  return (
    <div
      className={`card ${isExpanded ? 'expanded' : ''} ${isHidden ? 'hidden' : ''}`}
      style={isExpanded ? { boxShadow: shadowStyles, width: '100%', maxWidth: '80vw' } : { boxShadow: shadowStyles }}
    >
      {isExpanded && (
        <button className="goBack-btn" onClick={onReturn}>
          Retour
        </button>
      )}
      {content(isExpanded)}
    </div>
  );
};

const Cards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedCard, setExpandedCard] = useState(null);
  const [cvResult, setCVResult] = useState(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleReturn = () => {
    if (cvResult) setCVResult(null);
    setExpandedCard(null);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const initialShadows = boxShadowSetter(windowWidth);

  const cardContents = [
    (isExpanded) => (
      isExpanded ? (
        <LegalRAG />
      ) : (
        <div className="card-intro">
          <h2>Assistant Juridique</h2>
          <p>Posez vos questions juridiques et obtenez des réponses précises.</p>
          <button onClick={() => setExpandedCard(0)}>Utiliser</button>
        </div>
      )
    ),
    (isExpanded) => (
      isExpanded ? (
        <AgentAudio
          onResult={(audio) => console.log("Audio généré :", audio)}
          onClear={handleReturn}
        />
      ) : (
        <div className="card-intro">
          <h2>Assistant Audio</h2>
          <p>Posez vos questions et recevez des réponses audio personnalisées.</p>
          <button onClick={() => setExpandedCard(1)}>Utiliser</button>
        </div>
      )
    ),
    (isExpanded) => (
      isExpanded ? (
        <Form onResult={(data) => setCVResult(data)} onClear={handleReturn} />
      ) : (
        <div className="card-intro">
          <h2>Analyseur de CV</h2>
          <p>Analysez votre CV et obtenez des conseils personnalisés.</p>
          <button onClick={() => setExpandedCard(2)}>Utiliser</button>
        </div>
      )
    )
  ];

  return (
    <div className='cards'>
      {cardContents.map((content, index) => (
        <Card
          key={index}
          shadowStyles={initialShadows[index]}
          content={content}
          onClick={() => setExpandedCard(index)}
          onReturn={handleReturn}
          isExpanded={expandedCard === index}
          isHidden={expandedCard !== null && expandedCard !== index}
        />
      ))}
    </div>
  );
};

const Project = () => {
  return (
    <section id='project' className="libContent">
      <h1 className='textLib'>
        <span style={{ color: 'aquamarine' }}>III. </span>Applications
      </h1>
      <Cards />
    </section>
  );
};

export default Project;
