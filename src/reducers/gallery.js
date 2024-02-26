import {
  ADD_PICTURE,
  FETCH_A_PICTURE,
  FETCH_PICTURES,
  HANDLE_NEXT_PAGE,
  HANDLE_PREVIOUS_PAGE,
  SHOW_A_PICTURE,
  SHOW_PICTURES,
} from '../actions/gallery';

const initialState = {
  photos: [],
  page: 1,
  image: [],
  photosFetched: false,
  currentPage: 1,
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
        photos: action.pictures,
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
        photos: [...state.photos.photos, action.base64Data],
        photosFetched: false,
      };

    case HANDLE_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage+1,
      };

    case HANDLE_PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage-1,
      };

    default:
      return state;
  }
};

export default galleryReducer;
