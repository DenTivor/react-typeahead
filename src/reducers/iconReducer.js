import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function iconReducer(state = initialState.icons, action){
    switch (action.type){
        case types.LOAD_ICONS_SUCCESS:
            return action.icons;

        default:
            return state;
    }
}
