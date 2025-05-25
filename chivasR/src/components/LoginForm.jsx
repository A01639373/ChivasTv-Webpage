import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = 'Correo inválido';
    if (password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simular login guardando token
      localStorage.setItem('token', 'chivas-token');
      localStorage.setItem('user', email);
      navigate('/');
    }
  };

  return (
    <div className="auth-page login-bg">
      <div className="auth-header">
        <Link to="/" className="back-arrow">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <div className="auth-form-container">
        <h2>Iniciar Sesión</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}

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
