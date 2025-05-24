import React, { useState } from "react";
import MainImage from "./components/MainImage.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Header showSearch={showSearch} setShowSearch={setShowSearch} />
      <div className={showSearch ? "with-search" : ""}>
        <MainImage />
      </div>
    </>
  );
}

export default App;

