import {
  FETCH_FAQ_CONTENT,
  FETCH_HISTORY_CONTENT,
  saveFaqContent,
  saveHistoryContent,
} from '../actions/content';
import api from '../api';

const contentMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_FAQ_CONTENT:
      api
        .get(`/faq`)
        .then((response) => {
          store.dispatch(saveFaqContent(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });

      break;

    case FETCH_HISTORY_CONTENT:
      api
        .get(`/our_history`)
        .then((response) => {
          console.log("Réponse de l'API :", response.data);
          store.dispatch(saveHistoryContent(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });

      break;

    default:
  }

  next(action);
};

export default contentMiddleware;
