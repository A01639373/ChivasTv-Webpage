// ContentGrid.jsx - Sección "Lo más nuevo"
import React from 'react';
import '../styles/ContentGrid.css';

const sampleContent = [
  {
    id: 1,
    title: "Chivas vs América",
    subtitle: "Resumen del Clásico",
    image: "",
    tags: ["Partido", "Resumen"],
    date: "45:21",
    access: "suscriptor"
  },
  {
    id: 2,
    title: "Raíces Rojiblancas",
    subtitle: "Historia de la cantera",
    image: "",
    tags: ["Documental", "Gratis"],
    date: "1:32",
    access: "gratis"
  },
  {
    id: 3,
    title: "Chivas Femenil Golea",
    subtitle: "Gran actuación en casa",
    image: "",
    tags: ["Femenil", "Partido"],
    date: "12:21",
    access: "suscriptor"
  },
  {
    id: 4,
    title: "Nuevo Entrenamiento",
    subtitle: "Sesión intensa con el equipo",
    image: "",
    tags: ["Entrenamiento", "Gratis"],
    date: "22:05",
    access: "gratis"
  }
];

const ContentGrid = ({ filter }) => {
  const filteredContent = sampleContent.filter(item =>
    filter === "todos" || item.access === filter
  );

  return (
    <section className="content-grid">
      <h2 className="section-title">Lo más nuevo</h2>
      <div className="grid">
        {filteredContent.map(item => (
          <div key={item.id} className="card">
            <div className="image-placeholder">
              <p className="card-date">{item.date}</p>
            </div>
            <h3 className="card-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;
