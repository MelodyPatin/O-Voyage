// suitcaseReducer.js

import { ADD_ITEM, SAVE_LIST_REQUEST, TOGGLE_CHECKBOX } from '../actions/suitcase';

const initialState = {
  itemList: [], // Contiendra la liste des éléments de la valise
};

export const suitcaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: [...state.itemList, action.item],
      };

    case TOGGLE_CHECKBOX:
      return {
        ...state,
        itemList: state.itemList.map((item) =>
          item.id === action.item.id
            ? { ...item, checked: action.item.checked }
            : item
        ),
      };

    case SAVE_LIST_REQUEST:
      return {
        ...state,
        itemList: action.updatedList,
      };

    default:
      return state;
  }
};

export default suitcaseReducer;
