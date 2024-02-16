import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';
import userMiddleware from '../middleware/userMiddleware';
import tripMiddleware from '../middleware/tripMiddleware';
import activityMiddleware from '../middleware/activityMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    tripMiddleware,
    activityMiddleware,
    // ... d'autres middlewares
  )
);

const store = createStore(
  // reducer
  reducer,
  // enhancers
  enhancers
);

export default store;
