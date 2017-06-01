import * as types from './actionTypes';
import iconsAPI from '../api/mockIconsApi';

export function loadIconsSuccess(icons){
    return { type: types.LOAD_TODO_SUCCESS, icons };
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

/*
    For using REAL Api Calls
    -> Example http call from original doc: http://redux.js.org/docs/advanced/AsyncActions.html
    using thunk and fetch (needs polyfill)


function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
    }
}

// Other example:
 return fetch('http://<apiURL>')
     .then(response => response.json())
     .then(json => console.log(json));

// Fetch using Post JSON:
 fetch('/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
    })
 })
*/
