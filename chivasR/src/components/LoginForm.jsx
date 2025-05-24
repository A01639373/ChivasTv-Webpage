import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  return (
    <div className="auth-page login-bg">
      <div className="auth-header">
        <Link to="/" className="back-arrow">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <div className="auth-form-container">
        <h2>Iniciar Sesión</h2>
        <form className="auth-form">
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input id="email" type="email" placeholder="Correo electrónico" required />
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input id="password" type="password" placeholder="Contraseña" required />
          <button type="submit">Ingresar</button>
        </form>
        <div className="form-links">
          <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
          <Link to="#" className="forgot-password">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

