import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Picture.scss';

import { fetchPictures } from '../../../../../actions/gallery';

const Picture = () => {
  // Extracting tripId from the URL params
  const { tripId } = useParams();
  const dispatch = useDispatch();

  const photosFetched = useSelector((state) => state.gallery.photosFetched);
  const currentPage = useSelector((state) => state.gallery.currentPage);

  // Fetching pictures when the component mounts if they haven't been fetched already
  useEffect(() => {
    if (!photosFetched) {
      dispatch(fetchPictures(tripId, currentPage));
    }
  }, [dispatch, photosFetched, tripId, currentPage]);

  // Selecting photos from the Redux store
  const photos = useSelector((state) => state.gallery.photos.photos);

  return (
    <div className="picture">
      {/* Mapping through photos and creating links to the full-size view */}
      {photos &&
        photos.map((photo, index) => (
          <Link key={index} to={`/trip/${tripId}/gallery/${photo.id}`}>
            <img
              src={photo.picture_url}
              alt="trip album uploaded by the users"
            />
          </Link>
        ))}
    </div>
  );
};

export default Picture;
