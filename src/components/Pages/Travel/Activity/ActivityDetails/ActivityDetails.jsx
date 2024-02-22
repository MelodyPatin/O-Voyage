import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import HeaderConnected from '../../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../../Reusable/NavBarHeader/NavBarHeader';
import '../../Travel.scss';
import Activities from '../Activities/Activities';
import ActivityResume from './Components/ActivityResume';
import { fetchAnActivity } from '../../../../../actions/activity';

const ActivityDetails = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const { activityId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnActivity(activityId));
  }, [dispatch, activityId]);

  return (
    <div className="travelDetails">
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <ActivityResume />
            </aside>
            <Activities />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <ActivityResume />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default ActivityDetails;
