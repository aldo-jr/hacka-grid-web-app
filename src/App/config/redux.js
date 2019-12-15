import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import Middlewares from "./middlewares";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';

const REDUX_STORE = 'meseg/store';
const persistPaths = ['login'];
const persistConfig = {
  key: REDUX_STORE,
  storage,
  whitelist: persistPaths
};

const composeEnhancers = composeWithDevTools({
  maxAge: 100,
});
const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(...Middlewares))
);

export const persistor = persistStore(store);

export default store;
