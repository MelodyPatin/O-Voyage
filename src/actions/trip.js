export const FETCH_MY_TRIPS = 'FETCH_MY_TRIPS';
export const SAVE_MY_TRIPS = 'SAVE_MY_TRIPS';
export const HANDLE_STEP_BACK = 'HANDLE_STEP_BACK';
export const HANDLE_STEP_NEXT = 'HANDLE_STEP_NEXT';
export const CHANGE_TRIP_FIELD = 'CHANGE_TRIP_FIELD';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const SUBMIT_CREATE_TRAVEL = 'SUBMIT_CREATE_TRAVEL';
export const ADD_CITY_TO_TRAVEL = 'ADD_CITY_TO_TRAVEL';
export const ADD_TRAVELER_TO_TRAVEL = 'ADD_TRAVELER_TO_TRAVEL';
export const SAVE_COUNTRIES = 'SAVE_COUNTRIES';
export const SAVE_CITIES = 'SAVE_CITIES';
export const UPDATE_SELECTED_COUNTRIES = 'UPDATE_SELECTED_COUNTRIES';
export const UPDATE_SELECTED_CITIES = 'UPDATE_SELECTED_CITIES';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const UPDATE_SELECTED_TRAVELERS = 'UPDATE_SELECTED_TRAVELERS';
export const HANDLE_SUCCESSFUL_CREATE_TRAVEL =
  'HANDLE_SUCCESSFUL_CREATE_TRAVEL';
export const FETCH_A_TRIP = 'FETCH_A_TRIP';
export const SHOW_TRIP = 'SHOW_TRIP';
export const FETCH_TRAVELERS = 'FETCH_TRAVELERS';
export const SHOW_TRAVELERS = 'SHOW_TRAVELERS';
export const UPDATE_TRIP_COVER = 'UPDATE_TRIP_COVER';

export const changeTripField = (value, identifier) => ({
  type: CHANGE_TRIP_FIELD,
  value,
  identifier,
});

export const fetchMyTrips = () => ({
  type: FETCH_MY_TRIPS,
});

export const saveMyTrips = (myTrips) => ({
  type: SAVE_MY_TRIPS,
  myTrips,
});

export const handleStepBack = () => ({
  type: HANDLE_STEP_BACK,
});

export const handleStepNext = () => ({
  type: HANDLE_STEP_NEXT,
});

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
});

export const fetchCities = (countryId) => ({
  type: FETCH_CITIES,
  countryId,
});

export const fetchCitiesSuccess = (cities) => ({
  type: FETCH_CITIES_SUCCESS,
  cities,
});

export const submitCreateTravel = () => ({
  type: SUBMIT_CREATE_TRAVEL,
});

export const addCityToTravel = () => ({
  type: ADD_CITY_TO_TRAVEL,
});

export const addTravelerToTravel = () => ({
  type: ADD_TRAVELER_TO_TRAVEL,
});

export const saveCountries = (countries) => ({
  type: SAVE_COUNTRIES,
  countries,
});

export const saveCities = (cities) => ({
  type: SAVE_CITIES,
  cities,
});

export const updateSelectedCountries = (selectedCountries) => ({
  type: UPDATE_SELECTED_COUNTRIES,
  selectedCountries,
});

export const updateSelectedCities = (selectedCities) => ({
  type: UPDATE_SELECTED_CITIES,
  selectedCities,
});

export const updateSelectedTravelers = (selectedTravelers) => ({
  type: UPDATE_SELECTED_TRAVELERS,
  selectedTravelers,
});

export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  startDate,
});

export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  endDate,
});

export const handleSuccessfulCreateTravel = (tripId) => ({
  type: HANDLE_SUCCESSFUL_CREATE_TRAVEL,
  tripId,
});

export const fetchATrip = (id) => ({
  type: FETCH_A_TRIP,
  id,
});

export const showTrip = (trip) => ({
  type: SHOW_TRIP,
  trip,
});

export const fetchTravelers = (id) => ({
  type: FETCH_TRAVELERS,
  id,
});

export const showTravelers = (travelers) => ({
  type: SHOW_TRAVELERS,
  travelers,
});

export const updateTripCover = (tripId) => ({
  type: UPDATE_TRIP_COVER,
  tripId,
});
