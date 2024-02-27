import { combineReducers } from 'redux';

import userReducer from './user';
import tripReducer from './trip';
import activityReducer from './activity';
import suitcaseReducer from './suitcase';
import galleryReducer from './gallery';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  user: userReducer,
  trip: tripReducer,
  activity: activityReducer,
  suitcase: suitcaseReducer,
  gallery: galleryReducer,
  filter: filtersReducer,
});

export default rootReducer;
