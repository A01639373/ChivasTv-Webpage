import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/VideoDetail.css';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })
      .then((res) => {
        if (res.status === 403) throw new Error("Contenido exclusivo para suscriptores");
        return res.json();
      })
      .then((data) => {
        console.log("📦 Video cargado:", data);
        const oneVideo = Array.isArray(data) ? data[0] : data;
        setVideo(oneVideo);
      })
      .catch((err) => {
        console.error("Error al cargar el video:", err);
        if (err.message.includes("exclusivo")) {
          setVideo({ locked: true });
        } else {
          setVideo({
            id: 1,
            title: "Clásico De México Video 1",
            category: "Clásico De México",
            type: "suscriptor",
            date: "10/10/2010",
            duration: "10:03",
            image: "",
            url: "https://www.youtube.com/watch?v=3OdyM-Yvd3k",
            description: "Este es un video de prueba para simular datos del backend.",
            partido: true
          });
        }
      });
  }, [id]);

  useEffect(() => {
    if (!video?.category) return;

    const category = typeof video.category === 'object' ? video.category.name : video.category;

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/${category}?name=${category}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setRecommendations(data))
      .catch(() => {
        setRecommendations([
          {
            id: 2,
            title: "Resumen Jornada 5",
            duration: "8:23",
            category: "Femenil",
            image: "",
          },
          {
            id: 3,
            title: "Chivas vs Pumas",
            duration: "5:12",
            category: "Clásico",
            image: "",
          },
        ]);
      });
  }, [video?.category]);

  useEffect(() => {
    if (!video?.id) return;
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/comment/${video.id}/0/10?id=mock-user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(() => {
        setComments([
          {
            id: "c1",
            user: "usuario1",
            content: "Gran partido",
            timestamp: "2024-12-05T14:00:00Z"
          },
          {
            id: "c2",
            user: "rojiblanco97",
            content: "Este análisis estuvo brutal",
            timestamp: "2024-12-05T15:30:00Z"
          }
        ]);
      });
  }, [video?.id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/comment/${video.id}?id=mock-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ content: newComment })
    })
      .then(res => res.json())
      .then(() => {
        setComments(prev => [...prev, {
          id: Date.now().toString(),
          user: "mock-user",
          content: newComment,
          timestamp: new Date().toISOString()
        }]);
        setNewComment('');
      });
  };

  if (!video) return <div className="video-detail">Cargando video...</div>;

  if (video?.locked) {
    return (
      <div className="video-detail locked">
        <h2>🔒 ONLY PREMIUM</h2>
        <p>Este contenido es exclusivo para suscriptores.</p>
        <Link to="/cuenta" className="btn-subscribe">Hazte PREMIUM</Link>
      </div>
    );
  }

  return (
    <div className="video-detail">
      <div className="video-player">
        {(video?.url?.includes("youtube.com") || video?.url?.includes("youtu.be")) ? (
          <iframe
            width="100%"
            height="480"
            src={video.url.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video controls poster={video.image}>
            <source src={video.url} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        )}
      </div>

      <div className="video-header">
        <div>
          <h1>{video.title}</h1>
          <p className="info-line">Duración: {video.duration}</p>
          <p className="info-line">Publicado: {video.date}</p>
        </div>
        {video.partido && (
          <div className="video-stats-pill">
            <span className="label">ESTADÍSTICAS</span>
          </div>
        )}
      </div>

      <div className="video-description">
        {video.description || "Este video aún no tiene descripción"}
      </div>

      <div className="comments-title" onClick={() => setShowComments(!showComments)}>
        Comentarios {showComments ? '▲' : '▼'}
      </div>

      {showComments && (
        <div className="comments-section">
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-author">{comment.user}</div>
              <div className="comment-text">{comment.content}</div>
              <div className="comment-date">{new Date(comment.timestamp).toLocaleString()}</div>
            </div>
          ))}

          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe tu comentario..."
            />
            <button type="submit">Publicar</button>
          </form>
        </div>
      )}

      <div className="recommendations-section">
        <h2>También te puede interesar</h2>
        <div className="grid">
          {recommendations.map((item) => (
            <Link to={`/video/${item.id}`} key={item.id} className="card">
              <div className="image-placeholder">
                <img src={item.image}  />
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

