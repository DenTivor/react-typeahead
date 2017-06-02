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

const requestIcons = createAction<RequestIcon, string>(
  LOAD_ICONS_START,
  (text: string) => ({value: text}) 
);

const receiveIcons = createAction<ReceiveIcons, Icon[]>(
  LOAD_ICONS_SUCCESS,
  (icons: Icon[]) => ({icons: icons}) 
);

const findIcons = (value: string) => {

  const promise: Promise<Icon[]> = new Promise(
    (resolve: (icons: Icon[]) => void, reject: (str: string) => void) => {
      resolve(IconsApi.get(value));
    }
  );
  
  return promise; 
}

export {
  requestIcons,
  receiveIcons,
  findIcons
}
