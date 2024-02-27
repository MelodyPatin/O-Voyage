/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import './GalleryPictures.scss';
import './PictureFullSize.scss';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';

import { fetchAPicture } from '../../../../../actions/gallery';

const PictureFullSize = () => {
  // Checking if the screen size is below 1024px to determine if it's a mobile view
  const isMobile = useMediaQuery('(max-width: 1024px)');
  // Extracting tripId and pictureId parameters from the URL
  const { tripId } = useParams();
  const { pictureId } = useParams();
  const dispatch = useDispatch();

  // Fetching the picture data when the component mounts
  useEffect(() => {
    dispatch(fetchAPicture(tripId, pictureId));
  }, [dispatch, tripId, pictureId]);

  // Selecting the picture data from the Redux store
  const photo = useSelector((state) => state.gallery.image);

  return (
    <div className="galleryPicture">
      {/* Render the "Retour" button only for non-mobile views */}
      {!isMobile && (
        <div className="addButton">
          <Link to={`/trip/${tripId}/gallery`}>
            <SimpleButton textContent="Retour" />
          </Link>
        </div>
      )}
      {/* Container for displaying the full-size picture */}
      <div className="pictureContainer">
        <img
          className="photo"
          src={photo.picture_url}
          alt="trip photo uploaded by the users"
        />
      </div>
    </div>
  );
};

export default PictureFullSize;
