import React from 'react';
import { render } from 'react-dom';
import Page from './components/Page';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadIcons} from './actions/iconsActions';

import './styles/styles.css';

const store = configureStore();
store.dispatch(loadIcons());

render (
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('app')
);
