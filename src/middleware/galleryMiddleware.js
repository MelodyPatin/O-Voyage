import {
  ADD_PICTURE,
  FETCH_A_PICTURE,
  FETCH_PICTURES,
  SHOW_PICTURES,
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
          const newPicture = response.data;
          const currentPhotos = store.getState().gallery.images || [];

          store.dispatch({
            type: SHOW_PICTURES,
            pictures: [newPicture, ...currentPhotos],
          });
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
