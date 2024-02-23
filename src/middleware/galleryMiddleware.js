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
      try {
        const currentPage = 1;
        const response = await api.get(
          `/album/trip/${action.tripId}/page/${currentPage}`,
          currentPage
        );
        store.dispatch(showPictures(response.data));
      } catch (error) {
        console.error(error);
        // Handle the error
      }
      break;

    case FETCH_A_PICTURE:
      try {
        const response = await api.get(
          `/trip/${action.tripId}/photo/${action.pictureId}`
        );
        store.dispatch(showPictures(response.data));
      } catch (error) {
        console.error(error);
        // Handle the error
      }
      break;

    case ADD_PICTURE:
      try {
        const { base64Data } = action;

        const response = await api.post(`/trip/${action.tripId}/photo/`, {
          picture: base64Data,
        });
        const newPicture = response.data;
        store.dispatch({
          type: SHOW_PICTURES,
          pictures: [newPicture, ...store.getState().gallery.images],
        });
      } catch (error) {
        console.error(error);
      }
      break;

    default:
  }

  next(action);
};

export default galleryMiddleware;
