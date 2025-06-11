import React, { useState } from "react";
import Header from "./components/Header.jsx";
import MainImage from "./components/MainImage.jsx";
import FilterBar from "./components/FilterBar.jsx";
import Footer from "./components/Footer.jsx";
import SeccionesDestacadas from './components/SeccionesDestacadas.jsx'; 

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [filter, setFilter] = useState("todos");

  return (
    <>
      {/* ✅ Y envuelves tu contenido con un contenedor que tenga padding-top */}
      <main className="page-content">
        <div className={`app-container ${showSearch ? "with-search" : ""}`}>
          <MainImage />
          <FilterBar filter={filter} setFilter={setFilter} />
          <SeccionesDestacadas filter={filter} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;

