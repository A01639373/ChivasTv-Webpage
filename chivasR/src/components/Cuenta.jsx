import React, { useEffect, useState } from 'react';
import '../styles/Cuenta.css';

const Cuenta = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userNombre, setUserNombre] = useState('');
  const [userGenero, setUserGenero] = useState('');
  const [userFecha, setUserFecha] = useState('');
  const [userDomicilio, setUserDomicilio] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [plan, setPlan] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    // Asumiendo que tienes diferentes keys en localStorage para cada campo
    const email = localStorage.getItem('userEmail') || localStorage.getItem('user') || '';
    const nombre = localStorage.getItem('userNombre') || '';
    const genero = localStorage.getItem('userGenero') || '';
    const fecha = localStorage.getItem('userFecha') || '';
    const domicilio = localStorage.getItem('userDomicilio') || '';
    const premiumStatus = localStorage.getItem('premium') === 'true';
    const userPlan = localStorage.getItem('plan') || 'Ninguno';
    
    setUserEmail(email);
    setUserNombre(nombre);
    setUserGenero(genero);
    setUserFecha(fecha);
    setUserDomicilio(domicilio);
    setIsPremium(premiumStatus);
    setPlan(userPlan);
  }, []);

  const handleSelectPlan = (name) => {
    setSelectedPlan(name);
    setShowModal(true);
  };

  return (
    <div className="cuenta-grid">
      <div className="cuenta-left gratis">
        <h2>Mi Cuenta</h2>
        <p><strong>Nombre:</strong> {userNombre}</p>
        <p><strong>Género:</strong> {userGenero}</p>
        <p><strong>Fecha de nacimiento:</strong> {userFecha}</p>
        <p><strong>Domicilio:</strong> {userDomicilio}</p>
        <p><strong>Correo:</strong> {userEmail}</p>
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