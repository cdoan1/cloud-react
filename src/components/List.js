import React from "react";
import { connect } from "react-redux";

const ConnectedList = ({ articles }) => {

  console.log('articles:', articles);

  return (
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item mui-list--unstyled" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
  );
};

// changed when converting to combineReducer
// const mapStateToProps = state => {
//   return { articles: state.articles };
// };
const mapStateToProps = state => {
  return state.articles;
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;