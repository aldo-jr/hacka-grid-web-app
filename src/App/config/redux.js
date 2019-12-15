import { applyMiddleware, createStore } from 'redux';

import Middlewares from './middlewares';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(...Middlewares)
);

export default store;
