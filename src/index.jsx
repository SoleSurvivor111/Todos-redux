import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import AppContainer from 'containers/AppContainer';
import rootRecucer from 'reducers';
import 'style.scss';
import { loadState, saveState } from 'localStoreage';

const persistedState = loadState();
const store = createStore(rootRecucer, persistedState, composeWithDevTools());

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));
render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
