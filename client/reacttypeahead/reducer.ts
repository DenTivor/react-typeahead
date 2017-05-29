import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Icon, IState } from './model';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants/ActionTypes';

const initialState: IState = [<Icon>{
  id: 0,
  text: 'Use Redux with TypeScript',
  completed: false
}];

export default handleActions<IState, Icon>({
  [ADD_TODO]: (state: IState, action: Action<Icon>): IState => {
    return [{
      id: action.payload.id,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
  },

  [DELETE_TODO]: (state: IState, action: Action<Icon>): IState => {
    return state.filter(todo =>
      todo.id !== action.payload.id
    );
  },

  [EDIT_TODO]: (state: IState, action: Action<Icon>): IState => {
    return <IState>state.map(todo =>
      todo.id === action.payload.id
        ? assign(<Icon>{}, todo, { text: action.payload.text })
        : todo
    );
  },

  [COMPLETE_TODO]: (state: IState, action: Action<Icon>): IState => {
    return <IState>state.map(todo =>
      todo.id === action.payload.id ?
        assign({}, todo, { completed: !todo.completed }) :
        todo
    );
  },

  [COMPLETE_ALL]: (state: IState, action: Action<Icon>): IState => {
    const areAllMarked = state.every(todo => todo.completed);
    return <IState>state.map(todo => assign({}, todo, {
      completed: !areAllMarked
    }));
  },

  [CLEAR_COMPLETED]: (state: IState, action: Action<Icon>): IState => {
    return state.filter(todo => todo.completed === false);
  }
}, initialState);
