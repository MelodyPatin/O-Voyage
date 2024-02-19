import {
  FETCH_TRIP_ACTIVITIES,
  SAVE_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  SHOW_ACTIVITY,
  CHANGE_ACTIVITY_FIELD,
  TOGGLE_TAG_SELECTED,
  UPDATE_ACTIVITY_CITIES,
  ADD_SELECTED_TAG,
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
  selectedTags: [],
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
      // Inverse simplement la valeur de tagIsSelected
      return {
        ...state,
        [action.category]: !state[action.category],
      };

    case UPDATE_ACTIVITY_CITIES: // Ajout
      return {
        ...state,
        selectedCities: action.selectedCities,
      };

    case ADD_SELECTED_TAG:
      return {
        ...state,
        selectedTags: action.selectedTags,
      };

    default:
      return state;
  }
};

export default activityReducer;
