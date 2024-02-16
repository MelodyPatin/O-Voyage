import {
  FETCH_TRIP_ACTIVITIES,
  SAVE_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  SHOW_ACTIVITY,
} from '../actions/activity';

export const initialState = {
  activities: [],
  activity: [],
  selectedDay: '',
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

    default:
      return state;
  }
};

export default activityReducer;
