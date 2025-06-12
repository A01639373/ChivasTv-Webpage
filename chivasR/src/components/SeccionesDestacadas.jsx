import React from "react";
import { Link } from "react-router-dom";
import videos from '../data/videos_chivastv.json';
import '../styles/SeccionesDestacadas.css';

const SeccionesDestacadas = ({ filter }) => {
  const videosFilterados = videos.filter(v => 
    filter === "todos" || v.type === filter
  );

  const videosParaMostrar = [];
  const videosEstreno = [];
  const categoriasUsadas = new Set();
  
  for (const video of videosFilterados) {
    if (videosParaMostrar.length >= 10) break;
    
    const videosDeEstaCategoria = videosParaMostrar.filter(v => v.category === video.category).length;
    if (videosDeEstaCategoria < 4) {
      videosParaMostrar.push(video);
      categoriasUsadas.add(video.category);
    }
  }

  return (
    <div className="secciones-destacadas">
      {videosParaMostrar.length > 0 && (
        <section className="seccion">
          <div className="grid">
            {videosParaMostrar.map((video) => (
              <Link to={`/video/${video.id}`} key={video.id} className="card">
                <div
                  className="image-placeholder"
                  style={{ backgroundImage: video.image ? `url(${video.image})` : 'none' }}
                >
                  <span className="card-date">{video.duration}</span>
                </div>
                <h3 className="card-title">{video.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SeccionesDestacadas;