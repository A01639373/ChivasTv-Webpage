// components/secciones/ClásicoDeMéxico.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import clasicos from '../../assets/img_seccion/clasico.png';
import Footer from "../Footer";

const ClásicoDeMéxico = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const categoria = "Clásico De México";
    const url = `${import.meta.env.VITE_BACKEND_API_URL}/video/categoria/${encodeURIComponent(categoria)}`;

    fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        console.log("📺 Contenido de videos:", data);
        console.log("🧪 Es array?", Array.isArray(data));
        setVideos(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === categoria);
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${clasicos})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Clásico de México</h1>
            <p>Disfruta del contenido más exclusivo del clásico de México</p>
          </div>
        </div>
      </section>

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

