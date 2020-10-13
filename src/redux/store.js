import { createStore, applyMiddleware } from 'redux';
//for chachjing store
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewarres = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewarres.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewarres));

export const persistor = persistStore(store);

export default { store, persistor };