import api from '../api';
import {
  FETCH_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  saveTripActivities,
  showActivity,
} from '../actions/activity';

const activityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TRIP_ACTIVITIES:
      api
        .get(`/trip/${action.id}/activities`)
        .then((response) => {
          store.dispatch(saveTripActivities(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });

      break;

    case FETCH_AN_ACTIVITY:
      api
        .get(`/activity/${action.id}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(showActivity(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      break;

    default:
  }

  next(action);
};

export default activityMiddleware;
