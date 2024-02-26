import { useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import TravelersList from '../Travelers/Components/TravelersList';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import SuitcaseList from './Components/SuitcaseList';
import Activities from '../Activity/Activities/Activities';
import '../Travel.scss';
import GeneralInfos from '../Details/Components/GeneralInfos';

import { fetchListRequest } from '../../../../actions/suitcase';

const Suitcase = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { tripId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatchez l'action pour récupérer la liste lorsque le composant est monté
    dispatch(fetchListRequest(tripId));
  }, []);

  return (
    <div className="suitcase">
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <SuitcaseList />
            </aside>
            <Activities />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <TravelsMenu />
          <GeneralInfos />
          <SuitcaseList />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default Suitcase;
