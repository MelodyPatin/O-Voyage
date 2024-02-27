import {
  FETCH_LIST_REQUEST,
  REMOVE_LIST_ITEM,
  SEND_LIST_UPDATE,
  saveListRequest,
} from '../actions/suitcase';
import api from '../api';

const suitcaseMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      try {
        const response = await api.get(`/trip/${action.tripId}/items`);
        store.dispatch(saveListRequest(response.data));
      } catch (error) {
        console.error(error);
      }
      break;

    case SEND_LIST_UPDATE:
      try {
        await api.delete(`/item/${action.itemId}`);
        await api.post(
          `/trip/${action.tripId}/item/${action.itemId}/add`,
          action.updatedList
        );
        store.dispatch(saveListRequest(action.updatedList));
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de la liste', error);
      }
      break;

    case REMOVE_LIST_ITEM:
      try {
        const { itemId } = action;
        await api.delete(`/item/${itemId}`);
      } catch (error) {
        console.error("Erreur lors de la suppression de l'élément", error);
      }
      break;

    default:
  }

  next(action);
};

export default suitcaseMiddleware;
