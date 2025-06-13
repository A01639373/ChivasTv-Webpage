// components/secciones/Subs.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';

const Subs = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Sub%27s`) // Sub's => Sub%27s
      .then(res => {
        if (!res.ok) throw new Error("Error en el backend");
        return res.json();
      })
      .then(data => setVideos(data))
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === "Sub's");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${sub})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Equipo sub</h1>
            <p>Disfruta del contenido más exclusivo del equipo Sub</p>
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
      <Footer />
    </>
  );
};

export default Subs;
