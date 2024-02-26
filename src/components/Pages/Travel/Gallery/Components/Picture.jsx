import React, { useCallback, useEffect, useMemo } from 'react';
import './Picture.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPictures } from '../../../../../actions/gallery';

const Picture = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();

  const photosFetched = useSelector((state) => state.gallery.photosFetched);
  const currentPage = useSelector((state) => state.gallery.currentPage);

  useEffect(() => {
    if (!photosFetched) {
      dispatch(fetchPictures(tripId, currentPage));
    }
  }, [dispatch, photosFetched, tripId]);

  const selectPhotos = useCallback(
    (state) => state.gallery.photos?.photos || [],
    []
  );

/*   const photos = useSelector((state) => {
    const selectedPhotos = selectPhotos(state);
    return selectedPhotos.map((photo) => photo);
  }); */

  const photos = useSelector((state) => state.gallery.photos.photos);

  return (
    <div className="picture">
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
