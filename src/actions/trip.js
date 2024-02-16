export const FETCH_MY_TRIPS = 'FETCH_MY_TRIPS';
export const SAVE_MY_TRIPS = 'SAVE_MY_TRIPS';
export const FETCH_A_TRIP = 'FETCH_A_TRIP';
export const SHOW_TRIP = 'SHOW_TRIP';
export const FETCH_TRAVELERS = 'FETCH_TRAVELERS';
export const SHOW_TRAVELERS = 'SHOW_TRAVELERS';

export const fetchMyTrips = () => ({
  type: FETCH_MY_TRIPS,
});

export const saveMyTrips = (myTrips) => ({
  type: SAVE_MY_TRIPS,
  myTrips,
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
