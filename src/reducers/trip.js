import {
  HANDLE_STEP_BACK,
  HANDLE_STEP_NEXT,
  CHANGE_TRIP_FIELD,
  SAVE_COUNTRIES,
  SAVE_CITIES,
  UPDATE_SELECTED_COUNTRIES,
  UPDATE_SELECTED_CITIES,
  SET_START_DATE,
  SET_END_DATE,
  UPDATE_SELECTED_TRAVELERS,
  HANDLE_SUCCESSFUL_CREATE_TRAVEL,
  FETCH_A_TRIP,
  FETCH_MY_TRIPS,
  FETCH_TRAVELERS,
  SAVE_MY_TRIPS,
  SHOW_TRAVELERS,
  SHOW_TRIP,
  UPDATE_TRIP_COVER,
} from '../actions/trip';

export const initialState = {
  myTrips: [],
  countries: [],
  cities: [],
  selectedCountries: [],
  selectedCities: [],
  selectedTravelers: [],
  step: 1,
  tripTitle: '',
  tripDescription: '',
  startDate: '',
  endDate: '',
  tripId: null,
  trip: [],
  travelers: [],
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

    case UPDATE_SELECTED_TRAVELERS: // Ajout
      return {
        ...state,
        selectedTravelers: action.selectedTravelers,
      };

    case SET_START_DATE: // Ajout
      return {
        ...state,
        startDate: action.startDate,
      };

    case SET_END_DATE: // Ajout
      return {
        ...state,
        endDate: action.endDate,
      };

    case HANDLE_SUCCESSFUL_CREATE_TRAVEL:
      return {
        ...state,
        tripId: action.tripId,
      }; // Ajout du point-virgule

    case FETCH_A_TRIP:
      return state; // Retourne l'état sans modification

    case SHOW_TRIP:
      return {
        ...state,
        trip: action.trip,
      };
    // Retourne l'état sans modification

    case SHOW_TRAVELERS:
      return {
        ...state,
        travelers: action.travelers,
      };

    case UPDATE_TRIP_COVER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default tripReducer;
