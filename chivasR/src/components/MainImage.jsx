import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/MainImage.css';

import slide1 from '../assets/Chivas_Partido.png'
import slide2 from "../assets/Chivas_raices.png"
import slide3 from "../assets/Chivas_fem.png"
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

function MainImage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "CHIVAS VS CRUZ AZUL",
      subtitle: "Revive los mejores momentos del clásico",
      img: slide1,
      button: "Ver ahora",
      position: 'center 40%',
      link: "/clsico-de-mxico"
    },
    {
      title: "RAICES",
      subtitle: "Conoce la travesía detras de los jugadores y cuerpo tecnico de Chivas",
      img: slide2,
      button: "Explorar",
      position: 'center 20%',
      link: "/races"
    },
    {
      title: "EQUIPO CHIVAS FEMENIL",
      subtitle: "Lo mejor de la liga femenil en exclusiva",
      img: slide3,
      button: "Explorar",
      position: 'center 30%',
      link: "/chivas-femenil"
    }
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentItem = slides[currentSlide];

  return (
    <section
      className="gallery"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentItem.img})`,
        backgroundPosition: currentItem.position || 'center center'
      }}
    >
      <div className="overlay">
        <h1>{currentItem.title}</h1>
        <p>{currentItem.subtitle}</p>
        <Link to={currentItem.link} className="cta-button">
        {currentItem.button}
        </Link>
      </div>

      <div className="controls">
        <span className="arrow left" onClick={prevSlide}>
          <img src={leftArrow} className='arrowImg'></img>
        </span>
        <span className="arrow right" onClick={nextSlide}>
          <img src={rightArrow} className='arrowImg'></img>
        </span>
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default MainImage;