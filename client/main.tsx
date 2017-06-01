import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import Page from './main/components/Page';
import rootReducer from './main/reducer';

const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('app')
);