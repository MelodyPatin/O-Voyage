import axios from 'axios';

import {
  FETCH_MY_TRIPS,
  saveMyTrips,
  FETCH_COUNTRIES,
  SUBMIT_CREATE_TRAVEL,
  saveCountries,
  FETCH_CITIES,
  saveCities,
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
      console.log('coucou');
      break;

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
