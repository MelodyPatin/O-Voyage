import {
  FETCH_A_PICTURE,
  FETCH_PICTURES,
  showPictures,
} from '../actions/gallery';
import api from '../api';

const galleryMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      try {
        const currentPage = 1;
        const response = await api.get(
          `/album/${action.tripId}?page=${currentPage}`
        );
        store.dispatch(showPictures(response.data));
      } catch (error) {
        console.error(error);
        // Handle the error
      }
      break;

    case FETCH_A_PICTURE:
      try {
        console.log('Before API call');
        const currentPage = 1;
        const response = await api.get(
          `/album/trip/${action.tripId}/picture/${action.pictureId}`
        );
        console.log('la photo :', JSON.stringify(response.data));
        store.dispatch(showPictures(response.data));
      } catch (error) {
        console.error(error);
        // Handle the error
      }
      break;

    default:
  }

  next(action);
};

export default galleryMiddleware;
