
import { FETCH_MY_TRIPS, saveMyTrips } from '../actions/trip';
import api from '../api';

const tripMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MY_TRIPS:
      api
        .get('/mytrips')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveMyTrips(response.data));
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

export default tripMiddleware;
