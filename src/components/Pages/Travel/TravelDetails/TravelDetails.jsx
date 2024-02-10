import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import TravelPicture from '../../../Reusable/TravelPicture/TravelPicture';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import TravelDates from './TravelDates';
import IconButton from '../../../Reusable/IconButton/IconButton';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import './TravelDetails.scss';
import GeneralInfos from './GeneralInfos';
import Activities from './Activities';

const TravelDetails = ({ onDesktop }) => {
  return (
    <div className="travelDetails">
      {onDesktop ? (
        <>
          <NavBarHeader isLogged onDesktop />
          <div className="container">
            <TravelsMenu />
          </div>
          <div className="containerFlex">
            <aside className="aside">
              <GeneralInfos />
            </aside>
            <div className="activities">
              <Activities />
            </div>
          </div>
        </>
      ) : (
        <>
          <HeaderConnected onDesktop={false} />
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
            <IconButton textContent="Faire une proposition" icon="add" />
            <IconButton textContent="Modifier le voyage" icon="edit" />
            <IconButton textContent="Supprimer le voyage" icon="trash" />
            <IconButton textContent="Quitter le voyage" icon="close" />
          </div>
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

TravelDetails.propTypes = {
  onDesktop: PropTypes.bool,
};

export default TravelDetails;
