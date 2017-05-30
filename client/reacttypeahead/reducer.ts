import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { IconCard, IState } from './model';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants/ActionTypes';

const initialState: IState = [<IconCard>{
  id: 0,
  text: 'Use Redux with TypeScript',
  completed: false
}];

export default handleActions<IState, IconCard>({
  [ADD_TODO]: (state: IState, action: Action<IconCard>): IState => {
    return [{
      id: action.payload.id,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
  },

  [DELETE_TODO]: (state: IState, action: Action<IconCard>): IState => {
    return state.filter(todo =>
      todo.id !== action.payload.id
    );
  },

  [EDIT_TODO]: (state: IState, action: Action<IconCard>): IState => {
    return <IState>state.map(todo =>
      todo.id === action.payload.id
        ? assign(<IconCard>{}, todo, { text: action.payload.text })
        : todo
    );
  },

  [COMPLETE_TODO]: (state: IState, action: Action<IconCard>): IState => {
    return <IState>state.map(todo =>
      todo.id === action.payload.id ?
        assign({}, todo, { completed: !todo.completed }) :
        todo
    );
  },

  [COMPLETE_ALL]: (state: IState, action: Action<IconCard>): IState => {
    const areAllMarked = state.every(todo => todo.completed);
    return <IState>state.map(todo => assign({}, todo, {
      completed: !areAllMarked
    }));
  },

  [CLEAR_COMPLETED]: (state: IState, action: Action<IconCard>): IState => {
    return state.filter(todo => todo.completed === false);
  }
}, initialState);
