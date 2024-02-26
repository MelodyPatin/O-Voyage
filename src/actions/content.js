export const FETCH_FAQ_CONTENT = 'FETCH_FAQ_CONTENT';
export const SAVE_FAQ_CONTENT = 'SAVE_FAQ_CONTENT';
export const FETCH_HISTORY_CONTENT = 'FETCH_HISTORY_CONTENT';
export const SAVE_HISTORY_CONTENT = 'SAVE_HISTORY_CONTENT';

export const fetchFaqContent = () => ({
  type: FETCH_FAQ_CONTENT,
});

export const saveFaqContent = (content) => ({
  type: SAVE_FAQ_CONTENT,
  content,
});

export const fetchHistoryContent = () => ({
  type: FETCH_HISTORY_CONTENT,
});

export const saveHistoryContent = (content) => ({
  type: SAVE_HISTORY_CONTENT,
  content,
});
