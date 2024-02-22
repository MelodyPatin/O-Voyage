export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const SAVE_LIST_REQUEST = 'SAVE_LIST_REQUEST';

export const addListItem = (item) => ({
  type: ADD_LIST_ITEM,
  item,
});

export const removeListItem = (index) => ({
  type: REMOVE_LIST_ITEM,
  index,
});

export const fetchListRequest = (tripId) => ({
  type: FETCH_LIST_REQUEST,
  tripId,
});

export const saveListRequest = (updatedList) => ({
  type: SAVE_LIST_REQUEST,
  updatedList,
});
