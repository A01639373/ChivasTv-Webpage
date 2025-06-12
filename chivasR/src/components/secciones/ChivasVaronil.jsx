// components/secciones/ChivasVaronil.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';
import { Link } from 'react-router-dom';
import chivasMasc from '../../assets/img_seccion/ChivasVaronil.png'
import Footer from "../Footer";


const ChivasVaronil = () => {
  const sectionVideos = videoData.filter(video => video.category === "Chivas Varonil");

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${chivasMasc})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Chivas Varonil</h1>
            <p>Disfruta del contenido más exclusivo de chivas varonil.</p>
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

export default ChivasVaronil;
