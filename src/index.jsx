import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'Components/App';
import rootRecucer from 'reducers';
import 'style.scss';

const store = createStore(rootRecucer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
