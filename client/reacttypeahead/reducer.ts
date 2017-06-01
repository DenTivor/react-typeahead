import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Icon, IState, RequestIcon, ReceiveIcons } from './model';
import { 
  REQUEST_ICONS,
  RECEIVE_ICONS,
} from './constants/ActionTypes';

const initialState: IState = {
  icons: []
};

export default handleActions<IState, Icon>({
  [REQUEST_ICONS] : (state: IState, action: Action<RequestIcon>) : IState => {
    console.log(REQUEST_ICONS);

    return {
      ...state,
      value: action.payload.value,
      hints: []
    };
  },
  [RECEIVE_ICONS]: (state: IState, action: Action<ReceiveIcons>) : IState => {
    console.log(RECEIVE_ICONS);

    return {
      ...state, 
      hints: action.payload.hints
    };
  },
}, initialState);
