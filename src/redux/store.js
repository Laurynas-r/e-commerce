import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewarres = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewarres));

export default store;