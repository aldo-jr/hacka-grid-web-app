import AppRouter from './router';
import { Provider } from 'react-redux';
import React from 'react';
import Store from '../config/redux';

const AppRouterWrap = () => {
  return (
    <AppRouter />
  );
}

const App = () => (
  <Provider store={Store}>
    <AppRouterWrap />
  </Provider>
);

export default App;
