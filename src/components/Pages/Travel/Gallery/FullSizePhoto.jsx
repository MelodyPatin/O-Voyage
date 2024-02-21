import { useMediaQuery } from '@mui/material';
import React from 'react';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import GeneralInfos from '../Details/Components/GeneralInfos';
import Actions from '../Details/Components/Actions';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import PictureFullSize from './Components/PictureFullSize';

const FullSizePhoto = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

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
          <PictureFullSize />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default FullSizePhoto;
