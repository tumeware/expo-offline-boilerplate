import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from './reducers';
//import thunk from 'redux-thunk';

export const Store = createStore(
  reducers, //persistedReducer
  //undefined,
  //applyMiddleware(thunk)
)
export const Persistor = persistStore(Store)
