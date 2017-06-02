import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Icon, IState, RequestIcon, ReceiveIcons } from './model';
import { 
  LOAD_ICONS_SUCCESS,
} from './constants/ActionTypes';

const initialState: IState = {
  icons: [],
  value: ''
};

// export default handleActions<state: IState, Action<ReceiveIcons>>({
//   switch(Action.type) 
// }, initialState);

export default handleActions<IState, any>({
  [LOAD_ICONS_SUCCESS] : (state: IState, action: Action<ReceiveIcons>) : IState => {
    console.log(LOAD_ICONS_SUCCESS);

    return {
      ...state,
      icons: action.payload.icons
    };
  }
}, initialState);

// export default function iconReducer(state = initialState.icons, action){
//     switch (action.type){
//         case types.LOAD_ICONS_SUCCESS:
//             return action.icons;

//         default:
//             return state;
//     }
// }
