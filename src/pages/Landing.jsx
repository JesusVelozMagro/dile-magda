import './Landing.css';
import entrevistaVideo from '../assets/Entrevista_Magda_mute.mp4';
import {useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Magda from '../assets/Magda_landing.png';
import Amarillo from '../assets/Circulo_amarillo.png'
import Rosa from '../assets/Circulo_rosa.png'
import Verde from '../assets/Circulo_verde.png'

function Landing() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hola! Me llamo Magdalena y te invito a conocerme. 😊"
      ],
      typeSpeed: 50,
      // backSpeed: 30,
      // loop: true,
      // backDelay: 2000,
      cursorChar: "▌",
      smartBackspace: false,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='structure'>
      
      
      <div className='video-super-container'>
        <div className='video-container'>
        <video className="video-background" src={entrevistaVideo}  autoPlay loop muted playsInline></video>
        <div className='video-cover'></div>
        </div>
        <div className="typing-container">
          <span className="typing-text" ref={el}></span>
        </div>
        <div className='magda-container'>
          <img className='Magda' src={Magda}></img>
          <img className='circulo-1' src={Amarillo}></img>
          <img className='circulo-2' src={Rosa}></img>
          <img className='circulo-3' src={Verde}></img>

        </div>
      </div>
    </div>
  );
}

export default Landing;