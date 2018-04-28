import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types';

//
// pattern for a reducer
//
const initialState = {
    articles: []
};

const articles = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            // merge into the current state object, articles
            // alternatives:
            // 1)
            // state.articles.push(action.payload); return state;
            // 2)
            // return { ...state, articles: state.articles.concat(action.payload) };
            // 3) best solution using spread operator
            console.log('adding new article', action.payload);
            return { ...state, articles: [...state.articles, action.payload] };
        case REMOVE_ARTICLE:
            console.log('remove article', action.payload);
            // 1)
            // slice is not immutable, does not return a new object
            // var index = state.articles.findIndex( article => article.id === action.payload.id);
            // return { articles: [...state.articles.slice(0, index), ...state.articles.slice(index+1)] }
            return { articles: [...state.articles.filter(el => el.id !== action.payload.id)]}
        default:
            return state;
    }
};

export default articles;
