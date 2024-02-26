import { combineReducers } from 'redux';

import userReducer from './user';
import tripReducer from './trip';
import activityReducer from './activity';
import contentReducer from './content';
import suitcaseReducer from './suitcase';
import galleryReducer from './gallery';

// le reducer principal : met en place les "tiroirs" dans le state et indiquer quel reducer
// s'occupe de quel tiroir
const rootReducer = combineReducers({
  // nom du tiroir: reducer qui s'en occupe
  user: userReducer,
  trip: tripReducer,
  activity: activityReducer,
  content: contentReducer,
  suitcase: suitcaseReducer,
  gallery: galleryReducer,
});

export default rootReducer;
