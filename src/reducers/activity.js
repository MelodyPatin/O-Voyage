import {
  FETCH_TRIP_ACTIVITIES,
  SAVE_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  SHOW_ACTIVITY,
  CHANGE_ACTIVITY_FIELD,
  UPDATE_ACTIVITY_CITIES,
  UPDATE_SELECTED_TAG,
  SAVE_ACTIVITY_INFO,
  DELETE_ACTIVITY,
  UPDATE_ACTIVITY_DATE,
  SAVE_TAGS,
  CLEAR_CREATE_ACTIVITY_INFOS,
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
  tags: [],
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

    case SAVE_TAGS:
      return {
        ...state,
        tags: action.tags,
      };

    case CLEAR_CREATE_ACTIVITY_INFOS:
      return {
        ...state,
        activityTitle: '',
        activityPrice: '',
        activityUrl: '',
        activityDates: '',
        activityDescription: '',
        activityAddress: '',
        selectedCities: [],
        selectedTags: [],
      };

    default:
      return state;
  }
};

export default activityReducer;
