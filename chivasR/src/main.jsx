// main.jsx
import React, { useState } from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Header from './components/Header.jsx';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';

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
} from './components/secciones';

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
        <Route path="/clsico-de-mxico" element={<ClasicoDeMexico />} />
        <Route path="/detrs-del-rebao" element={<DetrasDelRebano />} />
        <Route path="/da-a-da-rojiblanco" element={<DiaADiaRojiblanco />} />
        <Route path="/el-podcast-de-las-chivas" element={<ElPodcastDeLasChivas />} />
        <Route path="/el-recuerdo" element={<ElRecuerdo />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/highlights-on-field" element={<HighlightsOnField />} />
        <Route path="/historia-sagrada" element={<HistoriaSagrada />} />
        <Route path="/leyendas" element={<Leyendas />} />
        <Route path="/nacin-chivas" element={<NacionChivas />} />
        <Route path="/operacin-valorant" element={<OperacionValorant />} />
        <Route path="/races" element={<Raices />} />
        <Route path="/repeticiones" element={<Repeticiones />} />
        <Route path="/resiliencia" element={<Resiliencia />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/santuario-rojiblanco" element={<SantuarioRojiblanco />} />
        <Route path="/subs" element={<Subs />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
