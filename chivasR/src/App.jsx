import React, { useState } from "react";
import Header from "./components/Header.jsx";
import MainImage from "./components/MainImage.jsx";
import FilterBar from "./components/FilterBar.jsx";
import SeccionesDestacadas from "./components/SeccionesDestacadas.jsx";
import './styles/app.css';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [filter, setFilter] = useState("todos");

  return (
    <>
      <div className={`app-container ${showSearch ? "with-search" : ""}`}>
        <MainImage />
        <FilterBar filter={filter} setFilter={setFilter} />
        <SeccionesDestacadas filter={filter} />
      </div>
    </>
  );
}

export default App;
