import { FETCH_FAQ_CONTENT, saveFaqContent } from '../actions/content';
import api from '../api';

const contentMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_FAQ_CONTENT:
      api
        .get(`/faq`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveFaqContent(response.data));
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
