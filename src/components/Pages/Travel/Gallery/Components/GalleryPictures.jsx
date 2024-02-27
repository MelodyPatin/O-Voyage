import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './GalleryPictures.scss';

import Picture from './Picture';
import AddPictureButton from './AddPictureButton';

import {
  fetchPictures,
  handleNextPage,
  handlePreviousPage,
} from '../../../../../actions/gallery';

const GalleryPictures = () => {
  // Extracting tripId from the URL params
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.gallery.currentPage);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const arrayPictures = useSelector((state) => state.gallery.photos.photos);

  // Function to handle clicking on the "Précédent" button
  const clickPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(handlePreviousPage());
      dispatch(fetchPictures(tripId, currentPage - 1));
    }
  };

  // Function to handle clicking on the "Suivant" button
  const clickNextPage = () => {
    if (arrayPictures && arrayPictures.length === 12) {
      dispatch(handleNextPage());
      dispatch(fetchPictures(tripId, currentPage + 1));
    }
  };

  return (
    <div className="galleryPicture">
      {/* Conditional rendering of AddPictureButton for non-mobile views */}
      {!isMobile && (
        <div className="addButton">
          <AddPictureButton />
        </div>
      )}
      {/* Container for displaying the pictures */}
      <div className="pictureContainer">
        <Picture />
      </div>
      {/* Navigation buttons for pagination */}
      <div className="buttons">
        {currentPage > 1 && (
          <button
            type="button"
            className="pageButton"
            onClick={clickPreviousPage}
          >
            Précédent
          </button>
        )}
        {arrayPictures && arrayPictures.length === 12 && (
          <button type="button" className="pageButton" onClick={clickNextPage}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
};

export default GalleryPictures;
