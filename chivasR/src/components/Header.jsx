import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="left">
      <h1 className="logo">CHIVASTV</h1>
    </div>
    <div className="right">
      <div className="social-icons">
        {['f', 't', 'y', 'G+', '0'].map((icon, idx) => (
          <div key={idx} className="icon">{icon}</div>
        ))}
      </div>
      <nav className="menu">
        {['SANTUARIO ROJIBLANCO', '🔍', 'REGÍSTRATE', 'INICIAR SESIÓN'].map((item, i) => (
          <span key={i} className="menu-item">{item}</span>
        ))}
      </nav>
    </div>
  </header>
);

export default Header; 