import React from 'react';
import './TravelDetails.scss';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import TravelPicture from '../../../Reusable/TravelPicture/TravelPicture';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import TravelDates from './TravelDates';
import IconButton from '../../../Reusable/IconButton/IconButton';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';

const TravelDetails = () => {
  return (
    <div className="travelDetails">
      <HeaderConnected />
      <TravelsMenu />
      <TravelPicture />
      <TravelDates
        DepartureDate="28 décembre 2023"
        ReturnDate="5 janvier 2024"
      />
      <div className="activities">
        <div>
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
        </div>
      </div>
      <div className="buttons">
        <IconButton textContent='Faire une proposition' icon='add' />
        <IconButton textContent='Modifier le voyage' icon='edit' />
        <IconButton textContent='Supprimer le voyage' icon='trash' />
        <IconButton textContent='Quitter le voyage' icon='close' />
      </div>
    <NavBarMobile />
    </div>
  );
};

export default TravelDetails;
