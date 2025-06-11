import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Estrenos.css';

const Estrenos = ({ videos }) => {
  const categories = [...new Set(videos.map(v => v.category))];

  const chunk = (arr, size) => {
    return arr.reduce((acc, _, i) => (
      i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc
    ), []);
  };

  const categoryGroups = chunk(categories, 5);

  return (
    <div className="estrenos-container">
      {categoryGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {/* Grid de 5 secciones estilo DAZN */}
          <div className="secciones-grid">
            {group.map((cat, i) => (
              <Link
                key={i}
                to={`/${cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}
                className="seccion-card"
              >
                <div className="seccion-thumb">{cat}</div>
              </Link>
            ))}
          </div>

          {/* Grid de 2 bloques de 4 videos (por grupo de secciones) */}
          {group.flatMap(cat =>
            videos.filter(v => v.category === cat).slice(0, 4)
          ).slice(0, 8).length > 0 && (
            <section className="seccion">
              <div className="grid">
                {group.flatMap(cat =>
                  videos.filter(v => v.category === cat).slice(0, 4)
                ).slice(0, 8).map((video) => (
                  <Link to={`/video/${video.id}`} key={video.id} className="card">
                    <div
                      className="image-placeholder"
                      style={{
                        backgroundImage: video.image ? `url(${video.image})` : 'none'
                      }}
                    >
                      <p className="card-date">{video.duration}</p>
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

export default Estrenos;
