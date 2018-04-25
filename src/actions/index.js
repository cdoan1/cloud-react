import { ADD_ARTICLE } from '../constants/action-types.js';

// action creators
// actions are dispatches later in the code

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
