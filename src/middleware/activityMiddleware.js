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
  FETCH_TAGS,
  saveTags,
  clearCreateActivityInfos,
  HANDLE_REMOVE_TAG,
  handleRemoveTag,
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
    selectedTag,
  } = store.getState().activity;

  const cityKeys = selectedCities.map((city) => city.key);

  switch (action.type) {
    // Fetch activities for a specific trip
    case FETCH_TRIP_ACTIVITIES:
      api
        .get(`/trip/${action.tripId}/activities`)
        .then((response) => {
          store.dispatch(saveTripActivities(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Error handling
        });

      break;

    // Fetch details of a specific activity
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

    // Fetch details of an activity for updating
    case FETCH_AN_ACTIVITY_TO_UPDATE:
      api
        .get(`/activity/${action.id}`)
        .then((response) => {
          // Extract data from the response to pre-fill form fields
          // Dispatch action to save the pre-filled information
          const activityTitleUpdate = response.data.name;
          const activityPriceUpdate = response.data.price;
          const activityUrlUpdate = response.data.url;
          const activityDatesUpdate = response.data.openingTimeAndDays;
          const activityDescriptionUpdate = response.data.description;
          const activityAddressUpdate = response.data.postalAddress;
          const { city } = response.data;
          const selectedCitiesUpdate = [
            {
              key: city.id,
              value: city.name,
            },
          ];
          const selectedTagUpdate = response.data.tags;

          store.dispatch(
            saveActivityInfo(
              activityTitleUpdate,
              activityPriceUpdate,
              activityUrlUpdate,
              activityDatesUpdate,
              activityDescriptionUpdate,
              activityAddressUpdate,
              selectedCitiesUpdate,
              selectedTagUpdate
            )
          );
        })
        .catch((error) => {
          console.error(error);
        });

      break;

    case SUBMIT_CREATE_ACTIVITY:
      // Prepare data for creating a new activity
      const activityJsonData = {
        name: activityTitle,
        postalAddress: activityAddress,
        price: activityPrice,
        openingTimeAndDays: activityDates,
        city: cityKeys[0],
        url: activityUrl,
        description: activityDescription,
      };

      api
        .post(`/trip/${id}/activity/add`, activityJsonData)
        .then((response) => {
          // Handle the response
          store.dispatch(handleAddTag(response.data.id));
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          alert("Erreur lors de la création de l'activité.");
        });

      break;

    // Submit updates for an existing activity
    case SUBMIT_UPDATE_ACTIVITY:
      const cityId = selectedCities.map((city) => city.key);

      // Prepare data for updating an activity
      const activityUpdateJsonData = {
        name: activityTitle,
        postalAddress: activityAddress,
        price: activityPrice,
        openingTimeAndDays: activityDates,
        city: cityId[0],
        url: activityUrl,
        description: activityDescription,
      };

      api
        .put(`/activity/${action.activityId}`, activityUpdateJsonData)
        .then((response) => {
          // Handle the response
          store.dispatch(handleRemoveTag(response.data.id));
          store.dispatch(handleAddTag(response.data.id));
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          alert("Erreur lors de la mise à jour de l'activité.");
        });

      break;

    // Add a tag to an activity
    case HANDLE_ADD_TAG:
      const addTagId = store.getState().activity.selectedTag[0].id; // Rename tagId to removeTagId

      const tagJsonData = {
        tag: addTagId,
      };

      api
        .put(`/activity/${action.activityId}/addtag`, tagJsonData)
        .then((response) => {
          // Handle the response
          store.dispatch(clearCreateActivityInfos());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
        });

      break;

    // Remove a tag from an activity
    case HANDLE_REMOVE_TAG:
      const removeTagId = store.getState().activity.activity.tags[0].id;

      api
        .delete(`/activity/${action.activityId}/removetag/${removeTagId}`)
        .then((response) => {
          // Handle the response
          store.dispatch(clearCreateActivityInfos());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
        });

      break;

    // Delete an activity
    case DELETE_ACTIVITY:
      api
        .delete(`/activity/${action.activityId}`)
        .then((response) => {})
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          alert("Echec de la suppression d'activité");
        });

      break;

    // Handle date updates for an activity
    case HANDLE_ACTIVITY_DATE:
      const activityDateUpdateJsonData = {
        date: action.newDate,
      };

      api
        .put(`/activity/${action.activityId}/date`, activityDateUpdateJsonData)
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
        });

      break;

    // Fetch the categories of the activities
    case FETCH_TAGS:
      api
        .get(`/tags`)
        .then((response) => {
          // Save fetched tags to the state
          store.dispatch(saveTags(response.data));
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
