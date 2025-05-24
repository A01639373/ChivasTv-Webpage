// Header.jsx completo con mejoras PRO
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = ({ showSearch, setShowSearch }) => {
  const [showSections, setShowSections] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const homeLinks = ["Destacados", "De Estreno"];

  const sectionLinks = [
    "Clásico De México", "Santuario Rojiblanco", "Raíces",
    "Detrás Del Rebaño", "Resumen", "Repeticiones", "Resiliencia", "Chivas Femenil",
    "Chivas Varonil", "Sub's", "Entrevistas", "Día A Día Rojiblanco", "Highlights On Field",
    "Leyendas", "Historia Sagrada", "Nación Chivas", "Operación Valorant", "Esports",
    "El Podcast De Las Chivas", "El Recuerdo"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSections(false);
      }
    };
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setShowSearch(false);
        setShowSections(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">CHIVASTV</div>
      </div>

      <nav className="nav-menu">
        <span className="nav-item">Home</span>
        {homeLinks.map((link, index) => (
          <span key={index} className="nav-item">{link}</span>
        ))}

        <div
          className="nav-item dropdown"
          onClick={() => setShowSections(!showSections)}
          ref={dropdownRef}
        >
          Secciones ▾
          {showSections && (
            <div className="dropdown-menu">
              {sectionLinks.map((section, idx) => (
                <div key={idx} className="dropdown-item">{section}</div>
              ))}
            </div>
          )}
        </div>

        <span className="nav-item live">Live TV </span>
      </nav>

      <div className="header-right">
        <span className="icon" onClick={() => setShowSearch(!showSearch)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        
        <Link to="/login" className="btn-login">Iniciar sesión</Link>
        <Link to="/register" className="btn-signup">Regístrate</Link>
      </div>


      {showSearch && (
        <div className="search-full">
          <input
            type="text"
            placeholder="Buscar Partidos, Secciones o Momentos Chivas"
            ref={searchInputRef}
            autoFocus
          />
        </div>
      )}
    </header>
  );
};

export default Header;
