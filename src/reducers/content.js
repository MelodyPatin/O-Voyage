import {
  FETCH_FAQ_CONTENT,
  FETCH_HISTORY_CONTENT,
  SAVE_FAQ_CONTENT,
  SAVE_HISTORY_CONTENT,
} from '../actions/content';

export const initialState = {
  contentFaq: '',
  contentHistory: [],
};

const contentReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FAQ_CONTENT:
      return state;

    case SAVE_FAQ_CONTENT:
      return {
        ...state,
        contentFaq: action.content,
      };

    case FETCH_HISTORY_CONTENT:
      return state;

    case SAVE_HISTORY_CONTENT:
      return {
        ...state,
        contentHistory: action.content,
      };

    default:
      return state;
  }
};

export default contentReducer;
