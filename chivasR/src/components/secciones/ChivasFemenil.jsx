// components/secciones/ChivasFemenil.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';

const ChivasFemenil = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Chivas Femenil`)
      .then(res => {
        if (!res.ok) throw new Error("Backend no disponible");
        return res.json();
      })
      .then(data => {
        setVideos(data);
      })
      .catch(() => {
        // fallback al JSON local si el backend no está listo
        const fallback = mockVideos.filter(video => video.category === "Chivas Femenil");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      {/* Hero estilo DAZN */}
      <section className="hero-femenil">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Chivas Femenil</h1>
            <p>Disfruta del contenido más exclusivo de chivas femenil.</p>
          </div>
        </div>
      </section>

      {/* Grid de videos */}
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

export default ChivasFemenil;
