import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Icon, IState, RequestIcon, ReceiveIcons } from './model';
import { 
  LOAD_ICONS_SUCCESS,
  LOAD_ICONS_START
} from './constants/ActionTypes';

const initialState: IState = {
  icons: [],
  value: ''
};

export default handleActions<IState, any>({
  [LOAD_ICONS_START] : (state: IState, action: Action<RequestIcon>) : IState => {
    console.log(LOAD_ICONS_START);

    return {
      ...state,
      icons: [],
      value: action.payload.value
    };
  },
  [LOAD_ICONS_SUCCESS] : (state: IState, action: Action<ReceiveIcons>) : IState => {
    console.log(LOAD_ICONS_SUCCESS);

    return {
      ...state,
      icons: action.payload.icons
    };
  }
}, initialState);
