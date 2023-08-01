import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Chapitre from "./Pages/Chapitre";
import AjoutChapitre from "./Pages/AjoutChapitre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/chapitre/:id" element={<Chapitre />} />
        <Route path="/ajout-chapitre" element={<AjoutChapitre />} />
      </Routes>
    </Router>
  );
}

export default App;
