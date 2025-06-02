// components/secciones/DíaADíaRojiblanco.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';
import { Link } from 'react-router-dom';


const DíaADíaRojiblanco = () => {
  const sectionVideos = videoData.filter(video => video.category === "Día A Día Rojiblanco");

  return (
    <>
      {/* Hero estilo DAZN */}
      <section className="hero-femenil">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Día A Día Rojiblanco</h1>
            <p>Disfruta del contenido más exclusivo de día a día rojiblanco.</p>
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
    </>
  );
};

export default DíaADíaRojiblanco;
