import React from 'react';
import './GalleryPictures.scss';
import { useMediaQuery } from '@mui/material';
import IconButton from '../../../../Reusable/Buttons/IconButton';
import Picture from './Picture';
import AddPictureButton from './AddPictureButton';
import {
  fetchPictures,
  handleNextPage,
  handlePreviousPage,
} from '../../../../../actions/gallery';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const GalleryPictures = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.gallery.currentPage);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const arrayPictures = useSelector((state) => state.gallery.photos.photos);

  const clickPreviousPage = () => {
    if (currentPage > 1) {
    dispatch(handlePreviousPage());
    dispatch(fetchPictures(tripId, currentPage-1));
    }
  };

  const clickNextPage = () => {
    if (arrayPictures && arrayPictures.length === 12) {
      dispatch(handleNextPage());
      dispatch(fetchPictures(tripId, currentPage+1));
    }
  };

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
      <div className="buttons">
        {currentPage > 1 && (
          <button className="pageButton" onClick={clickPreviousPage}>
            Précédent
          </button>
        )}
        {arrayPictures && arrayPictures.length === 12 && (
          <button className="pageButton" onClick={clickNextPage}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
};

export default GalleryPictures;
