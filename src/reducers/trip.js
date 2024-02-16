import {
  FETCH_A_TRIP,
  FETCH_MY_TRIPS,
  SAVE_MY_TRIPS,
  SHOW_TRIP,
} from '../actions/trip';

export const initialState = {
  myTrips: [],
  trip: [],
};

const tripReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MY_TRIPS:
      return state;

    case SAVE_MY_TRIPS:
      return {
        ...state,
        myTrips: action.myTrips,
      };

    case FETCH_A_TRIP:
      return state;

    case SHOW_TRIP:
      return {
        ...state,
        trip: action.trip,
      };

    default:
      return state;
  }
};

export default tripReducer;
