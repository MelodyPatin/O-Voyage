import {
  ADD_PICTURE,
  FETCH_A_PICTURE,
  FETCH_PICTURES,
  SHOW_A_PICTURE,
  SHOW_PICTURES,
} from '../actions/gallery';

const initialState = {
  images: [],
  page: 1,
  image: [],
  photosFetched: false,
};

const galleryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PICTURES:
      return {
        ...state,
        photosFetched: true,
      };

    case SHOW_PICTURES:
      return {
        ...state,
        images: {
          photos: action.pictures,
        },
      };
    case FETCH_A_PICTURE:
      return {
        ...state,
      };

    case SHOW_A_PICTURE:
      return {
        ...state,
        image: action.picture,
      };

    case ADD_PICTURE:
      return {
        ...state,
        images: Array.isArray(state.images)
          ? [action.picture, ...state.images]
          : [action.picture],
      };

    default:
      return state;
  }
};

export default galleryReducer;
