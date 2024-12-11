import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import "../style/work.css"


export const workInfos = [
  {
    companyName: 'Société Générale',
    companyLink: 'https://particuliers.sg.fr/',
    position: 'Engineer',
    dateRange: 'May 2018 – Present',
    tasks: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
    ]
  },
  {
    companyName: 'Extia',
    companyLink: 'https://www.extia-group.com/',
    position: 'Consultant',
    dateRange: 'Jan 2015 – Apr 2018',
    tasks: [
      'Provided strategic consulting services to optimize business processes',
      'Collaborated with clients to deliver technology-driven solutions',
      'Led a team of developers in agile software development practices'
    ]
  },
  {
    companyName: 'Event Maker',
    companyLink: 'https://www.eventmaker.com/en/',
    position: 'Developer',
    dateRange: 'Jun 2012 – Dec 2014',
    tasks: [
      'Developed and maintained event management software',
      'Designed user-friendly interfaces in collaboration with UX designers',
      'Implemented new features and managed continuous integration and deployment'
    ]
  },
  {
    companyName: 'Infopro Digital',
    companyLink: 'https://www.infopro-digital.com/',
    position: 'Software Architect',
    dateRange: 'Mar 2010 – May 2012',
    tasks: [
      'Architected robust software solutions for various digital products',
      'Conducted code reviews and mentored junior developers',
      'Ensured scalability and performance of web applications'
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