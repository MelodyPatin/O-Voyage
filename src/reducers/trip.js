import {
  HANDLE_STEP_BACK,
  HANDLE_STEP_NEXT,
  SAVE_MY_TRIPS,
  CHANGE_TRIP_FIELD,
  SAVE_COUNTRIES,
  SAVE_CITIES,
  UPDATE_SELECTED_COUNTRIES,
  UPDATE_SELECTED_CITIES, // Ajout
} from '../actions/trip';

export const initialState = {
  myTrips: [],
  countries: [],
  cities: [],
  selectedCountries: [],
  selectedCities: [], // Ajout
  step: 1,
  tripTitle: '',
  tripDescription: '',
};

const tripReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MY_TRIPS:
      return {
        ...state,
        myTrips: action.myTrips,
      };

    case HANDLE_STEP_BACK:
      return {
        ...state,
        step: state.step - 1,
      };

    case HANDLE_STEP_NEXT:
      return {
        ...state,
        step: state.step + 1,
      };

    case CHANGE_TRIP_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case SAVE_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };

    case SAVE_CITIES:
      return {
        ...state,
        cities: [...state.cities, ...action.cities],
      };

    case UPDATE_SELECTED_COUNTRIES:
      return {
        ...state,
        selectedCountries: action.selectedCountries,
      };

    case UPDATE_SELECTED_CITIES: // Ajout
      return {
        ...state,
        selectedCities: action.selectedCities,
      };

    default:
      return state;
  }
};

export default tripReducer;
