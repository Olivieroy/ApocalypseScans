import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function Accueil() {
  const chapitres = [
    { id: 1, titre: 'Le début de l\'aventure', image: 'url_image_chapitre_1' },
    { id: 2, titre: 'Rencontre avec un allié', image: 'url_image_chapitre_2' },
    { id: 3, titre: 'Confrontation avec l\'ennemi', image: 'url_image_chapitre_3' },
    // ajoutez plus de chapitres comme vous le souhaitez
  ];

  return (
    <div>
      <Header />
      <h1>Nom du Manga</h1>
      <p>Description du manga...</p>

      <h2>Chapitres</h2>
      <ul>
        {chapitres.map(chapitre => (
          <li key={chapitre.id}>
            <Link to={`/chapitre/${chapitre.id}`}>
              <img src={chapitre.image} alt={`Chapitre ${chapitre.id}`} />
              : {chapitre.titre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accueil;
