export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const SAVE_LIST_REQUEST = 'SAVE_LIST_REQUEST';

export const fetchListRequest = (tripId) => ({
  type: FETCH_LIST_REQUEST,
  tripId,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  item,
});

export const addItemRequest = (item, tripId) => ({
  type: ADD_ITEM_REQUEST,
  item,
  tripId,
});

export const toggleCheckbox = (item) => ({
  type: TOGGLE_CHECKBOX,
  item,
});

export const saveListRequest = (updatedList) => ({
  type: SAVE_LIST_REQUEST,
  updatedList,
});