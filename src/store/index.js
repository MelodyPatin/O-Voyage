import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';
import userMiddleware from '../middleware/userMiddleware';
import tripMiddleware from '../middleware/tripMiddleware';
import activityMiddleware from '../middleware/activityMiddleware';
import contentMiddleware from '../middleware/contentMiddleware';
import suitcaseMiddleware from '../middleware/suitcaseMiddleware';
import galleryMiddleware from '../middleware/galleryMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    tripMiddleware,
    activityMiddleware,
    contentMiddleware,
    suitcaseMiddleware,
    galleryMiddleware
  )
);

const store = createStore(reducer, enhancers);

export default store;
