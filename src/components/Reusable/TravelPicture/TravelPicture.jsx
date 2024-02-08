import React, { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';
import './TravelPicture.scss'; // Assurez-vous d'avoir un fichier de style pour le composant

const TravelPicture = ({ currentPhoto }) => {
  const [newPhoto, setNewPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Si un fichier a été sélectionné, vous pouvez le traiter ici, par exemple l'afficher
      const reader = new FileReader();
      reader.onload = () => {
        setNewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="TravelPicture">
      {/* Afficher la photo (soit currentPhoto, soit newPhoto) */}
      <img src={newPhoto || currentPhoto} alt="Photo" className="photo" />

      {/* Icône pour charger une nouvelle photo */}
      <label htmlFor="photo-upload" className="upload-icon">
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        <PencilIcon className="icon" />
      </label>
    </div>
  );
};

export default TravelPicture;
