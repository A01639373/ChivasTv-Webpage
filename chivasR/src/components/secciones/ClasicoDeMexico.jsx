// components/secciones/ClásicoDeMéxico.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import Footer from '../Footer'; // o la ruta correcta según tu estructura


const ClásicoDeMéxico = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Llamar a la API para obtener videos de la categoría "Clásico De México"
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Clásico De México`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        setVideos(data); // ✅ Usa videos reales del backend
      })
      .catch(() => {
        // 🔁 Fallback si el backend falla
        const fallback = mockVideos.filter(v => v.category === "Clásico De México");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      {/* 🟥 Hero principal estilo DAZN */}
      <section className="hero-femenil">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Clasico de Mexico</h1>
            <p>Disfruta del contenido más exclusivo del clasico de Mexico.</p>
          </div>
        </div>
      </section>

      {/* 🎬 Grid de tarjetas de video */}
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

export default ClásicoDeMéxico;
