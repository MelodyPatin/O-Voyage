export const FETCH_MY_TRIPS = 'FETCH_MY_TRIPS';
export const SAVE_MY_TRIPS = 'SAVE_MY_TRIPS';
export const HANDLE_STEP_BACK = 'HANDLE_STEP_BACK';
export const HANDLE_STEP_NEXT = 'HANDLE_STEP_NEXT';
export const CHANGE_TRIP_FIELD = 'CHANGE_TRIP_FIELD';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const SUBMIT_CREATE_TRAVEL = 'SUBMIT_CREATE_TRAVEL';
export const SAVE_COUNTRIES = 'SAVE_COUNTRIES';
export const SAVE_CITIES = 'SAVE_CITIES';
export const UPDATE_SELECTED_COUNTRIES = 'UPDATE_SELECTED_COUNTRIES';
export const UPDATE_SELECTED_CITIES = 'UPDATE_SELECTED_CITIES';

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
