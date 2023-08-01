import React, { useState } from "react";
import { openUploadWidget } from "../Service/CloudinaryService";

function AjoutChapitre() {
  const [id, setId] = useState("");
  const [titre, setTitre] = useState("");
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dw3unxrex",
      tags: [tag],
      uploadPreset: "ml_default",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          setImages([...images, photos.info.public_id]);
        }
      } else {
        console.log(error);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ id, titre, images });
  };

  return (
    <div>
      <h1>Ajouter un chapitre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Numéro de chapitre:
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        <label>
          Titre du chapitre:
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </label>
        <button type="button" onClick={() => beginUpload("image")}>
          Upload Image
        </button>
        <button type="submit">Ajouter le chapitre</button>
      </form>
      {images.map((imageId) => (
        <div key={imageId}>
          <Image publicId={imageId} cloudName="your-cloud-name" />
        </div>
      ))}
    </div>
  );
}

export default AjoutChapitre;
