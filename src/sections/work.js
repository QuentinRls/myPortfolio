import React, { useState, useEffect } from 'react';
import { workInfos, LottieAnimation } from '../ressources/workRessource';
import animationData from "../image/reactAnimated.json";
import "../style/work.css";

const createTextLink = (url, className, text) => (
  <a href={url} className={className} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const WorkInfoFace = ({ faceClass, children }) => {
  const faceClasses = {
    "show-front": 'cube__face--front',
    "show-right": 'cube__face--right',
    "show-bottom": 'cube__face--bottom',
    "show-left": 'cube__face--left',
  };

  return <div className={`cube__face ${faceClasses[faceClass] || 'cube__face--front'}`}>{children}</div>;
};

const renderWorkInfo = (info) => {
  if (!info) return null;
  return (
    <>
      <h2 className='WorkInfoContentTitle'>{info.position} @{createTextLink(info.companyLink, 'textLinkUnderline', info.companyName)}</h2>
      <p className="experience-date">{info.dateRange}</p>
      <ul className="experience-list">
        {info.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
};

const WorkInfoContent = () => (
  <div className="MainWorkInfoContent cube cube--rotate">
    {workInfos.map((info, index) => (
      <WorkInfoFace key={index} faceClass={`show-${['front', 'right', 'bottom', 'left'][index]}`}>
        {renderWorkInfo(info)}
      </WorkInfoFace>
    ))}
  </div>
);

const WorkInfo = ({ selectedButton }) => {
  const [rotationClass, setRotationClass] = useState('show-front');

  useEffect(() => {
    setRotationClass(['show-front', 'show-right', 'show-bottom', 'show-left'][selectedButton] || 'show-front');
  }, [selectedButton]);

  return (
    <div className={`cube ${rotationClass} cube--rotate`}>
      <WorkInfoContent />
    </div>
  );
};

const WorkList = ({ onSelect }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    onSelect(index);
  };

  const cursorStyle = windowWidth <= 405
    ? { transform: `translateX(calc(${selectedButton} * ${(windowWidth * 0.92) * 0.24997}px))` }
    : windowWidth <= 1080
      ? { transform: `translateX(calc(${selectedButton} * 93.45px))` }
      : { transform: `translateY(calc(${selectedButton} * 42px))` };

  return (
    <div role="tablist" aria-label="Job tabs" className="workList">
      <div className='centerCursor'>
        {workInfos.map((info, index) => (
          <button
            key={index}
            id={`tab-${index}`}
            role="tab"
            tabIndex={selectedButton === index ? 0 : -1}
            aria-selected={selectedButton === index}
            aria-controls={`panel-${index}`}
            className={selectedButton === index ? 'selected' : 'unselected'}
            onClick={() => handleButtonClick(index)}
          >
            {info.companyName}
          </button>
        ))}
        <div className="cursorList" style={cursorStyle}></div>
      </div>
    </div>
  );
};

const Work = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <section id='Work' className="workContent">
      <h1 className='titleWork'>
        <span style={{ color: 'aquamarine' }}>II. </span>Where I've worked
      </h1>
      <div className='workListContent'>
        <WorkList onSelect={setSelectedButton} />
        <WorkInfo selectedButton={selectedButton} />
        <LottieAnimation animationData={animationData} />
      </div>
    </section>
  );
};

export default Work;