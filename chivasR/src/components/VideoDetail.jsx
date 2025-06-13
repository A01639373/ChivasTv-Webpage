import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/VideoDetail.css';

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [user, setUser] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

// Obtener perfil de usuario
useEffect(() => {
  fetch(`${import.meta.env.VITE_BACKEND_API_URL}/user/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("👤 Perfil de usuario recibido:", data); // 👈 AQUI
      console.log("👤 Tipo de suscripción:", data.role); // 👈 AQUI
      setUser(data);
    })
    .catch(err => {
      console.error("❌ Error al obtener perfil:", err);
    });
}, []);

  // Cargar video
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })
      .then((res) => {
        if (res.status === 403) throw new Error("Contenido exclusivo");
        return res.json();
      })
      .then((data) => {
        const oneVideo = Array.isArray(data) ? data[0] : data;
        setVideo(oneVideo);
        console.log("🎥 Video cargado:", oneVideo); // ✅ Aquí
      });
  }, [id]);

  // Cargar recomendaciones
  useEffect(() => {
    if (!video?.category) return;
    const category = typeof video.category === 'object' ? video.category.name : video.category;

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/categoria/${category}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRecommendations(data);
      });
  }, [video?.category]);

  // Cargar comentarios
  useEffect(() => {
    if (!video?.id) return;

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/comment/${video.id}/0/10?id=mock-user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(setComments);
  }, [video?.id]);

  // Publicar comentario
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

  // Eliminar video
  const handleDeleteVideo = (videoId) => {
    if (!window.confirm("¿Seguro que deseas eliminar este video?")) return;

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video/${videoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(() => {
        alert("✅ Video eliminado");
        navigate("/");
      });
  };

  if (!video || !user) return <div className="video-detail">Cargando video...</div>;

  if ((video.type === "suscriptor" || video.type === "premium") && user.role !== "admin" && user.role !== "premium") {
    return (
      <div className="video-detail locked">
        <h2>🔒 SOLO PREMIUM</h2>
        <p>Este contenido requiere una suscripción activa.</p>
        <Link to="/cuenta" className="btn-subscribe">Hazte PREMIUM</Link>
      </div>
    );
  }

  return (
    <div className="video-detail">
      {/* 🎥 Video + acciones */}
      <div className="video-top-row">
        <div className="video-player">
          {(video.url.includes("youtube.com") || video.url.includes("youtu.be")) ? (
            <iframe
              width="100%"
              height="480"
              src={video.url.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
              title={video.title}
              frameBorder="0"
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

        {user.role === "admin" && (
          <div className="video-actions-dropdown">
            <button className="dropdown-toggle">Opciones</button>
            <div className="dropdown-menu">
              <Link to="/agregar-video">➕ Agregar Video</Link>
              <button onClick={() => handleDeleteVideo(video.id)}>🗑 Eliminar Video</button>
            </div>
          </div>
        )}
      </div>

      {/* 📝 Info */}
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

      {/* 🧾 Descripción */}
      <div className="video-description">
        {video.description || "Este video aún no tiene descripción"}
      </div>

      {/* 💬 Comentarios */}
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

      {/* 🎯 Recomendaciones */}
      <div className="recommendations-section">
        <h2>También te puede interesar</h2>
        <div className="grid">
          {recommendations.map((item) => (
            <Link to={`/video/${item.id}`} key={item.id} className="card">
              <div className="image-placeholder">
                <img src={item.image} />
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
