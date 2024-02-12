import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';
import userMiddleware from '../middleware/userMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware
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
