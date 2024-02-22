export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SHOW_PICTURES = 'SHOW_PICTURES';
export const FETCH_A_PICTURE = 'FETCH_A_PICTURE';
export const SHOW_A_PICTURE = 'SHOW_A_PICTURE';

export const fetchPictures = (tripId) => ({
  type: FETCH_PICTURES,
  tripId,
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
