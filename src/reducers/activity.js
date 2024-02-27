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
  selectedCities: [],
  selectedTag: [],
};

const activityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Fetching trip activities - No state change, just return the current state
    case FETCH_TRIP_ACTIVITIES:
      return state;

    // Saving trip activities to state
    case SAVE_TRIP_ACTIVITIES:
      return {
        ...state,
        activities: action.activities,
      };

    // Fetching an individual activity - No state change, just return the current state
    case FETCH_AN_ACTIVITY:
      return state;

    // Showing an individual activity in state
    case SHOW_ACTIVITY:
      return {
        ...state,
        activity: action.activity,
      };

    // Changing a field in the activity form
    case CHANGE_ACTIVITY_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    // Updating selected cities in the activity form
    case UPDATE_ACTIVITY_CITIES:
      return {
        ...state,
        selectedCities: action.selectedCities,
      };

    // Updating the selected tag in the activity form
    case UPDATE_SELECTED_TAG:
      return {
        ...state,
        selectedTag: [action.tag],
      };

    // Saving activity information to state
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

    // Deleting an activity - No state change, just return the current state
    case DELETE_ACTIVITY:
      return {
        ...state,
      };

    // Updating the date of an activity in the activities list
    case UPDATE_ACTIVITY_DATE:
      const { activityId, newDate } = action.payload;
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.id === activityId ? { ...activity, date: newDate } : activity
        ),
      };

    // Saving tags to state
    case SAVE_TAGS:
      return {
        ...state,
        tags: action.tags,
      };

    // Clearing activity form information in state
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
