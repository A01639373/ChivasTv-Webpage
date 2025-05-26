import React, { useState } from "react";
import Header from "./components/Header.jsx";
import MainImage from "./components/MainImage.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ContentGrid from "./components/ContentGrid.jsx";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [filter, setFilter] = useState("todos");

  return (
    <>
      <div className={showSearch ? "with-search" : ""}>
        <MainImage />
        <FilterBar filter={filter} setFilter={setFilter} />
        <ContentGrid filter={filter} />
      </div>
    </>
  );
}

export default App;
