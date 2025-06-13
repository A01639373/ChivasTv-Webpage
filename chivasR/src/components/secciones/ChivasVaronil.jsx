// components/secciones/ChivasVaronil.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';

const ChivasVaronil = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Llama al backend con la categoría correspondiente
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Chivas Varonil`)
      .then(res => {
        if (!res.ok) throw new Error("Backend no disponible");
        return res.json();
      })
      .then(data => {
        setVideos(data); // Usa los datos del backend si responde bien
      })
      .catch(() => {
        // Fallback: usa el JSON local si falla la API
        const fallback = mockVideos.filter(video => video.category === "Chivas Varonil");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      {/* Hero superior con estilo promocional */}
      <section className="hero-femenil">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Chivas Varonil</h1>
            <p>Disfruta del contenido más exclusivo de chivas varonil.</p>
          </div>
        </div>
      </section>

      {/* Grid visual de videos */}
      <section className="seccion">
        <div className="grid">
          {videos.map((video) => (
            <Link to={`/video/${video.id}`} key={video.id} className="card">
              <div
                className="image-placeholder"
                style={{ backgroundImage: `url(${video.image || '/img/default-thumbnail.jpg'})` }}
              >
                <p className="card-date">{video.duration}</p>
              </div>
              <h3 className="card-title">{video.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChivasVaronil;
