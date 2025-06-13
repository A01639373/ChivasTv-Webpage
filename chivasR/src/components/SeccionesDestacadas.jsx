import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SeccionesDestacadas.css";

const SeccionesDestacadas = ({ filter }) => {
  const [categoryVideos, setCategoryVideos] = useState({});
  const [categorias, setCategorias] = useState([]);

  // Categorías fijas
  const predefined = [
    "Clásico De México", "Santuario Rojiblanco", "Raíces",
    "Detrás Del Rebaño", "Resumen", "Repeticiones", "Resiliencia", "Chivas Femenil",
    "Chivas Varonil", "Sub's", "Entrevistas", "Día A Día Rojiblanco", "Highlights On Field",
    "Leyendas", "Historia Sagrada", "Nación Chivas", "Operación Valorant", "Esports",
    "El Podcast De Las Chivas", "El Recuerdo"
  ];

  // Cargar videos por categoría desde el backend o mock
  useEffect(() => {
    setCategorias(predefined);

    predefined.forEach(cat => {
      fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/${cat}?name=${cat}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setCategoryVideos(prev => ({ ...prev, [cat]: data }));
        })
        .catch(() => {
          const mockVideos = [
            {
              id: Math.floor(Math.random() * 1000),
              title: `${cat} Video 1`,
              category: cat,
              type: "suscriptor",
              date: "10/10/2010",
              duration: "10:03",
              description: "Mock: video exclusivo",
              partido: true
            },
            {
              id: Math.floor(Math.random() * 1000),
              title: `${cat} Video 2`,
              category: cat,
              type: "gratis",
              date: "10/10/2010",
              duration: "9:45",
              description: "Mock: video gratuito",
              partido: false
            }
          ].filter(v => filter === "todos" || v.type === filter);

          setCategoryVideos(prev => ({ ...prev, [cat]: mockVideos }));
        });
    });
  }, [filter]);

  // Agrupa categorías en chunks de 5 para hacer secciones separadas
  const chunk = (arr, size) => {
    return arr.reduce((acc, _, i) => (
      i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc
    ), []);
  };

  const categoryGroups = chunk(predefined, 5);

  return (
    <div className="secciones-destacadas">
      {categoryGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {/* 🔻 Videos filtrados desde backend o mock */}
          {group.flatMap(cat =>
            Array.isArray(categoryVideos[cat]) ? categoryVideos[cat] : []
          ).filter(v => filter === "todos" || v.type === filter)
          .slice(0, 8).length > 0 && (
            <section className="seccion">
              <div className="grid">
                {group.flatMap(cat =>
                  (categoryVideos[cat] || [])
                    .filter(v => filter === "todos" || v.type === filter)
                    .slice(0, 4)
                )
                .slice(0, 8)
                .map((video) => (
                  <Link to={`/video/${video.id}`} key={video.id} className="card">
                    <div
                      className="image-placeholder"
                      style={{ backgroundImage: video.image ? `url(${video.image})` : 'none' }}
                    >
                      <span className="card-date">{video.duration}</span>
                    </div>
                    <h3 className="card-title">{video.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeccionesDestacadas;
