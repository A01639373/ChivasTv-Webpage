import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {
  return (
    <div className="auth-page login-bg">
      <div className="auth-header">
        <Link to="/" className="back-arrow">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <div className="auth-form-container">
        <h2>Crear Cuenta</h2>
        <form className="auth-form">
          <label htmlFor="name" className="sr-only">Nombre completo</label>
          <input id="name" type="text" placeholder="Nombre completo" required />

          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input id="email" type="email" placeholder="Correo electrónico" required />

          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input id="password" type="password" placeholder="Contraseña" required />

          <button type="submit">Registrarse</button>
        </form>
        <div className="form-links">
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
