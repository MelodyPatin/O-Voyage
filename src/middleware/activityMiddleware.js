import api from '../api';
import {
  FETCH_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  saveTripActivities,
  showActivity,
  SUBMIT_CREATE_ACTIVITY,
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

    case SUBMIT_CREATE_ACTIVITY:
      const { id } = store.getState().trip.trip;

      console.log(id);

      const {
        activityTitle,
        activityAddress,
        activityPrice,
        activityDates,
        selectedCities,
        activityUrl,
        activityDescription,
      } = store.getState().activity;

      const cityKeys = selectedCities.map((city) => city.key);
      console.log(cityKeys[0]);

      // Données à envoyer au format JSON
      const activityJsonData = {
        name: activityTitle,
        postalAddress: activityAddress,
        price: activityPrice,
        openingTimeAndDays: activityDates,
        city: cityKeys[0],
        url: activityUrl,
        description: activityDescription
      };

      console.log(activityJsonData);

      // Exécution de la requête
      api
        .post(`/trip/${id}/activity/add`, activityJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    default:
  }

  next(action);
};

export default activityMiddleware;
