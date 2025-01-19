// Home.js
import React, { useState, useEffect } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import '../style/home.css';

const PresentationText = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
    }, 1500);

    setTimeout(() => {
      setShowSecond(true);
    }, 3200);
  }, []);

  return (
    <h1 className="textProfil">
      <span>&gt; Hi,</span>
      <br />
      <span>&gt; </span>
      {showFirst && <span>I'm Quentin,</span>}
      <br />
      <span>&gt; </span>
      {showSecond && (
        <>
          <span>A React.js developer</span>
          <br />
          <span>A Rugbyman</span>
          <br />
          <span>A hard worker!</span>
        </>
      )}
    </h1>
  );
};

const SectionsButton = () => {
  return (
    <div className='buttonGroup'>
      <EffectButton section="about" timing={3000} text='About' direction={"left"} />
      <EffectButton section="Work" timing={2000} text='Experiences' direction={"left"} />
      <EffectButton section="project" timing={1000} text='Apps' direction={"left"} />
    </div>
  )
}

const EffectButton = ({ text, timing, section, direction }) => {
  const [startAnimation, setStartAnimation] = useState(true);

  const handleClick = () => {
    const element = document.getElementById(section);

    setStartAnimation((prev) => !prev);
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
    setTimeout(() => {
      setStartAnimation((prev) => !prev);
    }, 1950);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartAnimation(false);
    }, timing);
    return () => clearTimeout(delayTimer);
  }, [timing]);

  return (
    <div className={startAnimation ? "buttonContainerNoShow" : "buttonContainerShow"}>
      <ParticleEffectButton
        className='buttonEffect'
        color="hsla(185, 50%, 50%, 1)"
        easing="easeOutSine"
        direction={direction}
        size={1}
        duration={600}
        hidden={startAnimation}
        onClick={handleClick}
      >
        <button
          className="button"
          onClick={() => {
            handleClick();
          }}
        >
          {text}
        </button>
      </ParticleEffectButton>
    </div>
  );
};

const Home = () => {
  return (
    <section className='contentHome'>
      <div className='regroup'>
        <PresentationText />
      </div>
      <SectionsButton />
    </section>
  );
};

export default Home;