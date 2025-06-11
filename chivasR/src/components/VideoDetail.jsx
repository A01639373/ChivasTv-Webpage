import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import videoData from '../data/videos_chivastv.json';
import '../styles/VideoDetail.css';

const VideoDetail = () => {
  const { id } = useParams();
  const video = videoData.find(v => v.id === parseInt(id));
  const [showComments, setShowComments] = useState(false);

  const isPremium = localStorage.getItem('premium') === 'true';

  const filteredVideos = videoData.filter(v => v.id !== parseInt(id));
  const getRandomVideos = (list, count) => {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const recommendations = getRandomVideos(filteredVideos, 8);

  if (!video) return <div className="video-detail">Video no encontrado</div>;

  return (
    <div className="video-detail">
      <div className="video-player">
        {video.type === 'suscriptor' && !isPremium ? (
          <div className="paywall">
            <p>Este video es exclusivo para suscriptores.</p>
            <Link to="/cuenta" className="btn-go-premium">Hazte Premium</Link>
          </div>
        ) : (
          <video controls src={`/videos/${video.id}.mp4`} />
        )}
      </div>

      <div className="video-header">
        <div>
          <h1>{video.title}</h1>
          <p className="info-line">Duración: {video.duration}</p>
        </div>

        {video.partido && (
          <div className="video-stats-pill">
            <span className="label">ESTADÍSTICAS</span>
          </div>
        )}
      </div>

      <h3>{video.subtitle}</h3>

      <div className="video-description">
        {video.description
          ? video.description
          : 'Este video muestra lo mejor del partido con análisis exclusivo. Disfruta de cada jugada y revive los momentos clave.'}
      </div>

      <div className="comments-title" onClick={() => setShowComments(!showComments)}>
        Comentarios {showComments ? '▲' : '▼'}
      </div>

      {showComments && (
        <div className="comments-section">
          <div className="comment">
            <div className="comment-author">🌟 rojiblancx21</div>
            <div className="comment-text">¡Ese pase al minuto 23 fue mágico!</div>
          </div>
          <div className="comment">
            <div className="comment-author">🔥 chivahermano</div>
            <div className="comment-text">Necesitamos más de estos análisis 🙌</div>
          </div>
        </div>
      )}

      <div className="recommendations-section">
        <h2>También te puede interesar</h2>
        <div className="grid">
          {recommendations.map((item) => (
            <Link to={`/video/${item.id}`} key={item.id} className="card">
              <div className="image-placeholder">
                <p className="card-date">{item.duration}</p>
              </div>
              <h3 className="card-title">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
