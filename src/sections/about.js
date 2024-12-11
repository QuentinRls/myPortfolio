import React from 'react';
import '../style/about.css';
import AboutTextSection from "../ressources/aboutRessources"
import picture from "../image/aboutPicture.png"

const About = () => {
  return (
    <section id='about' className="aboutContent">
      <div className='boxSize'>
        <h1 className='textProfil'>
          <span style={{ color: 'aquamarine' }}>I.</span> About me
        </h1>
        <div className='aboutContainer'>
          <AboutTextSection />
          <div className='aboutPhotoContainer'>
            <img src={picture} className='aboutPhoto' alt="About" />
            <div className='aboutPhotoCadre'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
