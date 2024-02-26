import { React, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import GeneralInfos from './Components/GeneralInfos';
import Activities from '../Activity/Activities/Activities';
import Actions from './Components/Actions';

import '../Travel.scss';

import { fetchATrip } from '../../../../actions/trip';

const TravelDetails = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  // Fetch trip details when the component mounts
  useEffect(() => {
    dispatch(fetchATrip(tripId));
  }, [dispatch, tripId]);

  return (
    <div className="travelDetails">
      {!isMobile ? ( // Desktop view
        <>
          {/* Desktop navigation header */}
          <NavBarHeader />
          {/* Sidebar menu for desktop */}
          <TravelsMenu />
          {/* Main content container for desktop */}
          <div className="containerFlex">
            {/* Sidebar (aside) for desktop */}
            <aside className="aside">
              {/* Component displaying the general informations of the travel */}
              <GeneralInfos />
              <Actions />
            </aside>
            {/* Component displaying the list of activities */}
            <Activities />
          </div>
        </>
      ) : (
        // Mobile view
        <>
          {/* Mobile navigation header */}
          <HeaderConnected />
          {/* Component displaying the general informations of the travel for mobile */}
          <TravelsMenu />
          <GeneralInfos />
          {/* Component displaying the list of activities */}
          <Activities />
          {/* Component displaying the buttons to delete or update or leave the travel */}
          <Actions />
          {/* Mobile navigation bar */}
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default TravelDetails;
