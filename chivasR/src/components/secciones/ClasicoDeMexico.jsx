// components/secciones/ClásicoDeMéxico.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';
import { Link } from 'react-router-dom';
import clasicos from '../../assets/img_seccion/clasico.png'
import Footer from "../Footer";

const ClásicoDeMéxico = () => {
  const sectionVideos = videoData.filter(video => video.category === "Clásico De México");

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${clasicos})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Clasico de Mexico</h1>
            <p>Disfruta del contenido más exclusivo del clasico de Mexico.</p>
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

export default ClásicoDeMéxico;
