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
      const updatedList = state.list.slice(); // Créez une copie de la liste
      updatedList.splice(action.index, 1); // Supprimez l'élément à l'index spécifié
      return {
        ...state,
        list: updatedList,
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
