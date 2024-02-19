export const FETCH_TRIP_ACTIVITIES = 'FETCH_TRIP_ACTIVITIES';
export const SAVE_TRIP_ACTIVITIES = 'SAVE_TRIP_ACTIVITIES';
export const FETCH_AN_ACTIVITY = 'FETCH_AN_ACTIVITY';
export const SHOW_ACTIVITY = 'SHOW_ACTIVITY';
export const CHANGE_ACTIVITY_FIELD = 'CHANGE_ACTIVITY_FIELD';
export const TOGGLE_TAG_SELECTED = 'TOGGLE_TAG_SELECTED';
export const UPDATE_ACTIVITY_CITIES = 'UPDATE_ACTIVITY_CITIES';
export const SUBMIT_CREATE_ACTIVITY = 'SUBMIT_CREATE_ACTIVITY';
export const UPDATE_SELECTED_TAG = 'UPDATE_SELECTED_TAG';
export const HANDLE_ADD_TAG = 'HANDLE_ADD_TAG';

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

export const changeActivityField = (value, identifier) => ({
  type: CHANGE_ACTIVITY_FIELD,
  value,
  identifier,
});

export const toggleTagSelected = (category) => ({
  type: TOGGLE_TAG_SELECTED,
  category,
});

export const updateActivityCities = (selectedCities) => ({
  type: UPDATE_ACTIVITY_CITIES,
  selectedCities,
});

export const submitCreateActivity = () => ({
  type: SUBMIT_CREATE_ACTIVITY,
});

export const updateSelectedTag = (tag) => ({
  type: UPDATE_SELECTED_TAG,
  tag,
});

export const handleAddTag = (activityId) => ({
  type: HANDLE_ADD_TAG,
  activityId,
});
