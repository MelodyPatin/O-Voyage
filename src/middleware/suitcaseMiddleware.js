import { FETCH_LIST_REQUEST, saveListRequest } from '../actions/suitcase';
import api from '../api';

const suitcaseMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      const { tripId } = action;
      try {
        const response = await api.get(`/trip/${tripId}/items`);
        console.log(`la liste : ${response}`);
        store.dispatch(saveListRequest(response.data));
      } catch (error) {
        console.error(error);
        // Handle the error
      }
      break;

    default:
  }

  next(action);
};

export default suitcaseMiddleware;
