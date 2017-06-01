import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../../components/Page';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadIcons} from './actions/iconsActions';

const store = configureStore();
store.dispatch(loadTodos());

render (
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('app')
);
