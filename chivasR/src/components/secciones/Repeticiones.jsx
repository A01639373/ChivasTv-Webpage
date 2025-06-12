// components/secciones/Repeticiones.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';
import { Link } from 'react-router-dom';
import repeticiones from '../../assets/img_seccion/repeticiones.png'
import Footer from "../Footer";

const Repeticiones = () => {
  const sectionVideos = videoData.filter(video => video.category === "Repeticiones");

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${repeticiones})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Repeticiones</h1>
            <p>Disfruta del contenido más exclusivo de repeticiones</p>
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

export default Repeticiones;
