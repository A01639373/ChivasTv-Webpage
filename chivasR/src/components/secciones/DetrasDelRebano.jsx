// components/secciones/DetrásDelRebaño.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';

const DetrásDelRebaño = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Llamar al backend por videos de "Detrás Del Rebaño"
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Detrás Del Rebaño`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        setVideos(data);
      })
      .catch(() => {
        // Fallback: usa el JSON local si el fetch falla
        const fallback = mockVideos.filter(v => v.category === "Detrás Del Rebaño");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      {/* Hero superior estilo DAZN */}
      <section className="hero-femenil">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Detrás Del Rebaño</h1>
            <p>Disfruta del contenido más exclusivo de detrás del rebaño.</p>
          </div>
        </div>
      </section>

      {/* Grid visual de tarjetas de video */}
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

export default DetrásDelRebaño;
