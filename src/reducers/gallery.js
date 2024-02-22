import {
  FETCH_A_PICTURE,
  FETCH_PICTURES,
  SHOW_A_PICTURE,
  SHOW_PICTURES,
} from '../actions/gallery';

const initialState = {
  images: [],
};

const galleryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PICTURES:
      return {
        ...state,
      };

    case SHOW_PICTURES:
      console.log('SHOW_PICTURES action received');
      return {
        ...state,
        images: action.pictures,
      };

    case FETCH_A_PICTURE:
      return {
        ...state,
      };

    case SHOW_A_PICTURE:
      console.log('SHOW_PICTURES action received');
      return {
        ...state,
        image: action.picture,
      };

    default:
      return state;
  }
};

export default galleryReducer;
