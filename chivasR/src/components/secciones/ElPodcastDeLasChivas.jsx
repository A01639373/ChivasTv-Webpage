import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import podcast from '../../assets/img_seccion/podcast.png';
import Footer from "../Footer";

const ElPodcastDeLasChivas = () => {
  const [videos, setVideos] = useState([]);
  const categoria = "El Podcast De Las Chivas";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/categoria/${encodeURIComponent(categoria)}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then(data => {
        setVideos(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === categoria);
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${podcast})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>El Podcast de las Chivas</h1>
            <p>Disfruta del contenido más exclusivo del podcast oficial</p>
          </div>
        </div>
      </section>

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

export default ElPodcastDeLasChivas;
