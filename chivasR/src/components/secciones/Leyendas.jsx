// components/secciones/Leyendas.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';
import { Link } from 'react-router-dom';
import leyenda from '../../assets/img_seccion/leyendasForo.png'
import Footer from "../Footer";

const Leyendas = () => {
  const sectionVideos = videoData.filter(video => video.category === "Leyendas");

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${leyenda})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Leyendas</h1>
            <p>Disfruta del contenido más exclusivo de las Leyendas</p>
          </div>
        </div>
      </section>

      {/* Grid de videos */}
      <section className="seccion">
        <div className="grid">
          {sectionVideos.map((video) => (
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
