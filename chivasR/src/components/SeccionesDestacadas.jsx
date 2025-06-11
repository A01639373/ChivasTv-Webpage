import React from "react";
import { Link } from "react-router-dom";
import videos from '../data/videos_chivastv.json';
import '../styles/SeccionesDestacadas.css';

const categorias = [...new Set(videos.map(v => v.category))];

const SeccionesDestacadas = ({ filter }) => {
  const chunk = (arr, size) => {
    return arr.reduce((acc, _, i) => (
      i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc
    ), []);
  };

  const categoryGroups = chunk(categorias, 5);

  return (
    <div className="secciones-destacadas">
      {categoryGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {/* 🔷 Secciones tipo DAZN */}
          <div className={`secciones-grid ${group.slice(0, 4).length <= 4 ? 'compact-grid' : ''}`}>
            {group.slice(0, 4).map((cat, i) => (
              <Link
                key={i}
                to={`/${cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}
                className="seccion-card"
              >
                <div className="seccion-thumb">{cat}</div>
              </Link>
            ))}
          </div>

          {/* 🔻 Videos filtrados */}
          {group.flatMap(cat =>
            videos.filter(v => v.category === cat && (filter === "todos" || v.type === filter)).slice(0, 4)
          ).slice(0, 8).length > 0 && (
            <section className="seccion">
              <div className="grid">
                {group.flatMap(cat =>
                  videos.filter(v => v.category === cat && (filter === "todos" || v.type === filter)).slice(0, 4)
                ).slice(0, 8).map((video) => (
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
      ))}
    </div>
  );
};

export default SeccionesDestacadas;
