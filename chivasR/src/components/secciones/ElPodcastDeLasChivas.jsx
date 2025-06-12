// components/secciones/ElPodcastDeLasChivas.jsx
import React from 'react';
import '../../styles/Seccion.css';
import videoData from '../../data/videos_chivastv.json';
import { Link } from 'react-router-dom';
import podcast from '../../assets/img_seccion/podcast.png'
import Footer from "../Footer";

const ElPodcastDeLasChivas = () => {
  const sectionVideos = videoData.filter(video => video.category === "El Podcast De Las Chivas");

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${podcast})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Podcast de Chivas</h1>
            <p>Disfruta del contenido más exclusivo del Podcast de Chivas</p>
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

export default ElPodcastDeLasChivas;
