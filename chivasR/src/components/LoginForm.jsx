import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/user/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      });

      const data = await res.json();
      console.log("🛰️ Login status:", res.status);
      console.log("🔑 Respuesta:", data);

      if (res.ok && data.access_token) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", email);
        navigate('/');
      } else {
        setErrors({ password: "Correo o contraseña incorrectos" });
      }

    } catch (err) {
      console.error("Error de red:", err);

      // MOCK TEMPORAL (solo para pruebas)
      alert("⚠️ Login simulado (modo desarrollo)");
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("user", email);
      navigate('/');
    }
  };

  return (
    <div className="auth-page login-bg">
      <div className="auth-form-container">
        <h2>Iniciar Sesión</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
          {errors.general && <span className="error-text">{errors.general}</span>}

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
