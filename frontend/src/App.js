import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisuelsPage from "./pages/VisuelsPage";  
import DoleancesPage from "./pages/DoleancesPage";
import SitesPage from "./pages/SitesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visuels" element={<VisuelsPage />} />
          <Route path="/doleances" element={<DoleancesPage />} />
          <Route path="/sites" element={<SitesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;