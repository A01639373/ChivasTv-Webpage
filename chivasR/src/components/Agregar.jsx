import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/Agregar.css';

const Agregar = () => {
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState({
    title: "",
    url: "",
    category: "",
    description: "",
    duration: "",
    date: ""
  });

  const handleChange = (e) => {
    setVideoData({
      ...videoData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(videoData)
    })
      .then((res) => res.json())
      .then((data) => {
        alert("✅ Video agregado con éxito");
        navigate(`/video/${data.id}`);
      })
      .catch((err) => {
        console.error("❌ Error al agregar video:", err);
        alert("Hubo un error al guardar el video.");
      });
  };

  return (
    <div className="agregar-video-form">
      <h2>Agregar Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título" onChange={handleChange} required />
        <input type="text" name="url" placeholder="URL del video" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Categoría" onChange={handleChange} />
        <input type="text" name="duration" placeholder="Duración" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <textarea name="description" placeholder="Descripción" onChange={handleChange} />
        <button type="submit">Agregar Video</button>
      </form>
    </div>
  );
};

export default Agregar;
