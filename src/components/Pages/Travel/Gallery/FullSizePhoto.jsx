import { useMediaQuery } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import GeneralInfos from '../Details/Components/GeneralInfos';
import Actions from '../Details/Components/Actions';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import PictureFullSize from './Components/PictureFullSize';
import SimpleButton from '../../../Reusable/Buttons/SimpleButton';
import './Gallery.scss';

const FullSizePhoto = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { tripId } = useParams();

  return (
    <div className="travelPhoto">
      {!isMobile ? (
        <>
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
