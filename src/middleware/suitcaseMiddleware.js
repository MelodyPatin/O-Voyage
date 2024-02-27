import {
  ADD_ITEM_REQUEST,
  FETCH_LIST_REQUEST,
  UPDATE_ITEM,
  fetchListRequest,
  //REMOVE_LIST_ITEM,
  //SEND_LIST_UPDATE,
  saveListRequest,
} from '../actions/suitcase';
import api from '../api';

const suitcaseMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:

      api
        .get(`/trip/${action.tripId}/items`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveListRequest(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Handle the error
        });
      break;

    case ADD_ITEM_REQUEST:

    const {itemList} = store.getState().suitcase;

    const itemJsonData = {
      array: [...itemList, action.item]
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
        .then((response) => {
        })
        .catch((error) => {
          console.error(error);
          alert("Erreur lors de la mise à jour de l'item");
        });
      break;

    /* case SEND_LIST_UPDATE:
      try {
        // Effectuez l'appel API DELETE pour supprimer la liste existante
        await api.delete(`/item/${action.itemId}`);
        // Effectuez l'appel API POST pour enregistrer la nouvelle liste
        await api.post(
          `/trip/${action.tripId}/item/${action.itemId}/add`,
          action.updatedList
        );
        // Dispatchez l'action pour mettre à jour la liste dans le store Redux
        store.dispatch(saveListRequest(action.updatedList));
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de la liste', error);
        // Gérez l'erreur ici
      }
      break; */

    /* case REMOVE_LIST_ITEM:
      try {
        // Effectuez l'appel API DELETE pour supprimer l'élément
        const { itemId } = action;
        await api.delete(`/item/${itemId}`);
      } catch (error) {
        console.error("Erreur lors de la suppression de l'élément", error);
        // Gérez l'erreur ici
      }
      break; */

    default:
  }

  next(action);
};

export default suitcaseMiddleware;
