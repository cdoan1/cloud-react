# icp-redux

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# description

I'm using this project to learn redux in earnest from start. We've been working on front end, and
brute forcing things is just not going to fly anymore. It's just not professional, given where we are.

# Reducer

## Add Pattern

```javascript

return { ...state, articles: [...state.articles, action.payload] };
```

## Remove Pattern

```javascript

return { articles: [...state.articles.filter(el => el.id !== action.payload.id)]}
```
