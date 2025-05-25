import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = ({ showSearch, setShowSearch }) => {
  const [showSections, setShowSections] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('user');
    setIsLoggedIn(!!token);
    setUser(userEmail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  const homeLinks = [
    "Destacados", "De Estreno"
  ];

  const sectionLinks = [
    "Clásico De México", "Santuario Rojiblanco", "Raíces",
    "Detrás Del Rebaño", "Resumen", "Repeticiones", "Resiliencia", "Chivas Femenil",
    "Chivas Varonil", "Sub's", "Entrevistas", "Día A Día Rojiblanco", "Highlights On Field",
    "Leyendas", "Historia Sagrada", "Nación Chivas", "Operación Valorant", "Esports",
    "El Podcast De Las Chivas", "El Recuerdo"
  ];

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

        <div className="nav-item dropdown" onClick={() => setShowSections(!showSections)}>
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
        {isLoggedIn && user && (
          <span className="user-greeting">Hola, {user.split('@')[0]}</span>
        )}
        <span className="icon" onClick={() => setShowSearch(!showSearch)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="btn-login">Iniciar sesión</Link>
            <Link to="/register" className="btn-signup">Regístrate</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="btn-login">Cerrar sesión</button>
        )}
      </div>

      {showSearch && (
        <div className="search-full">
          <input type="text" placeholder="Buscar Partidos, Secciones o Momentos Chivas" />
        </div>
      )}
    </header>
  );
};

export default Header;
