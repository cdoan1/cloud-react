import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types';
import { GET_USERS } from '../constants/action-types';
import { FETCH_USERS_SUCCESS, FETCH_USERS_STARTING } from '../constants/action-types';

import fetch from 'isomorphic-fetch';
const baseURL = 'https://randomuser.me/api/';

// action creators
// actions are dispatches later in the code

export const addArticle = article => (
    {
        type: ADD_ARTICLE,
        payload: article 
    }
);

export const removeArticle = article => (
    {
        type: REMOVE_ARTICLE,
        payload: article 
    }
);

export const getUsers = users => (
    {
        type: GET_USERS,
        payload: users
    }
);

export const fetchUsersStarting = isLoading => (
    {
        type: FETCH_USERS_STARTING,
        payload: isLoading = true
    }
)
export const fetchUserSuccess = users => (
    {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
);

export const fetchUsers = users => {
    console.log('fetchUsers action about to be dispatched!');
    return (dispatch) => {
        dispatch(fetchUsersStarting);
        fetch(`${baseURL}`)
            .then(response => {
                console.log('response:', response);
            })
            .then(response => response.json())
            .then(users => dispatch(fetchUserSuccess(users)))
            .catch(() => {
                console.log('error');
            });
    };
};