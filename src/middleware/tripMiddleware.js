import axios from 'axios';

import { fetchMyTrips, saveMyTrips } from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'FETCH_MY_TRIPS':
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

    default:
  }

  next(action);
};

export default tripMiddleware;
