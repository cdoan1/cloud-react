import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types.js';

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
