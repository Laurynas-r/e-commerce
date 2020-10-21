import { createStore, applyMiddleware } from 'redux';
//for chachjing store
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './shop/shop.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewarres = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewarres.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewarres));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };