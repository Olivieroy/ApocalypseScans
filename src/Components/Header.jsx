import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div>
        <h1>Header</h1>
        <nav>
                <Link to={`/`}>Accueil</Link>
                <Link to={`/ajout-chapitre`}>Ajouter un chapitre</Link>
        </nav>
      </div>
    );
}
    
export default Header;