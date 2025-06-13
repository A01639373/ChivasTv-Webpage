import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SeccionesDestacadas.css";

const SeccionesDestacadas = ({ filter }) => {
  const [categoryVideos, setCategoryVideos] = useState({});
  const predefined = [
    "Clásico De México", "Santuario Rojiblanco", "Raíces",
    "Detrás Del Rebaño", "Resumen", "Repeticiones", "Resiliencia", "Chivas Femenil",
    "Chivas Varonil", "Sub's", "Entrevistas", "Día A Día Rojiblanco", "Highlights On Field",
    "Leyendas", "Historia Sagrada", "Nación Chivas", "Operación Valorant", "Esports",
    "El Podcast De Las Chivas", "El Recuerdo"
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchAll = async () => {
      const results = await Promise.all(
        predefined.map(async (cat) => {
          const encoded = encodeURIComponent(cat);
          try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/categoria/${encodeURIComponent(cat)}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            console.log(`📦 Videos recibidos para ${cat}:`, data);

            if (Array.isArray(data)) {
              return { cat, videos: data };
            } else {
              console.warn(`⚠️ Datos inválidos para ${cat}:`, data);
              return { cat, videos: [] };
            }
          } catch (err) {
            console.error(`❌ Error en ${cat}`, err);
            return { cat, videos: [] };
          }
        })
      );

      const videoMap = {};
      results.forEach(({ cat, videos }) => {
        videoMap[cat] = videos;
      });
      setCategoryVideos(videoMap);
    };

    fetchAll();
  }, [filter]);

<<<<<<< HEAD
  const chunk = (arr, size) => arr.reduce((acc, _, i) =>
    i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc, []
  );
=======
  // Agrupa categorías en grupos de 4 para mostrar por fila
  const chunk = (arr, size) => {
    return arr.reduce((acc, _, i) => (
      i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc
    ), []);
  };
>>>>>>> e4661bae93f300362fc2615177e53b437806b473

  const categoryGroups = chunk(predefined, 4);

  // Obtener todos los videos filtrados
  const allVideos = Object.values(categoryVideos)
    .flat()
    .filter(video => filter === "todos" || video.type === filter)
    .slice(0, 8); // Limitar a 8 videos destacados

  return (
    <div className="secciones-destacadas">
<<<<<<< HEAD
      {categoryGroups.map((group, idx) => (
        <div key={idx}>
          {/* Tarjetas de categoría */}
          <div className={`secciones-grid ${group.length <= 4 ? 'compact-grid' : ''}`}>
=======
      {allVideos.length > 0 && (
        <>
          <h3 classname='titulo-Seccion'>DESTACADOS</h3>
          <section className="seccion">
            <div className="grid">
              {allVideos.map((video) => (
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
        </>
      )}

      <h3 classname='titulo-Seccion'>CATEGORÍAS</h3>
      <div className="categorias-container">
        {categoryGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="secciones-grid">
>>>>>>> e4661bae93f300362fc2615177e53b437806b473
            {group.map((cat, i) => (
              <Link
                key={i}
                to={`/${cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}
                className="seccion-card"
              >
                <div className="seccion-thumb">{cat}</div>
              </Link>
            ))}
          </div>
<<<<<<< HEAD

          {/* Videos */}
          {group.flatMap(cat =>
            Array.isArray(categoryVideos[cat]) ? categoryVideos[cat] : []
          ).filter(v => filter === "todos" || v.type === filter).length > 0 && (
            <section className="seccion">
              <div className="grid">
                {group.flatMap(cat =>
                  (categoryVideos[cat] || []).filter(v => filter === "todos" || v.type === filter).slice(0, 4)
                ).slice(0, 8).map((video) => (
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
=======
        ))}
      </div>
>>>>>>> e4661bae93f300362fc2615177e53b437806b473
    </div>
  );
};

export default SeccionesDestacadas;