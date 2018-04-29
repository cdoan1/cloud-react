import fetch from 'isomorphic-fetch';

const baseURL = 'https://randomuser.me/api/';

const initialState = {
    users: []
};

// just a switch that returns all the actions
const users = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USERS':
            // console.log('get user action');
            const data = fetch(`${baseURL}`).then(resp => resp.json()).then(json => json.results);
            // console.log('action.payload:', action.payload);
            return { ...state, users: [...state.users, data ] };
        case 'LIST_USERS':
            return state;
        case 'FETCH_USERS_SUCCESS':
        case 'FETCH_USERS':
            return state;
        case 'FETCH_USERS_RECIEVED':
            // action.payload.results is already an array
            return { ...state, users: action.payload.results };
        default:
            return state;
    }
};

export default users;