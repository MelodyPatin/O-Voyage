import { FETCH_FAQ_CONTENT, SAVE_FAQ_CONTENT } from '../actions/content';

export const initialState = {};

const contentReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FAQ_CONTENT:
      return state;

    case SAVE_FAQ_CONTENT:
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};

export default contentReducer;
