import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import signIn from '../assets/signIn.png';
import signOut from '../assets/signOut.png';
import perfil from '../assets/profile.png';

const Header = ({ showSearch, setShowSearch }) => {
  const [showSections, setShowSections] = useState(false);
  const [showRightMenu, setShowRightMenu] = useState(false);
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
    setShowRightMenu(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setShowRightMenu(!showRightMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.header-right')) setShowRightMenu(false);
      if (!event.target.closest('.dropdown')) setShowSections(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
        <NavLink to="/" className="logo">CHIVASTV</NavLink>
      </div>

      <nav className="nav-menu">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/de-estreno"
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          De Estreno
        </NavLink>

        <div className="nav-item dropdown" onClick={() => setShowSections(!showSections)}>
          Secciones ▾
          {showSections && (
            <div className="dropdown-menu">
              {sectionLinks.map((section, idx) => (
                <NavLink
                  key={idx}
                  to={formatRoute(section)}
                  className="dropdown-item"
                  onClick={() => setShowSections(false)}
                >
                  {section}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink
          to="/liveTV"
          className={({ isActive }) => `nav-item live ${isActive ? 'active' : ''}`}
        >
          Live TV
        </NavLink>

        <span className="icon" onClick={() => setShowSearch(!showSearch)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </nav>

      <div className="header-right">
        {isLoggedIn && user && (
          <span className="btn-account">
            Hola, {user.split('@')[0]}
          </span>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/login" className="btn-login">Iniciar sesión</Link>
            <Link to="/register" className="btn-signup">Regístrate</Link>
          </>
        )}

        <div className="user-menu">
          <img 
            src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" 
            className="user-pic" 
            onClick={toggleMenu}
            alt="User Avatar"
          />

          <div className={`right-menu-wrap ${showRightMenu ? 'open-menu' : ''}`} id="rightMenu">
            <div className="right-menu">
              {!isLoggedIn && (
                <div className="menu-info">
                  <Link to="/login" className="menu-links" onClick={() => setShowRightMenu(false)}>
                    <img src={signIn} className="icon-menu" alt="Sign In" />
                    <p>Ingresa</p>
                    <span>▶</span>
                  </Link>
                </div>
              )}
              {isLoggedIn && (
                <>
                  <div className="menu-info">
                    <Link to="/cuenta" className="menu-links" onClick={() => setShowRightMenu(false)}>
                      <img src={perfil} className="icon-menu" alt="Profile" />
                      <p>Mi Cuenta</p>
                      <span>▶</span>
                    </Link>
                  </div>
                  <div className="menu-info">
                    <button className="menu-links" onClick={handleLogout} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>
                      <img src={signOut} className="icon-menu" alt="Logout" />
                      <p>Cerrar Sesión</p>
                      <span>▶</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
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
