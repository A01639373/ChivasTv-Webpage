import React, { useState } from "react";
import Header from "./components/Header.jsx";
import MainImage from "./components/MainImage.jsx";
import FilterBar from "./components/FilterBar.jsx";
<<<<<<< HEAD
import ContentGrid from "./components/ContentGrid.jsx";
import Footer from "./components/Footer.jsx";
=======
import SeccionesDestacadas from "./components/SeccionesDestacadas.jsx";
import './styles/app.css';
>>>>>>> 9497f1d5376e607f3906f8299ed141ef55d99664

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
      <Footer/>
    </>
  );
}

export default App;
