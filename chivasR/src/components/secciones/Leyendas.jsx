// components/secciones/Leyendas.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import leyenda from '../../assets/img_seccion/leyendasForo.png'
import Footer from "../Footer";
=======
import mockVideos from '../../data/videos_chivastv.json';
>>>>>>> front_end_dev

const Leyendas = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Leyendas`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        setVideos(data);
      })
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === "Leyendas");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
<<<<<<< HEAD
      <section className="hero-femenil" style={{ backgroundImage: `url(${leyenda})` }}>
=======
      {/* Hero visual tipo DAZN */}
      <section className="hero-femenil">
>>>>>>> front_end_dev
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Leyendas</h1>
            <p>Disfruta del contenido más exclusivo de las Leyendas</p>
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

export default Leyendas;
