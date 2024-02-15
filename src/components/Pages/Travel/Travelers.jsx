import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import './Travel.scss';
import GeneralInfos from './Components/GeneralInfos';
import Activities from './Components/Activities';
import TravelersList from './Components/TravelersList';

const Travelers = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const { id } = useParams();
  const myTrips = useSelector((state) => state.trip.myTrips);

  // Convertissez l'ID en nombre (si nécessaire)
  const tripId = parseInt(id, 10);

  // Trouvez le voyage correspondant dans le state
  const selectedTrip = myTrips.find((trip) => trip.id === tripId);

  if (!selectedTrip) {
    // Gérer le cas où le voyage n'est pas trouvé
    return <div>Voyage non trouvé</div>;
  }

  return (
    <div className="travelDetails">
      {!isMobile ? (
        <>
          <NavBarHeader isLogged onDesktop />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <TravelersList />
            </aside>
            <Activities onDesktop />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <TravelsMenu />
          <GeneralInfos />
          <TravelersList />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default Travelers;
