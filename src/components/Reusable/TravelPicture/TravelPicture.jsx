import React, { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';
import './TravelPicture.scss'; // Assurez-vous d'avoir un fichier de style pour le composant
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveTravelPicture, setNewPicture } from '../../../actions/trip';

const TravelPicture = ({ currentPhoto }) => {

  const dispatch = useDispatch();

  const currentPicture = useSelector((state) => state.trip.trip.backgroundPictureURL);
  console.log(currentPicture);
  const tripId = useSelector((state) => state.trip.trip.id);
  console.log(tripId);

  const handlePhotoChange = (event) => {
    console.log("toto");
    const file = event.target.files[0];
    if (file) {
      // Si un fichier a été sélectionné, vous pouvez le traiter ici, par exemple l'afficher
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setNewPicture(reader.result));
        dispatch(handleRemoveTravelPicture(tripId));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="TravelPicture">
      {/* Afficher la photo (soit currentPhoto, soit newPhoto) */}
      <img src={currentPicture} alt="Photo" className="photo" />

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