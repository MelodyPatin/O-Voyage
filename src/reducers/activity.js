import {
  FETCH_TRIP_ACTIVITIES,
  SAVE_TRIP_ACTIVITIES,
  FETCH_AN_ACTIVITY,
  SHOW_ACTIVITY,
  FETCH_ACTIVITY_LIKES,
  SHOW_ACTIVITY_LIKES,
} from '../actions/activity';

export const initialState = {
  activities: [],
  activity: [],
  selectedDay: '',
  likesByActivity: {},
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

    case FETCH_ACTIVITY_LIKES:
      return state;

    case SHOW_ACTIVITY_LIKES:
      const updatedLikesByActivity = {
        ...state.likesByActivity,
        [action.activityId]: action.likes.rating,
      };

      const newStateWithLikes = {
        ...state,
        likesByActivity: updatedLikesByActivity,
      };

      return newStateWithLikes;
    default:
      return state;
  }
};

export default activityReducer;
