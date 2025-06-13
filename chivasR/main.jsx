// main.jsx
import React, { useState } from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import videos from './src/data/videos_chivastv.json'; 


import App from './src/App.jsx';
import Header from './src/components/Header.jsx';
import LoginForm from './src/components/LoginForm.jsx';
import RegisterForm from './src/components/RegisterForm.jsx';
import VideoDetail from './src/components/VideoDetail.jsx';
import Cuenta from './src/components/Cuenta.jsx';
import LiveTv from './src/components/LiveTV.jsx';
import Agregar from "./src/components/Agregar.jsx"; 

import './index.css';

import {
  ChivasFemenil,
  ChivasVaronil,
  ClasicoDeMexico,
  DetrasDelRebano,
  DiaADiaRojiblanco,
  ElPodcastDeLasChivas,
  ElRecuerdo,
  Entrevistas,
  Esports,
  HighlightsOnField,
  HistoriaSagrada,
  Leyendas,
  NacionChivas,
  OperacionValorant,
  Raices,
  Repeticiones,
  Resiliencia,
  Resumen,
  SantuarioRojiblanco,
  Subs
} from './src/components/secciones/index.js';
import LiveTV from './src/components/LiveTV.jsx';

const Root = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <BrowserRouter>
      <Header showSearch={showSearch} setShowSearch={setShowSearch} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/chivas-femenil" element={<ChivasFemenil />} />
        <Route path="/chivas-varonil" element={<ChivasVaronil />} />
        <Route path="/clasico-de-mexico" element={<ClasicoDeMexico />} />
        <Route path="/detras-del-rebano" element={<DetrasDelRebano />} />
        <Route path="/dia-a-dia-rojiblanco" element={<DiaADiaRojiblanco />} />
        <Route path="/el-podcast-de-las-chivas" element={<ElPodcastDeLasChivas />} />
        <Route path="/el-recuerdo" element={<ElRecuerdo />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/highlights-on-field" element={<HighlightsOnField />} />
        <Route path="/historia-sagrada" element={<HistoriaSagrada />} />
        <Route path="/leyendas" element={<Leyendas />} />
        <Route path="/nacion-chivas" element={<NacionChivas />} />
        <Route path="/operacion-valorant" element={<OperacionValorant />} />
        <Route path="/raices" element={<Raices />} />
        <Route path="/repeticiones" element={<Repeticiones />} />
        <Route path="/resiliencia" element={<Resiliencia />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/santuario-rojiblanco" element={<SantuarioRojiblanco />} />
        <Route path="/subs" element={<Subs />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/LiveTV" element={<LiveTV />} />
        //<Route path="/agregar-video" element={<Agregar />} />

      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);