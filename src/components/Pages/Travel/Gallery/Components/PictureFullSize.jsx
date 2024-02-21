/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './GalleryPictures.scss';
import { useMediaQuery } from '@mui/material';
import './PictureFullSize.scss';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';

const PictureFullSize = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { tripId } = useParams();

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
          src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
          alt="trip photo uploaded by the users"
        />
      </div>
    </div>
  );
};

export default PictureFullSize;
