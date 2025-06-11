import React, { useEffect, useState } from 'react';
import '../styles/LiveTV.css';

const LiveTV = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('user') || 'Invitado';
    setUser(username.split('@')[0]);
  }, []);

  const handleSend = () => {
    if (input.trim() === '') return;
    const newComment = {
      user,
      text: input,
      time: new Date().toLocaleTimeString()
    };
    setComments([...comments, newComment]);
    setInput('');
  };

  return (
    <div className="live-container">
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=UCk0" // ejemplo
          title="Chivas Live"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="chat-section">
        <h3>Comentarios en Vivo</h3>
        <div className="chat-box">
          {comments.map((c, idx) => (
            <div key={idx} className="chat-message">
              <strong>{c.user}</strong>: {c.text} <span className="time">{c.time}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu comentario..."
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default LiveTV;
