import React from 'react';
import './GalleryPictures.scss';
import { useMediaQuery } from '@mui/material';
import IconButton from '../../../../Reusable/Buttons/IconButton';
import Picture from './Picture';

const GalleryPictures = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="galleryPicture">
      {!isMobile && (
        <div className="addButton">
          <IconButton textContent="Ajouter une photo" icon="add" />
        </div>
      )}
      <div className="pictureContainer">
        <Picture />
      </div>
    </div>
  );
};

export default GalleryPictures;
