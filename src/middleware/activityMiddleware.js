import api from '../api';
import {
  FETCH_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  saveTripActivities,
  showActivity,
  FETCH_ACTIVITY_LIKES,
  showActivityLikes,
} from '../actions/activity';

const activityMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_TRIP_ACTIVITIES:
      api
        .get(`/trip/${action.tripId}/activities`)
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
          store.dispatch(showActivity(response.data));
        })
        .catch((error) => {
          console.error('Error in FETCH_ACTIVITY_LIKES:', error);
        });

      break;

    case FETCH_ACTIVITY_LIKES:
      api
        .get(`/vote/${action.activityId}/`)
        .then((response) => {
          const likes = response.data;
          store.dispatch(showActivityLikes(action.activityId, likes));
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
