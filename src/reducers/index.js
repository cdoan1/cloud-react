// const rootReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// export default rootReducer;

import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types';

//
// pattern for a reducer
//
const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
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
            var index = state.articles.findIndex( article => article.id === action.payload.id);
            return { articles: [...state.articles.slice(0, index), ...state.articles.slice(index+1)] }
        default:
            return state;
    }
};

export default rootReducer;
