import React, { useEffect, useState } from 'react';
import '../../styles/Seccion.css';
import { Link } from 'react-router-dom';
import mockVideos from '../../data/videos_chivastv.json';
import highlights from '../../assets/img_seccion/highlights.png';
import Footer from "../Footer";

const HighlightsOnField = () => {
  const [videos, setVideos] = useState([]);
  const categoria = "Highlights On Field";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/categoria/${encodeURIComponent(categoria)}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setVideos(Array.isArray(data) ? data : []))
      .catch(() => {
        const fallback = mockVideos.filter(v => v.category === categoria);
        setVideos(fallback);
      });
  }, []);

  return (
    <>
      <section className="hero-femenil" style={{ backgroundImage: `url(${highlights})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Highlights on Field</h1>
            <p>Disfruta los highlights de los partidos</p>
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

export default HighlightsOnField;
