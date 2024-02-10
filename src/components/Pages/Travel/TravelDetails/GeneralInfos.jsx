import React from 'react';
import TravelPicture from '../../../Reusable/TravelPicture/TravelPicture';
import TravelDates from './TravelDates';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import IconButton from '../../../Reusable/IconButton/IconButton';

const GeneralInfos = () => {
  return (
    <div>
      <TravelPicture />
      <TravelDates
        DepartureDate="28 décembre 2023"
        ReturnDate="5 janvier 2024"
      />
      <div className="buttons">
        <div className="simpleButton">
          <SimpleButton textContent="Voir les autres voyageurs" />
        </div>
        <IconButton textContent="Modifier le voyage" icon="edit" />
        <IconButton textContent="Supprimer le voyage" icon="trash" />
        <IconButton textContent="Quitter le voyage" icon="close" />
      </div>
    </div>
  );
};

export default GeneralInfos;