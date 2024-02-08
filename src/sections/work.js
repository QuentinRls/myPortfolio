import React, { useState, useEffect } from 'react';
import { workInfos } from '../ressources/workRessource';
import animationData from "../image/reactAnimated.json";
import { LottieAnimation } from '../ressources/workRessource';
import "../style/work.css";

const createTextLink = (url, className, text) => (
    <a href={url} className={className} target="_blank" rel="noopener noreferrer">
        {text}
    </a>
);

const WorkInfoFace = ({ faceClass, children }) => {
    let className;

    switch (faceClass) {
        case "show-front":
            className = 'cube__face--front';
            break;
        case "show-right":
            className = 'cube__face--right';
            break;
        case "show-bottom":
            className = 'cube__face--bottom';
            break;
        case "show-left":
            className = 'cube__face--left';
            break;
        default:
            className = 'cube__face--front';
    }
    return <div className={`cube__face ${className}`}>{children}</div>;
};

const WorkInfoContent = () => {
    return (
        <div className="MainWorkInfoContent cube cube--rotate">
            <WorkInfoFace faceClass="show-front">
                {renderWorkInfo(workInfos[0])}
            </WorkInfoFace>
            <WorkInfoFace faceClass="show-right">
                {renderWorkInfo(workInfos[1])}
            </WorkInfoFace>
            <WorkInfoFace faceClass="show-bottom">
                {renderWorkInfo(workInfos[2])}
            </WorkInfoFace>
            <WorkInfoFace faceClass="show-left">
                {renderWorkInfo(workInfos[3])}
            </WorkInfoFace>
        </div>
    );
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

const WorkInfo = ({ selectedButton }) => {
    const [rotationClass, setRotationClass] = useState('show-front');

    useEffect(() => {
        setRotationClass(determineRotationClass(selectedButton));
    }, [selectedButton]);

    const determineRotationClass = (buttonIndex) => {
        switch (buttonIndex) {
            case 0:
                return 'show-front';
            case 1:
                return 'show-right';
            case 2:
                return 'show-bottom';
            case 3:
                return 'show-left';
            default:
                return 'show-front';
        }
    };

    return (
        <div className={`cube ${rotationClass} cube--rotate`}>
            <WorkInfoContent rotationClass={rotationClass} />
        </div>
    );
};

const WorkList = ({ onSelect }) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleButtonClick = (index) => {
        setSelectedButton(index);
        onSelect(index);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cursorStyle = windowWidth <= 405
        ? { transform: `translateX(calc(${selectedButton} * ${(windowWidth * 0.92) * 0.24997}px))` } : windowWidth <= 1080 ?
            { transform: `translateX(calc(${selectedButton} * 93.45px))` } : { transform: `translateY(calc(${selectedButton} * 42px))` };

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

    const handleSelect = (index) => {
        setSelectedButton(index);
    };

    return (
        <section id='Work' className="workContent">
            <h1 className='titleWork'>
                <span style={{ color: 'aquamarine' }}>II. </span>Where I've worked
            </h1>
            <div className='workListContent'>
                <WorkList onSelect={handleSelect} />
                <WorkInfo selectedButton={selectedButton} />
                <LottieAnimation animationData={animationData} />
            </div>
        </section>
    );
};

export default Work;
