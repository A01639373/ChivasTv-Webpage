// components/secciones/Leyendas.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';

const Leyendas = () => {
  const sectionVideos = videoData.filter(video => video.category === "Leyendas");

  return (
    <>
      {/* Hero estilo DAZN */}
      <section className="hero-femenil">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Leyendas</h1>
            <p>Disfruta del contenido más exclusivo de leyendas.</p>
          </div>
        </div>
      </section>

      {/* Grid de videos */}
      <section className="seccion">
        <div className="grid">
          {sectionVideos.map((video) => (
            <div key={video.id} className="card">
              <div
                className="image-placeholder"
                style={{ backgroundImage: `url(${video.image || '/img/default-thumbnail.jpg'})` }}
              >
                <p className="card-date">{video.duration}</p>
              </div>
              <h3 className="card-title">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Leyendas;
