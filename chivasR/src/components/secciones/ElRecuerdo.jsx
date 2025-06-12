// components/secciones/ElRecuerdo.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';
import { Link } from 'react-router-dom';
import recuerdos from '../../assets/img_seccion/elRecuerdo.png'
import Footer from "../Footer";

const ElRecuerdo = () => {
  const sectionVideos = videoData.filter(video => video.category === "El Recuerdo");

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${recuerdos}})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>El Recuerdo</h1>
            <p>Disfruta del contenido más exclusivo del Recuerdo</p>
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

export default ElRecuerdo;
