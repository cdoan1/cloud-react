# icp-redux

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# description

```
git clone
npm install
npm start
```

# ChangeLog

| change or feature |
|-------------------|
| [x] pass function to child component via `props` |
| [x] define a `rootreducer` |
| [x] enable `combineReducer` |
| [x] multiple reducers: articles and todos |
| [x] `asynchronous` reducer, using redux middleware: `thunk` and `promise` |
| [x] fetch external data source into redux |
| [ ] trigger async action from component, and remove from index.js |


# Reducer

## Add Pattern

```javascript

return { ...state, articles: [...state.articles, action.payload] };
```

## Remove Pattern

```javascript

return { articles: [...state.articles.filter(el => el.id !== action.payload.id)] }
```
