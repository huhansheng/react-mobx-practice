import React from 'react';
import { Provider } from 'mobx-react';
import Router from './router';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
