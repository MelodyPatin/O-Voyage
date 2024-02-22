// reducers.js

import {
  ADD_LIST_ITEM,
  FETCH_LIST_REQUEST,
  REMOVE_LIST_ITEM,
  SAVE_LIST_REQUEST,
} from '../actions/suitcase';

const initialState = {
  list: [],
};

const suitcaseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        list: [...state.list, action.item],
      };

    case REMOVE_LIST_ITEM:
      const filteredList = state.list.filter((_, i) => i !== action.index);
      return {
        ...state,
        list: filteredList,
      };

    case FETCH_LIST_REQUEST:
      return {
        ...state,
      };

    case SAVE_LIST_REQUEST:
      return {
        ...state,
        list: action.updatedList,
      };

    default:
      return state;
  }
};

export default suitcaseReducer;
