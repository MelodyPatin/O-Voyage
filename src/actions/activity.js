export const FETCH_TRIP_ACTIVITIES = 'FETCH_TRIP_ACTIVITIES';
export const SAVE_TRIP_ACTIVITIES = 'SAVE_TRIP_ACTIVITIES';
export const FETCH_AN_ACTIVITY = 'FETCH_AN_ACTIVITY';
export const FETCH_AN_ACTIVITY_TO_UPDATE = 'FETCH_AN_ACTIVITY_TO_UPDATE';
export const SHOW_ACTIVITY = 'SHOW_ACTIVITY';
export const CHANGE_ACTIVITY_FIELD = 'CHANGE_ACTIVITY_FIELD';
export const UPDATE_ACTIVITY_CITIES = 'UPDATE_ACTIVITY_CITIES';
export const SUBMIT_CREATE_ACTIVITY = 'SUBMIT_CREATE_ACTIVITY';
export const SUBMIT_UPDATE_ACTIVITY = 'SUBMIT_UPDATE_ACTIVITY';
export const UPDATE_SELECTED_TAG = 'UPDATE_SELECTED_TAG';
export const HANDLE_ADD_TAG = 'HANDLE_ADD_TAG';
export const HANDLE_REMOVE_TAG = 'HANDLE_REMOVE_TAG';
export const SAVE_ACTIVITY_INFO = 'SAVE_ACTIVITY_INFO';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const UPDATE_ACTIVITY_DATE = 'UPDATE_ACTIVITY_DATE';
export const HANDLE_ACTIVITY_DATE = 'HANDLE_ACTIVITY_DATE';
export const FETCH_TAGS = 'FETCH_TAGS';
export const SAVE_TAGS = 'SAVE_TAGS';
export const CLEAR_CREATE_ACTIVITY_INFOS = 'CLEAR_CREATE_ACTIVITY_INFOS';

export const fetchTripActivities = (tripId) => ({
  type: FETCH_TRIP_ACTIVITIES,
  tripId,
});

export const saveTripActivities = (activities) => ({
  type: SAVE_TRIP_ACTIVITIES,
  activities,
});

export const fetchAnActivity = (id) => ({
  type: FETCH_AN_ACTIVITY,
  id,
});

export const fetchAnActivityToUpdate = (id) => ({
  type: FETCH_AN_ACTIVITY_TO_UPDATE,
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

export const updateActivityCities = (selectedCities) => ({
  type: UPDATE_ACTIVITY_CITIES,
  selectedCities,
});

export const submitCreateActivity = () => ({
  type: SUBMIT_CREATE_ACTIVITY,
});

export const submitUpdateActivity = (activityId) => ({
  type: SUBMIT_UPDATE_ACTIVITY,
  activityId,
});

export const updateSelectedTag = (tag) => ({
  type: UPDATE_SELECTED_TAG,
  tag,
});

export const handleAddTag = (activityId) => ({
  type: HANDLE_ADD_TAG,
  activityId,
});

export const handleRemoveTag = (activityId) => ({
  type: HANDLE_REMOVE_TAG,
  activityId,
});

export const saveActivityInfo = (
  activityTitle,
  activityPrice,
  activityUrl,
  activityDates,
  activityDescription,
  activityAddress,
  selectedCities,
  selectedTag
) => ({
  type: SAVE_ACTIVITY_INFO,
  activityTitle,
  activityPrice,
  activityUrl,
  activityDates,
  activityDescription,
  activityAddress,
  selectedCities,
  selectedTag,
});

export const deleteActivity = (activityId) => ({
  type: DELETE_ACTIVITY,
  activityId,
});
export const updateActivityDate = (activityId, newDate) => ({
  type: UPDATE_ACTIVITY_DATE,
  payload: { activityId, newDate },
});

export const handleActivityDate = (activityId, newDate) => ({
  type: HANDLE_ACTIVITY_DATE,
  activityId,
  newDate,
});

export const fetchTags = () => ({
  type: FETCH_TAGS,
});

export const saveTags = (tags) => ({
  type: SAVE_TAGS,
  tags,
});

export const clearCreateActivityInfos = () => ({
  type: CLEAR_CREATE_ACTIVITY_INFOS,
});
