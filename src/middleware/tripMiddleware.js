import api from '../api';
import {
  FETCH_A_TRIP,
  FETCH_MY_TRIPS,
  saveMyTrips,
  showTrip,
} from '../actions/trip';

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

    case FETCH_A_TRIP:
      api
        .get(`/trip/${action.id}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(showTrip(response.data));
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
