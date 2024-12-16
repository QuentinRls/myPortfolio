import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import "../style/work.css"


export const workInfos = [
  {
    companyName: 'Société Générale',
    companyLink: 'https://particuliers.sg.fr/',
    position: 'Head developer',
    dateRange: '2017 – 2018',
    tasks: [
      'Development of an incident management application - J2EE',
      'Database Management - MySQL',
      'Creation of the interface and deployment of the application within the company'
    ]
  },
  {
    companyName: 'Event Maker',
    companyLink: 'https://www.eventmaker.com/en/',
    position: 'Developer',
    dateRange: 'Jun 2018 – Dec 2019',
    tasks: [
      'Improvement of an event management platform - ReactJS',
      'Implementation and creation of new components for the platform - ReactJS',
      'Development of new functionalities and improvements - ReactJS / TypeScript'
    ]
  },
  {
    companyName: 'Infopro Digital',
    companyLink: 'https://www.infopro-digital.com/',
    position: 'Software Architect & Developer',
    dateRange: 'Mar 2019 – May 2021',
    tasks: [
      'Front-End Implementation - JavaScript / HTML / CSS',
      'Ensuring GDPR Compliance - JavaScript',
      'Ensured scalability and performance of web applications',
      'Modification of Personal Data Usage - .Net'
    ]
  },
  {
    companyName: 'Extia',
    companyLink: 'https://www.extia-group.com/',
    position: 'Consultant developer full stack',
    dateRange: 'Jan 2021 – Apr 2022',
    tasks: [
      'Database Administration - MySQL',
      'Back-End Management - .Net',
      'Front-End Design and Implementation - ReactJS / SCSS',
      'Development of REST APIs for Back-End Integration - JavaScript'
    ]
  }
];


export const LottieAnimation = ({ animationData }) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    animationInstance.current.setSpeed(0.5);

    const handleEnterFrame = () => {
      if (animationInstance.current.playDirection === 1) {
        if (animationInstance.current.currentFrame >= animationInstance.current.totalFrames - 32) {
          animationInstance.current.setDirection(-1);
        }
      } else {
        if (animationInstance.current.currentFrame <= 53) {
          animationInstance.current.setDirection(1);
        }
      }
    };

    animationInstance.current.addEventListener('enterFrame', handleEnterFrame);
    return () => {
      animationInstance.current.removeEventListener('enterFrame', handleEnterFrame);
      animationInstance.current.destroy();
    };
  }, [animationData]);

  return <div ref={animationContainer} className='reactAnim'></div>;
};