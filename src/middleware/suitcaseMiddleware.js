import {
  ADD_ITEM_REQUEST,
  FETCH_LIST_REQUEST,
  REMOVE_LIST_ITEM,
  UPDATE_ITEM,
  fetchListRequest,
  saveListRequest,
} from '../actions/suitcase';
import api from '../api';

const suitcaseMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      api
        .get(`/trip/${action.tripId}/items`)
        .then((response) => {
          store.dispatch(saveListRequest(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case ADD_ITEM_REQUEST:
      const { itemList } = store.getState().suitcase;

      const itemJsonData = {
        array: [...itemList, action.item],
      };

      api
        .post(`/trip/${action.tripId}/item/add`, itemJsonData)
        .then((response) => {
          store.dispatch(fetchListRequest(action.tripId));
        })
        .catch((error) => {
          console.error(error);
          alert("Erreur lors de l'ajout de l'item");
        });
      break;

    case UPDATE_ITEM:
      api
        .put(`/item/${action.item.id}`, action.item)
        .then((response) => {})
        .catch((error) => {
          console.error(error);
          alert("Erreur lors de la mise à jour de l'item");
        });
      break;

    case REMOVE_LIST_ITEM:
      const { itemId } = action;
      api
        .delete(`/item/${itemId}`)
        .then((response) => {
          store.dispatch(fetchListRequest(action.tripId));
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de l'élément", error);
          alert("Erreur lors de la suppression de l'élément", error);
        });
      break;

    default:
  }

  next(action);
};

export default suitcaseMiddleware;
