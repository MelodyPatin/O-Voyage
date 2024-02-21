import {
  FETCH_TRIP_ACTIVITIES,
  SAVE_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  SHOW_ACTIVITY,
  CHANGE_ACTIVITY_FIELD,
  TOGGLE_TAG_SELECTED,
  UPDATE_ACTIVITY_CITIES,
  UPDATE_SELECTED_TAG,
  SAVE_ACTIVITY_INFO,
  DELETE_ACTIVITY,
  UPDATE_ACTIVITY_DATE,
} from '../actions/activity';

export const initialState = {
  activities: [],
  activity: [],
  selectedDay: '',
  activityTitle: '',
  activityPrice: '',
  activityUrl: '',
  activityDates: '',
  activityDescription: '',
  activityAddress: '',
  restaurantTag: false,
  activityTag: false,
  pubTag: false,
  cultureTag: false,
  selectedCities: [],
  selectedTag: [],
};

const activityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TRIP_ACTIVITIES:
      return state;

    case SAVE_TRIP_ACTIVITIES:
      return {
        ...state,
        activities: action.activities,
      };

    case FETCH_AN_ACTIVITY:
      return state;

    case SHOW_ACTIVITY:
      return {
        ...state,
        activity: action.activity,
      };

    case CHANGE_ACTIVITY_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case TOGGLE_TAG_SELECTED:
      // Réinitialise tous les autres tags à false et inverse la valeur du tag sélectionné
      const updatedTags = {
        restaurantTag: false,
        activityTag: false,
        pubTag: false,
        cultureTag: false,
        [action.category]: !state[action.category], // Inverse la valeur du tag sélectionné
      };
      return {
        ...state,
        ...updatedTags,
      };

    case UPDATE_ACTIVITY_CITIES: // Ajout
      return {
        ...state,
        selectedCities: action.selectedCities,
      };

    case UPDATE_SELECTED_TAG:
      return {
        ...state,
        selectedTag: [action.tag], // Écrase le tag précédemment sélectionné avec le nouveau tag
      };

    case SAVE_ACTIVITY_INFO:
      return {
        ...state,
        activityTitle: action.activityTitle,
        activityPrice: action.activityPrice,
        activityUrl: action.activityUrl,
        activityDates: action.activityDates,
        activityDescription: action.activityDescription,
        activityAddress: action.activityAddress,
        selectedCities: action.selectedCities,
        selectedTag: action.selectedTag,
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
      };

    case UPDATE_ACTIVITY_DATE:
      const { activityId, newDate } = action.payload;
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.id === activityId ? { ...activity, date: newDate } : activity
        ),
      };

    default:
      return state;
  }
};

export default activityReducer;
