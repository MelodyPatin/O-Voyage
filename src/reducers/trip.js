import { FETCH_MY_TRIPS, SAVE_MY_TRIPS } from '../actions/trip';

export const initialState = {
  myTrips: [],
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

    default:
      return state;
  }
};

export default tripReducer;
