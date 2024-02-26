import {
  ADD_PICTURE,
  FETCH_A_PICTURE,
  FETCH_PICTURES,
  SHOW_PICTURES,
  fetchPictures,
  showPictures,
} from '../actions/gallery';
import api from '../api';

const galleryMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      const currentPage = 1;
      api
        .get(`/album/trip/${action.tripId}/page/${currentPage}`, currentPage)
        .then((response) => {
          store.dispatch(showPictures(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case FETCH_A_PICTURE:
      api
        .get(`/trip/${action.tripId}/photo/${action.pictureId}`)
        .then((response) => {
          store.dispatch(showPictures(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case ADD_PICTURE:
      const { base64Data } = action;

      api
        .post(`/trip/${action.tripId}/photo/`, {
          picture: base64Data,
        })
        .then((response) => {
          const currentPhotos = store.getState().gallery.photos.photos || {}; // Utiliser 'photos' au lieu de 'images'
          store.dispatch(fetchPictures(action.tripId));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
  }

  next(action);
};

export default galleryMiddleware;
