import { combineReducers } from 'redux';
//persist Reducer
import { persistReducer } from 'redux-persist';
//use localStarage or import sessionStorage for session
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

//call reducer ...persist part
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);