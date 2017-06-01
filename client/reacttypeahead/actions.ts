import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Icon, RequestIcon, ReceiveIcons, IState } from './model';

import {
  REQUEST_ICONS,
  RECEIVE_ICONS
} from './constants/ActionTypes';


const requestHints = createAction<RequestItem, string>(
  REQUEST_HINTS,
  (text: string) => ({value: text})
)


export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
}
