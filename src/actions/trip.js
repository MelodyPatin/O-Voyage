export const FETCH_MY_TRIPS = 'FETCH_MY_TRIPS';
export const SAVE_MY_TRIPS = 'SAVE_MY_TRIPS';

export const fetchMyTrips = () => ({
  type: FETCH_MY_TRIPS,
});

export const saveMyTrips = (myTrips) => ({
  type: SAVE_MY_TRIPS,
  myTrips,
});
