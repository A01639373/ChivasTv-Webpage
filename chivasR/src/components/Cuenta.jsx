import React, { useEffect, useState } from 'react';
import '../styles/Cuenta.css';

const Cuenta = () => {
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState('Ninguno');
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // 🔄 Obtener datos del usuario desde el backend
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(err => {
        console.error("❌ Error al obtener perfil de usuario:", err);
        setUser({ email: localStorage.getItem("user") || "mock@email.com" });
      });
  }, []);

  const handleSelectPlan = (name) => {
    setSelectedPlan(name);
    setShowModal(true);
  };

  return (
    <div className="cuenta-grid">
      <div className="cuenta-left gratis">
        <h2>Mi Cuenta</h2>
        <p><strong>Nombre:</strong> {user?.nombre || "Cargando..."}</p>
        <p><strong>Género:</strong> {user?.genero || "Cargando..."}</p>
        <p><strong>Fecha de nacimiento:</strong> {user?.fechaNacimiento || "Cargando..."}</p>
        <p><strong>Domicilio:</strong> {user?.domicilio || "Cargando..."}</p>
        <p><strong>Correo:</strong> {user?.email || "Cargando..."}</p>
        <p><strong>Estado:</strong> Cuenta Gratuita</p>
        <p><strong>Plan:</strong> {plan}</p>
      </div>

      <div className="cuenta-right">
        <h2>Elige tu plan</h2>
        <div className="planes-container">
          <div className="plan-box" onClick={() => handleSelectPlan('Anual MX$399')}>
            <h4>SUSCRIPCIÓN ANUAL</h4>
            <p className="price">MX$399.00</p>
            <p className="duration">12 meses</p>
          </div>
          <div className="plan-box" onClick={() => handleSelectPlan('Semestral MX$199')}>
            <h4>SEMESTRAL</h4>
            <p className="price">MX$199.00</p>
            <p className="duration">6 meses</p>
          </div>
          <div className="plan-box" onClick={() => handleSelectPlan('Mensual MX$39')}>
            <h4>7 DÍAS PRUEBA - MENSUAL</h4>
            <p className="price">MX$39.00</p>
            <p className="duration">1 mes</p>
          </div>
          <div className="plan-box" onClick={() => handleSelectPlan('Cupón')}>
            <h4>CANJEAR CUPÓN</h4>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Pasarela de Pago</h3>
            <p>Seleccionaste el plan: <strong>{selectedPlan}</strong></p>
            <p>⚠️ Esta es una simulación visual. Aquí iría la integración con Stripe o PayPal.</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cuenta;
