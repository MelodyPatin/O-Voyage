import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';

import '../../Travel.scss';

import HeaderConnected from '../../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../../Reusable/NavBarHeader/NavBarHeader';
import Activities from '../Activities/Activities';
import ActivityResume from './Components/ActivityResume';

import { fetchAnActivity } from '../../../../../actions/activity';

const ActivityDetails = () => {
  // Check if the current view is on a mobile device
  const isMobile = useMediaQuery('(max-width: 1024px)');

  // Extract the activityId parameter from the route
  const { activityId } = useParams();
  const dispatch = useDispatch();

  // Fetch activity details on component mount or when activityId changes
  useEffect(() => {
    dispatch(fetchAnActivity(activityId));
  }, [dispatch, activityId]);

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
              {/* Component displaying a summary of the activity */}
              <ActivityResume />
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
          {/* Component displaying a summary of the activity for mobile */}
          <ActivityResume />
          {/* Mobile navigation bar */}
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default ActivityDetails;
