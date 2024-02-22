import React, { useEffect } from 'react';
import './Picture.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPictures } from '../../../../../actions/gallery';

const Picture = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatchez l'action pour récupérer la liste lorsque le composant est monté
    dispatch(fetchPictures(tripId));
  }, []);

  const photos = useSelector(
    (state) => state.gallery.images?.photos?.map((photo) => photo) || []
  );

  return (
    <div className="picture">
      {photos.map((photo, index) => (
        <Link key={index} to={`/trip/${tripId}/gallery/${photo.id}`}>
          <img src={photo.picture_url} alt="trip album uploaded by the users" />
        </Link>
      ))}
    </div>
  );
};

export default Picture;
