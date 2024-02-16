import { React, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import './Travel.scss';
import GeneralInfos from './Components/GeneralInfos';
import Activities from './Components/Activities';
import Actions from './Components/Actions';
import { fetchATrip } from '../../../actions/trip';
import { fetchTripActivities } from '../../../actions/activity';

const TravelDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchATrip(id));
    dispatch(fetchTripActivities(id));
  }, [dispatch, id]);

  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="travelDetails">
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <GeneralInfos />
              <Actions />
            </aside>
            <Activities />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <TravelsMenu />
          <GeneralInfos />
          <Activities />
          <Actions />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default TravelDetails;
