// components/secciones/Entrevistas.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import entrevista from '../../assets/img_seccion/entrevistas.png'
import Footer from "../Footer";

const Entrevistas = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Entrevistas`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        setVideos(data);
      })
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === "Entrevistas");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
    <section className="hero-femenil" style={{ backgroundImage: `url(${entrevista})` }}>
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Leyendas</h1>
          <p>Disfruta del contenido más exclusivo de las entrevistas a Chivas</p>
        </div>
      </div>
    </section>

      {/* Lista de videos renderizada */}
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

export default Entrevistas;

