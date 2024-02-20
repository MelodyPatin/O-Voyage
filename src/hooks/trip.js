import { useState, useEffect } from 'react';
import api from '../api';

// eslint-disable-next-line import/prefer-default-export
export const useCoverPictureChange = (tripId) => {
  const [picture, setPicture] = useState(null);

  // Fonction pour mettre à jour l'image de fond
  const updateBackgroundPicture = (newBackgroundPictureURL) => {
    // Mettez à jour l'état local ou effectuez d'autres actions nécessaires
    console.log(`Updated background picture URL: ${newBackgroundPictureURL}`);
  };

  useEffect(() => {
    const addPicture = async () => {
      try {
        const apiResponse = await api.post(`/trip/${tripId}/add_picture`);
        setPicture(apiResponse.data);
        // Mettez à jour l'image de fond avec la nouvelle URL
        updateBackgroundPicture(apiResponse.data.backgroundPictureURL);
      } catch (error) {
        console.error(error);
      }
    };

    addPicture();
  }, [tripId]);

  // Retournez les informations nécessaires au composant
  return { picture, updateBackgroundPicture };
};
