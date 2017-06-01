import * as types from './actionTypes';
import iconsAPI from '../api/mockIconsApi';

export function loadIconsSuccess(icons){
    return { type: types.LOAD_ICONS_SUCCESS, icons };
}

export function loadIcons(){
    return dispatch => {
        return iconsAPI.getAllIcons().then(icons => {
            dispatch(loadIconsSuccess(icons));
        }).catch(error => {
            throw(error);
        });
    };
}
