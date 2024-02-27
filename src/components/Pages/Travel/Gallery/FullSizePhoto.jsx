import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import './Gallery.scss';

import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import GeneralInfos from '../Details/Components/GeneralInfos';
import Actions from '../Details/Components/Actions';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import PictureFullSize from './Components/PictureFullSize';
import SimpleButton from '../../../Reusable/Buttons/SimpleButton';

const FullSizePhoto = () => {
  // Checking if the screen size is below 1024px to determine if it's a mobile view
  const isMobile = useMediaQuery('(max-width: 1024px)');
  // Extracting the tripId parameter from the URL
  const { tripId } = useParams();

  return (
    <div className="travelPhoto">
      {!isMobile ? (
        <>
          {/* Conditionally rendering different components based on the screen size */}
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <GeneralInfos />
              <Actions />
            </aside>
            <PictureFullSize />
          </div>
        </>
      ) : (
        <>
          {/* Components for mobile screens */}
          <HeaderConnected />
          <TravelsMenu />
          <div className="main">
            <PictureFullSize />
            <Link to={`/trip/${tripId}/gallery`}>
              <SimpleButton textContent="Retour" />
            </Link>
          </div>
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default FullSizePhoto;
