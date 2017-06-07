import { Promise } from 'es6-promise';
import IconsApi from './api/mockIconsApi';
import { createAction, Action } from 'redux-actions'

import { 
  LOAD_ICONS_START,
  LOAD_ICONS_SUCCESS
} from './constants/ActionTypes'

import {
  RequestIcon,
  ReceiveIcons,
  Icon
} from './model'

const requestIcons = createAction<RequestIcon, string, string>(
  LOAD_ICONS_START,
  (text: string, processStatus: string) => ({value: text, processStatus: processStatus}) 
);

const receiveIcons = createAction<ReceiveIcons, Icon[], string>(
  LOAD_ICONS_SUCCESS,
  (icons: Icon[], processStatus: string) => ({icons: icons, processStatus: processStatus}) 
);

function fetchIcons(value: string) {
  const promise: Promise<Icon[]> = new Promise(
    (resolve: (icons: Icon[]) => void, reject: (str: string) => void) => {
      resolve(IconsApi.get(value));
    }
  );
  
  return promise;
}

const findIcons = (value: string) => dispatch => {
  dispatch(requestIcons(value, 'loading'));

  fetchIcons(value)
    .then((icons: Icon[]) => {
      setTimeout(() => {
        dispatch(receiveIcons(icons, ''));
      }, 2000)
    });
}


export {
  requestIcons,
  receiveIcons,
  findIcons
}
