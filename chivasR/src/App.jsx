// App.jsx
import React from 'react';
import Header from './components/Header.jsx'; 
import Sidebar from './components/sidebar.jsx';
import MainImage from './components/mainimage.jsx';
import './styles/App.css';

const App = () => (
  <div className="app">
    <Header />
    <div className="content">
      <Sidebar />
      <MainImage />
    </div>
  </div>
);

export default App;

