import React, { useState, useEffect } from 'react';
import '../styles/MainImage.css';

const featuredItems = [
  {
    title: "Chivas vs Cruz Azul",
    subtitle: "Revive los mejores momentos del clásico",
    img: "/images/chivas-cruzazul.jpg",
    button: "Ver ahora",
    position: 'center 40%'
  },
  {
    title: "RAICES",
    subtitle: "Loremp Impsum Lorem Impsum",
    img: "/images/rally.jpg",
    button: "Más contenido",
    position: 'center 20%'
  },
  {
    title: "Chivas Femenil",
    subtitle: "Lo mejor de la liga femenil en exclusiva",
    img: "/images/femenil.jpg",
    button: "Explorar",
    position: 'center 30%'
  }
];

const MainImage = ({ showSearch }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + featuredItems.length) % featuredItems.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const item = featuredItems[current];

  return (
    <section
      className={`main-image ${showSearch ? 'with-search' : ''}`}
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundPosition: item.position || 'center center'
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <p>{item.subtitle}</p>
        <button>{item.button}</button>
      </div>

      <div className="controls">
        <span className="arrow left" onClick={prevSlide}>←</span>
        <span className="arrow right" onClick={nextSlide}>→</span>
      </div>

      <div className="dots">
        {featuredItems.map((_, i) => (
          <span key={i} className={`dot ${i === current ? 'active' : ''}`}></span>
        ))}
      </div>
    </section>
  );
};

export default MainImage;
