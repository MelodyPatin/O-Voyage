import api from '../api';
import {
  FETCH_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  FETCH_AN_ACTIVITY_TO_UPDATE,
  saveTripActivities,
  showActivity,
  SUBMIT_CREATE_ACTIVITY,
  handleAddTag,
  HANDLE_ADD_TAG,
  saveActivityInfo,
  SUBMIT_UPDATE_ACTIVITY,
  DELETE_ACTIVITY,
  HANDLE_ACTIVITY_DATE,
} from '../actions/activity';

const activityMiddleware = (store) => (next) => async (action) => {
  const { id } = store.getState().trip.trip;
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

    case FETCH_AN_ACTIVITY_TO_UPDATE:
      api
        .get(`/activity/${action.id}`)
        .then((response) => {
          console.log(response.data);
          const activityTitle = response.data.name;
          const activityPrice = response.data.price;
          const activityUrl = response.data.url;
          const activityDates = response.data.openingTimeAndDays;
          const activityDescription = response.data.description;
          const activityAddress = response.data.postalAddress;
          const { city } = response.data;
          const selectedCities = [
            {
              key: city.id,
              value: city.name,
            },
          ];
          const selectedTag = response.data.tags;
          store.dispatch(
            saveActivityInfo(
              activityTitle,
              activityPrice,
              activityUrl,
              activityDates,
              activityDescription,
              activityAddress,
              selectedCities,
              selectedTag
            )
          );
        })
        .catch((error) => {
          console.error(error);
        });

      break;

    case SUBMIT_CREATE_ACTIVITY:
      // Données à envoyer au format JSON
      const activityJsonData = {
        name: activityTitle,
        postalAddress: activityAddress,
        price: activityPrice,
        openingTimeAndDays: activityDates,
        city: cityKeys[0],
        url: activityUrl,
        description: activityDescription,
      };

      console.log(activityJsonData);

      // Exécution de la requête
      api
        .post(`/trip/${id}/activity/add`, activityJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response.data);
          store.dispatch(handleAddTag(response.data.id));
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case SUBMIT_UPDATE_ACTIVITY:
      const cityId = selectedCities.map((city) => city.key);

      // Données à envoyer au format JSON
      const activityUpdateJsonData = {
        name: activityTitle,
        postalAddress: activityAddress,
        price: activityPrice,
        openingTimeAndDays: activityDates,
        city: cityId[0],
        url: activityUrl,
        description: activityDescription,
      };

      console.log(activityUpdateJsonData);

      // Exécution de la requête
      api
        .put(`/activity/${action.activityId}`, activityUpdateJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response.data);
          store.dispatch(handleAddTag(response.data.id));
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case HANDLE_ADD_TAG:
      const { selectedTag } = store.getState().activity;

      console.log(selectedTag);
      const tagId = selectedTag[0].key;
      console.log(tagId);

      // Données à envoyer au format JSON
      const tagJsonData = {
        tag: tagId,
      };

      console.log(tagJsonData);

      // Exécution de la requête
      api
        .put(`/activity/${action.activityId}/addtag`, tagJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response.data);
          window.location.href = `/trip/${id}`;
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case DELETE_ACTIVITY:
      // Effectuer la requête axios pour supprimer le compte utilisateur
      api
        .delete(`/activity/${action.activityId}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête:', error);
        });
        
    case HANDLE_ACTIVITY_DATE:

      // Données à envoyer au format JSON
      const activityDateUpdateJsonData = {
        date: action.newDate,
      };

      console.log(activityDateUpdateJsonData);

      // Exécution de la requête
      api
        .put(`/activity/${action.activityId}/date`, activityDateUpdateJsonData)
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
