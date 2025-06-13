// components/secciones/DíaADíaRojiblanco.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import diaRojiblanco from '../../assets/img_seccion/rojiblanco.png'
import Footer from "../Footer";

const DíaADíaRojiblanco = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/Día A Día Rojiblanco`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        setVideos(data);
      })
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === "Día A Día Rojiblanco");
        setVideos(fallback);
      });
  }, []);

  return (
    <>
    <section className="hero-femenil" style={{ backgroundImage: `url(${diaRojiblanco})` }}>
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Dia a dia Rojiblanco</h1>
          <p>Disfruta del contenido más exclusivo del dia a dia Rojiblanco</p>
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
      <Footer />
    </>
  );
};

export default DíaADíaRojiblanco;

