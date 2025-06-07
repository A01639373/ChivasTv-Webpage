import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [postal, setPostal] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [genero, setGenero] = useState('');
  const [ocupacion, setOcupacion] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (name.trim().length < 2) newErrors.name = 'Ingresa tu nombre';
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
        <h2>Crear Cuenta</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="sr-only">Nombre completo</label>
          <input
            id="name"
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

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
