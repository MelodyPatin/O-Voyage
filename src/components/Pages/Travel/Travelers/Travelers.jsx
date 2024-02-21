import { React, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import '../Travel.scss';
import GeneralInfos from '../Details/Components/GeneralInfos';
import Activities from '../Activity/Activities/Activities';
import TravelersList from './Components/TravelersList';
import { fetchTravelers } from '../../../../actions/trip';

const Travelers = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTravelers(tripId));
  }, [dispatch, tripId]);

  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="travelDetails">
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <TravelersList />
            </aside>
            <Activities />
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
