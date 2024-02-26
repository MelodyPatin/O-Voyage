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
  ADD_TRAVELER_TO_TRAVEL_UPDATE,
  LEAVE_TRIP,
  handleStepReset,
} from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  const {
    tripId,
    tripTitle,
    startDate,
    endDate,
    tripDescription,
    selectedTravelers,
  } = store.getState().trip;
  const travelersIds = selectedTravelers.map((traveler) => traveler.key);

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
          console.log(response.data);
          // Traitement de la réponse
          store.dispatch(handleSuccessfulCreateTravel(response.data));
          store.dispatch(addCityToTravel());
          store.dispatch(addTravelerToTravel());
          store.dispatch(handleStepReset());
          // Redirection après le succès de la requête
          window.location.href = `/trip/${response.data}`;
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
          alert('Erreur lors de la création du voyage.');
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
          store.dispatch(addCityToTravel());
          store.dispatch(addTravelerToTravel());
          store.dispatch(handleStepReset());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
          alert('Erreur lors de la mise à jour du voyage.');
        });

      break;

    case ADD_CITY_TO_TRAVEL:
      const { selectedCities } = store.getState().trip;

      // Récupérer les clés de toutes les villes sélectionnées sous forme de tableau de nombres
      const cityKeys = selectedCities.map((city) => city.key);

      // console.log(cityKeys);

      // Données à envoyer au format JSON
      const cityJsonData = {
        cityKeys,
      };

      // Exécution de la requête
      api
        .put(`/trip/${tripId}/addcity`, cityJsonData)
        .then((response) => {
          // Traitement de la réponse
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });
      break;

    case ADD_TRAVELER_TO_TRAVEL:
      // Données à envoyer au format JSON
      const travelerJsonData = {
        travelersIds,
      };

      // Exécution de la requête
      api
        .put(`/trip/${tripId}/addTraveler`, travelerJsonData)
        .then((response) => {
          // Traitement de la réponse
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });
      break;

    case ADD_TRAVELER_TO_TRAVEL_UPDATE:
      // Données à envoyer au format JSON
      const travelerUpdateJsonData = {
        travelersIds,
      };

      // Exécution de la requête
      api
        .put(`/trip/${action.travelId}/addTraveler`, travelerUpdateJsonData)
        .then((response) => {
          // Traitement de la réponse
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          alert("Echec de l'ajout du voyageur");
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
          const travelers = response.data.map((traveler) => ({
            key: traveler.id,
            value: `${traveler.firstname} ${traveler.lastname}`,
          }));
          store.dispatch(saveTripTravelers(travelers));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case HANDLE_REMOVE_TRAVEL_PICTURE:
      api
        .post(`/trip/${action.travelId}/delete_picture`)
        .then((response) => {
          store.dispatch(handleAddTravelPicture(action.travelId));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case HANDLE_ADD_TRAVEL_PICTURE:
      const { backgroundPictureURL } = store.getState().trip.trip;

      // Données à envoyer au format JSON
      const urlJsonData = {
        picture: backgroundPictureURL,
      };

      api
        .post(`/trip/${action.travelId}/add_picture`, urlJsonData)
        .then((response) => {
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
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête:', error);
          alert("Echec de la suppression du voyage");
        });
      break;

    case LEAVE_TRIP:
      // Effectuer la requête axios pour supprimer le compte utilisateur
      api
        .delete(`/trip/${action.tripId}/leaveTrip`)
        .then((response) => {
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête:', error);
          alert("Echec : voyage non quitté");
        });
      break;

    default:
      break;
  }

  next(action);
};

export default tripMiddleware;
