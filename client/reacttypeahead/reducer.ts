import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Icon, IState, RequestIcon, ReceiveIcons } from './model';
import { 
  LOAD_ICONS_SUCCESS,
  LOAD_ICONS_START
} from './constants/ActionTypes';

const initialState: IState = {
  icons: [],
  value: '',
  processStatus: ''
};

// export default handleActions<IState, any>({
//   [LOAD_ICONS_START] : (state: IState, action: Action<RequestIcon>) : IState => {
//     return {
//       ...state,
//       icons: [],
//       processStatus: action.payload.processStatus
//     };
//   },

//   [LOAD_ICONS_SUCCESS] : (state: IState, action: Action<ReceiveIcons>) : IState => {
//     return {
//       ...state,
//       icons: action.payload.icons,
//       processStatus: action.payload.processStatus
//     };
//   }
// }, initialState);


export default function actions(state = initialState, action: any):IState {
  let type = action.type;
  
  if (type === LOAD_ICONS_START) {
      return {
        ...state,
        icons: [],
        processStatus: action.payload.processStatus
      };
  }
  else if (type === LOAD_ICONS_SUCCESS) {
    return {
      ...state,
      icons: action.payload.icons,
      processStatus: action.payload.processStatus
    };
  }
  
  return state;
}