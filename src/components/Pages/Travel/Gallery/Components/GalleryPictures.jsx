import React from 'react';
import './GalleryPictures.scss';
import { useMediaQuery } from '@mui/material';
import IconButton from '../../../../Reusable/Buttons/IconButton';
import Picture from './Picture';
import AddPictureButton from './AddPictureButton';

const GalleryPictures = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="galleryPicture">
      {!isMobile && (
        <div className="addButton">
          <AddPictureButton />
        </div>
      )}
      <div className="pictureContainer">
        <Picture />
      </div>
    </div>
  );
};

export default GalleryPictures;
