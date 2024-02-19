export const FETCH_FAQ_CONTENT = 'FETCH_FAQ_CONTENT';
export const SAVE_FAQ_CONTENT = 'SAVE_FAQ_CONTENT';

export const fetchFaqContent = () => ({
  type: FETCH_FAQ_CONTENT,
});

export const saveFaqContent = (content) => ({
  type: SAVE_FAQ_CONTENT,
  content,
});
