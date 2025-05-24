import React from 'react';
import '../styles/MainImage.css';
import placeholder from '../assets/placeholder.webp';

const MainImage = () => (
  <div className="main-image-container">
    <img
      src={placeholder}
      alt="Chivas vs Cruz Azul"
      className="main-image"
    />
    <div className="caption">Chivas vs Cruz Azul</div>
  </div>
);

export default MainImage;