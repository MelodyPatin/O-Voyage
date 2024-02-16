import api from '../api';
import {
  FETCH_A_TRIP,
  FETCH_MY_TRIPS,
  FETCH_TRAVELERS,
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
        });

      break;

    case FETCH_TRAVELERS:
      api
        .get(`/trip/${action.id}/showTravelers`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(showTravelers(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      break;

    default:
  }

  next(action);
};

export default tripMiddleware;
