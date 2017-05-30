import { handleActions, Action } from 'redux-actions';

import { 
  ReceiveIcons, 
  RequestIcon, 
  IconCard, 
  IState
} from './model';

import {
  REQUEST_ICONS,
  RECEIVE_ICONS
} from './constants/ActionTypes';

const initialState: IState = {
  isFetching: false,
  cards: []
};

/*It uses handleActions instead function with switch block. Is passed instead of map*/
export default handleActions<IState, any>({
  [REQUEST_ICONS] : (state: IState, action: Action<RequestIcon>) : IState => {
    console.log(REQUEST_ICONS);

    return {
      ...state,
      isFetching: true,
      value: action.payload.value,
      cards: []
    };
  },
  [RECEIVE_ICONS]: (state: IState, action: Action<ReceiveIcons>) : IState => {
    console.log(RECEIVE_ICONS);

    return {
      ...state, 
      isFetching: false,
      cards: action.payload.cards
    };
  }
}, initialState);