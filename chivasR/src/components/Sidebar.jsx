import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    {['Relevante', 'Estreno', 'Clásico de México', 'DDR', 'Raíces', 'Resumen', 'ETC'].map((item, idx) => (
      <div key={idx} className="sidebar-item">
        <div className="sidebar-icon">⚽</div>
        <span>{item}</span>
      </div>
    ))}
  </div>
);

export default Sidebar;