import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './main/components/App';
import rootReducer from './main/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const store: Store<any> = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);