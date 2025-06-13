// components/secciones/HistoriaSagrada.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import historia from '../../assets/img_seccion/historiaSagrada.png'
import Footer from "../Footer";

const HistoriaSagrada = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Historia Sagrada`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        setVideos(data);
      })
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === "Historia Sagrada");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
    <section className="hero-femenil" style={{ backgroundImage: `url(${historia})` }}>
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Historia Sagrada</h1>
          <p>Disfruta del contenido más exclusivo de Historia Sagrada</p>
        </div>
      </div>
    </section>

      {/* Cuadrícula de videos */}
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

export default HistoriaSagrada;
