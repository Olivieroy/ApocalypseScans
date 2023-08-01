import React from "react";
import { useParams } from "react-router-dom";

function Chapitre() {
  const { id } = useParams();

  // Données fictives pour l'instant
  const chapitre = {
    titre: "Titre du chapitre",
    pages: [
      "url_image_page_1",
      "url_image_page_2",
      // ajoutez autant d'URL d'images que vous voulez
    ],
  };

  return (
    <div>
      <h1>
        Chapitre {id}: {chapitre.titre}
      </h1>

      {chapitre.pages.map((page, index) => (
        <img key={index} src={page} alt={`Page ${index + 1}`} />
      ))}
    </div>
  );
}

export default Chapitre;
