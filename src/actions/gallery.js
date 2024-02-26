export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SHOW_PICTURES = 'SHOW_PICTURES';
export const FETCH_A_PICTURE = 'FETCH_A_PICTURE';
export const SHOW_A_PICTURE = 'SHOW_A_PICTURE';
export const ADD_PICTURE = 'ADD_PICTURE';
export const HANDLE_NEXT_PAGE = 'HANDLE_NEXT_PAGE';
export const HANDLE_PREVIOUS_PAGE = 'HANDLE_PREVIOUS_PAGE';

export const fetchPictures = (tripId, currentPage) => ({
  type: FETCH_PICTURES,
  tripId,
  currentPage,
});

export const showPictures = (pictures) => ({
  type: SHOW_PICTURES,
  pictures,
});

export const fetchAPicture = (tripId, pictureId) => ({
  type: FETCH_A_PICTURE,
  tripId,
  pictureId,
});

export const showAPicture = (picture) => ({
  type: SHOW_A_PICTURE,
  picture,
});

export const addPicture = (tripId, base64Data, currentPage) => ({
  type: ADD_PICTURE,
  tripId,
  base64Data,
  currentPage,
});

export const handleNextPage = () => ({
  type: HANDLE_NEXT_PAGE,
});

export const handlePreviousPage = () => ({
  type: HANDLE_PREVIOUS_PAGE,
});
