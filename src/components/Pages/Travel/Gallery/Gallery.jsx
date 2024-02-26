import { useMediaQuery } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import GeneralInfos from '../Details/Components/GeneralInfos';
import Actions from '../Details/Components/Actions';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import '../Travel.scss';
import GalleryPictures from './Components/GalleryPictures';
import './Gallery.scss';
import AddPictureButton from './Components/AddPictureButton';

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
          <div className="main">
            <GalleryPictures />
            <AddPictureButton />
          </div>
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

export default Gallery;
