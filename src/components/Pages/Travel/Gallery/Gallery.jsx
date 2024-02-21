import { useMediaQuery } from '@mui/material';
import React from 'react';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import GeneralInfos from '../Details/Components/GeneralInfos';
import Actions from '../Details/Components/Actions';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import '../Travel.scss';
import GalleryPictures from './Components/GalleryPictures';

const Gallery = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="travelGallery">
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <GeneralInfos />
              <Actions />
            </aside>
            <GalleryPictures />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <TravelsMenu />
          <GalleryPictures />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default Gallery;
