/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './GalleryPictures.scss';
import { useMediaQuery } from '@mui/material';
import './PictureFullSize.scss';
import { useDispatch, useSelector } from 'react-redux';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import { fetchAPicture } from '../../../../../actions/gallery';

const PictureFullSize = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { tripId } = useParams();
  const { pictureId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatchez l'action pour récupérer la liste lorsque le composant est monté
    dispatch(fetchAPicture(tripId, pictureId));
  }, [dispatch, tripId, pictureId]);

  const photo = useSelector((state) => state.gallery.gallery.images);
  console.log(photo);
  return (
    <div className="galleryPicture">
      {!isMobile && (
        <div className="addButton">
          <Link to={`/trip/${tripId}/gallery`}>
            <SimpleButton textContent="Retour" />
          </Link>
        </div>
      )}
      <div className="pictureContainer">
        <img
          className="photo"
          src={photo}
          alt="trip photo uploaded by the users"
        />
      </div>
    </div>
  );
};

export default PictureFullSize;
