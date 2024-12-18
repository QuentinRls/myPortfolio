import React, { useState, useEffect } from 'react'; 
import boxShadowSetter from "../ressources/projectRessources";
import LegalRAG from "../components/LegalRAG";
import Test from "../components/Agent";
import Form from "../components/Form";
import "../style/project.css";
import legalImage from "../image/JuridiqueIA.webp";
import promptImage from "../image/promptGen.webp";
import cvImage from "../image/CVanalyzer.webp";


const Card = ({ shadowStyles, content, imageSrc, isExpanded, isHidden, onReturn }) => {
  return (
    <div
      className={`card ${isExpanded ? 'expanded' : ''} ${isHidden ? 'hidden' : ''}`}
      style={isExpanded ? { boxShadow: shadowStyles, transition: 'all 0.5s ease-in-out', maxWidth: '80vw' } : { boxShadow: shadowStyles }}
    >
      {isExpanded && (
        <button className="goBack-btn" onClick={onReturn}>
          Retour
        </button>
      )}
      {imageSrc && !isExpanded && <img src={imageSrc} alt="card visual" className="card-image" />}
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
    {
      image: legalImage,
      content: (isExpanded) => (
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
    },
    {
      image: promptImage,
      content: (isExpanded) => (
        isExpanded ? (
          <Test />
        ) : (
          <div className="card-intro">
            <h2>Créateur de prompt</h2>
            <p>Cette application vous permet de générer un prompt via une idée</p>
            <button onClick={() => setExpandedCard(1)}>Utiliser</button>
          </div>
        )
      ),
    },
    {
      image: cvImage,
      content: (isExpanded) => (
        isExpanded ? (
          <Form onResult={(data) => setCVResult(data)} onClear={handleReturn} />
        ) : (
          <div className="card-intro">
            <h2>Analyseur de CV</h2>
            <p>Analysez votre CV et obtenez des conseils personnalisés.</p>
            <button onClick={() => setExpandedCard(2)}>Utiliser</button>
          </div>
        )
      ),
    }
  ];

  return (
    <div className='cards'>
      {cardContents.map((card, index) => (
        <Card
          key={index}
          shadowStyles={initialShadows[index]}
          content={card.content}
          imageSrc={card.image}
          isExpanded={expandedCard === index}
          isHidden={expandedCard !== null && expandedCard !== index}
          onReturn={() => setExpandedCard(null)}
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
