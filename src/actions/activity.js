export const FETCH_TRIP_ACTIVITIES = 'FETCH_TRIP_ACTIVITIES';
export const SAVE_TRIP_ACTIVITIES = 'SAVE_TRIP_ACTIVITIES';
export const FETCH_AN_ACTIVITY = 'FETCH_AN_ACTIVITY';
export const SHOW_ACTIVITY = 'SHOW_ACTIVITY';

export const fetchTripActivities = (id) => ({
  type: FETCH_TRIP_ACTIVITIES,
  id,
});

export const saveTripActivities = (activities) => ({
  type: SAVE_TRIP_ACTIVITIES,
  activities,
});

export const fetchAnActivity = (id) => ({
  type: FETCH_AN_ACTIVITY,
  id,
});

export const showActivity = (activity) => ({
  type: SHOW_ACTIVITY,
  activity,
});
