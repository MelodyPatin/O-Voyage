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
  FETCH_A_TRIP_TO_UPDATE,
  saveTripInfo,
  FETCH_TRAVELERS_TO_UPDATE,
  fetchTravelersToUpdate,
  saveTripTravelers,
  SUBMIT_UPDATE_TRAVEL,
  UPDATE_TRIP_COVER,
  HANDLE_REMOVE_TRAVEL_PICTURE,
  HANDLE_ADD_TRAVEL_PICTURE,
  handleAddTravelPicture,
  DELETE_TRIP,
} from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  const { tripId, tripTitle, startDate, endDate, tripDescription } =
    store.getState().trip;

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
      // Données à envoyer au format JSON
      const tripJsonData = {
        name: tripTitle,
        startDate,
        endDate,
        description: tripDescription,
      };

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

    case SUBMIT_UPDATE_TRAVEL:
      // Données à envoyer au format JSON
      const tripUpdateJsonData = {
        name: tripTitle,
        startDate,
        endDate,
        description: tripDescription,
      };

      // Exécution de la requête
      api
        .put(`/trip/${tripId}`, tripUpdateJsonData)
        .then((response) => {
          // Traitement de la réponse
          console.log(response.data);
          window.location.href = `/trip/${tripId}`;
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
      const travelersIds = selectedTravelers.map((traveler) => traveler.key);

      console.log(travelersIds);
      // Données à envoyer au format JSON
      const travelerJsonData = {
        travelersIds,
      };

      console.log(travelerJsonData);
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

    case FETCH_A_TRIP_TO_UPDATE:
      api
        .get(`/trip/${action.tripId}`)
        .then((response) => {
          console.log(response.data);
          const { id } = response.data;
          const { name } = response.data;
          const { startDate } = response.data;
          const { endDate } = response.data;
          const { description } = response.data;
          const cities = response.data.cities.map((city) => ({
            key: city.id,
            value: city.name,
          }));
          const { country } = response.data.cities[0];
          const formattedCountry = [
            {
              key: country.id,
              value: country.name,
            },
          ];
          store.dispatch(
            saveTripInfo(
              id,
              name,
              startDate,
              endDate,
              description,
              cities,
              formattedCountry
            )
          );
          store.dispatch(fetchTravelersToUpdate(id));
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

    case FETCH_TRAVELERS_TO_UPDATE:
      api
        .get(`/trip/${action.id}/showTravelers`)
        .then((response) => {
          console.log(response.data);
          const travelers = response.data.map((traveler) => ({
            key: traveler.id,
            value: `${traveler.firstname} ${traveler.lastname}`,
          }));
          store.dispatch(saveTripTravelers(travelers));
          console.log(travelers);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case HANDLE_REMOVE_TRAVEL_PICTURE:
      api
        .post(`/trip/${action.travelId}/delete_picture`)
        .then((response) => {
          console.log(response.data);
          console.log('yoyoyoyo');
          store.dispatch(handleAddTravelPicture(action.travelId));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case HANDLE_ADD_TRAVEL_PICTURE:
      const { backgroundPictureURL } = store.getState().trip.trip;
      console.log(backgroundPictureURL);

      // Données à envoyer au format JSON
      const urlJsonData = {
        picture: backgroundPictureURL,
      };

      api
        .post(`/trip/${action.travelId}/add_picture`, urlJsonData)
        .then((response) => {
          console.log(response.data);
          console.log('bloublou');
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case UPDATE_TRIP_COVER:
      if (
        action &&
        action.tripId &&
        event &&
        event.target &&
        event.target.files &&
        event.target.files.length > 0
      ) {
        const fileInput = event.target.files[0];
        console.log(fileInput);

        if (fileInput) {
          const reader = new FileReader();
          reader.onload = (fileReaderEvent) => {
            const base64File = fileReaderEvent.target.result.split(',')[1];

            api
              .post(`/trip/${action.tripId}/add_picture`, {
                picture: base64File,
              })
              .then((response) => {
                store.dispatch(showTrip(response.data));
              })
              .catch((error) => {
                console.error(error);
              });
          };

          reader.readAsDataURL(fileInput);
        }
      }
      break;

    case DELETE_TRIP:
      // Effectuer la requête axios pour supprimer le compte utilisateur
      api
        .delete(`/trip/${action.tripId}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête:', error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default tripMiddleware;
