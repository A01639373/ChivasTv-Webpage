// components/secciones/ChivasFemenil.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import Footer from '../Footer';
import chivasFem from '../../assets/Chivas_fem.png';

const ChivasFemenil = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const categoria = "Chivas Femenil";
    const url = `${import.meta.env.VITE_BACKEND_API_URL}/video/categoria/${encodeURIComponent(categoria)}`;

    fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Backend no disponible");
        return res.json();
      })
      .then(data => {
        console.log("📺 Videos recibidos (Chivas Femenil):", data);
        setVideos(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        const fallback = mockVideos.filter(video => video.category === categoria);
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${chivasFem})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Chivas Femenil</h1>
            <p>Disfruta del contenido más exclusivo de Chivas Femenil.</p>
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

export default ChivasFemenil;
