import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Header = ({ showSearch, setShowSearch }) => {
  const [showSections, setShowSections] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('user');
    setIsLoggedIn(!!token);
    setUser(userEmail);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  const homeLinks = [
    { name: "De Estreno", path: "/de-estreno" }
  ];

  const sectionLinks = [
    "Clásico De México", "Santuario Rojiblanco", "Raíces",
    "Detrás Del Rebaño", "Resumen", "Repeticiones", "Resiliencia", "Chivas Femenil",
    "Chivas Varonil", "Sub's", "Entrevistas", "Día A Día Rojiblanco", "Highlights On Field",
    "Leyendas", "Historia Sagrada", "Nación Chivas", "Operación Valorant", "Esports",
    "El Podcast De Las Chivas", "El Recuerdo"
  ];

  const formatRoute = (name) => {
    return '/' + name
      .toLowerCase()
      .replace(/'/g, '')
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-');
  };

  return (
    <header className="header">
      <div className="header-left">
        <a className="logo" href="/" >CHIVASTV</a>
      </div>

      <nav className="nav-menu">
        <Link to="/" className="nav-item">Home</Link>
        {homeLinks.map((link, i) => (
          <Link key={i} to={link.path} className="nav-item">
            {link.name}
          </Link>
        ))}
        <div className="nav-item dropdown" onClick={() => setShowSections(!showSections)}>
          Secciones ▾
          {showSections && (
            <div className="dropdown-menu">
              {sectionLinks.map((section, idx) => (
                <Link
                  key={idx}
                  to={formatRoute(section)}
                  className="dropdown-item"
                  onClick={() => setShowSections(false)}
                >
                  {section}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/LiveTV" className="nav-item live">Live TV</Link>
      </nav>

      <div className="header-right">
        {isLoggedIn && user && (
          <div className="account-dropdown">
            <span
              className="btn-account"
              onClick={() => setShowSections(false)}
            >
              Hola, {user.split('@')[0]} ▾
            </span>
            <div className="account-menu">
              <Link to="/cuenta" className="dropdown-item">Mi cuenta</Link>
            </div>
          </div>
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
