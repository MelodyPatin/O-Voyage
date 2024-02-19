import api from '../api';

import {
  FETCH_MY_TRIPS,
  saveMyTrips,
  FETCH_COUNTRIES,
  SUBMIT_CREATE_TRAVEL,
  saveCountries,
  FETCH_CITIES,
  saveCities,
  ADD_CITY_TO_TRAVEL,
  ADD_TRAVELER_TO_TRAVEL,
  handleSuccessfulCreateTravel,
  addCityToTravel,
  addTravelerToTravel,
  FETCH_A_TRIP,
  FETCH_TRAVELERS,
  showTravelers,
  showTrip,
} from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  const { tripId } = store.getState().trip;

  switch (action.type) {
    case FETCH_MY_TRIPS:
      api
        .get('/mytrips')
        .then((response) => {
          store.dispatch(saveMyTrips(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    case FETCH_COUNTRIES:
      api
        .get('/country')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    case SUBMIT_CREATE_TRAVEL:
      const { tripTitle, startDate, endDate, tripDescription } =
        store.getState().trip;

      // Données à envoyer au format JSON
      const tripJsonData = {
        name: tripTitle,
        startDate,
        endDate,
        description: tripDescription,
      };

      console.log(tripJsonData);

      // Exécution de la requête
      api
        .post('/trip/add', tripJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response.data);
          store.dispatch(handleSuccessfulCreateTravel(response.data));
          store.dispatch(addCityToTravel());
          store.dispatch(addTravelerToTravel());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case ADD_CITY_TO_TRAVEL:
      const { selectedCities } = store.getState().trip;

      // Récupérer les clés de toutes les villes sélectionnées sous forme de tableau de nombres
      const cityKeys = selectedCities.map((city) => city.key);
      console.log(cityKeys[0]);

      // Données à envoyer au format JSON
      const cityJsonData = {
        id: cityKeys[0],
      };

      // Exécution de la requête
      api
        .put(`/trip/${tripId}/addcity`, cityJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response);
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });
      break;

    case ADD_TRAVELER_TO_TRAVEL:
      const { selectedTravelers } = store.getState().trip;

      // Récupérer les clés de toutes les villes sélectionnées sous forme de tableau de nombres
      const travelersKeys = selectedTravelers.map((city) => city.key);
      console.log(travelersKeys[0]);

      // Données à envoyer au format JSON
      const travelerJsonData = {
        id: travelersKeys[0],
      };

      // Exécution de la requête
      api
        .put(`/trip/${tripId}/addTraveler`, travelerJsonData)
        .then((response) => {
          // Traitement de la réponse
          // Redirection vers l'URL du voyage une fois que l'ajout du voyageur est effectué avec succès
          window.location.href = `/trip/${tripId}`;
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });
      break;

    case FETCH_A_TRIP:
      api
        .get(`/trip/${action.id}`)
        .then((response) => {
          store.dispatch(showTrip(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case FETCH_CITIES:
      const { countryId } = action;
      api
        .get(`/country/${countryId}/cities`)
        .then((response) => {
          store.dispatch(saveCities(response.data.cities));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    case FETCH_TRAVELERS:
      api
        .get(`/trip/${action.id}/showTravelers`)
        .then((response) => {
          store.dispatch(showTravelers(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default tripMiddleware;
