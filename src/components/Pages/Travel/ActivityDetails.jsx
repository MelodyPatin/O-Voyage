import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import './Travel.scss';
import Activities from './Components/Activities';
import ActivityResume from '../ActivityResume/ActivityResume';
import { fetchAnActivity } from '../../../actions/activity';

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
              <ActivityResume
                number="1"
                activityTitle="Parlement de Budapest"
                address="coucou"
                price="0"
                openTime="10h"
                url="site"
                description="yes"
                activityCategory="pub"
              />
            </aside>
            <Activities />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <ActivityResume
            number="1"
            activityTitle="Parlement de Budapest"
            address="coucou"
            price="0"
            openTime="10h"
            url="site"
            description="yes"
            activityCategory="pub"
          />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default ActivityDetails;
