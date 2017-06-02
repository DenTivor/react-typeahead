import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Icon, IState, RequestIcon, ReceiveIcons } from './model';
import { 
  LOAD_ICONS_SUCCESS,
} from './constants/ActionTypes';

const initialState: IState = {
  icons: []
};

export default handleActions<IState, any>({

}, initialState);

// export default handleActions<IState, any>({
//   [LOAD_ICONS_SUCCESS] : (state: IState, action: Action<ReceiveIcons>) : IState => {
//     console.log(LOAD_ICONS_SUCCESS);

//     return {
//       ...state,
//       value: action.payload.value,
//       icons: action.payload.icons
//     };
//   }
// }, initialState);

// export default function iconReducer(state = initialState.icons, action){
//     switch (action.type){
//         case types.LOAD_ICONS_SUCCESS:
//             return action.icons;

//         default:
//             return state;
//     }
// }
