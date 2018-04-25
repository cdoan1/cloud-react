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


import { ADD_ARTICLE } from '../constants/action-types';

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
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;
