import { combineReducers } from 'redux';

import userReducer from './user';
import tripReducer from './trip';
import activityReducer from './activity';

// le reducer principal : met en place les "tiroirs" dans le state et indiquer quel reducer
// s'occupe de quel tiroir
const rootReducer = combineReducers({
  // nom du tiroir: reducer qui s'en occupe
  user: userReducer,
  trip: tripReducer,
  activity: activityReducer,
});

export default rootReducer;
