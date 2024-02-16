import axios from 'axios';

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
} from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MY_TRIPS:
      axios
        .get('http://localhost:8001/api/mytrips', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveMyTrips(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    case FETCH_COUNTRIES:
      axios
        .get('http://localhost:8001/api/country', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
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
      axios
        .post('http://localhost:8001/api/trip/add', tripJsonData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
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
      const { selectedCities, tripId } = store.getState().trip;

      // Récupérer les clés de toutes les villes sélectionnées sous forme de tableau de nombres
      const cityKeys = selectedCities.map((city) => city.key);
      console.log(cityKeys[0]);

      // Données à envoyer au format JSON
      const cityJsonData = {
        cities: cityKeys[0],
      };

      // Exécution de la requête
      axios
        .post(`http://localhost:8001/api/trip/${tripId}/addcity`, cityJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response);
          // store.dispatch(handleSuccessfulLogin(response.data.token));
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    /*     case ADD_TRAVELER_TO_TRAVEL:
      const { tripTitle, startDate, endDate, tripDescription } =
        store.getState().trip;

      // Données à envoyer au format JSON
      const tripJsonData = {
        name: tripTitle,
        startDate,
        endDate,
        description: tripDescription,
      };

      // Exécution de la requête
      axios
        .post('http://localhost:8001/api/trip/add', tripJsonData)
        .then((response) => {
          // Traitement de la réponse
          // store.dispatch(handleSuccessfulLogin(response.data.token));
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break; */

    case FETCH_CITIES:
      const countryId = action.countryId;
      axios
        .get(`http://localhost:8001/api/country/${countryId}/cities`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          store.dispatch(saveCities(response.data.cities));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    default:
      break;
  }

  next(action);
};

export default tripMiddleware;
