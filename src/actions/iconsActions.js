import * as types from './actionTypes';
import iconsAPI from '../api/mockIconsApi';

export function loadIconsSuccess(icons){
    return { type: types.LOAD_ICONS_SUCCESS, icons, isSearchQueryPending: 'false'};
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

export function findIcons(query){
    
    return dispatch => {
        searchStart();
        return iconsAPI.findIcons(query).then(icons => {
            dispatch(loadIconsSuccess(icons));
        }).catch(error => {
            throw(error);
        });
    };
}

export function searchStart() {
    return {type: types.LOAD_ICONS_BEGIN, isSearchQueryPending: 'true'}
}

// export function searchFinish() {
//     return {type: types.LOAD_ICONS_BEGIN, isSearchQueryPending: true}
// }
