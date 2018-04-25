import React, { Component } from "react";
import { connect } from "react-redux";

// this is a simple component
// that defines its own state
// this is a STATEFUL COMPONENT
class ConnectedExampleComponent extends Component {
  constructor() {
    super();
    // this.state = {
    //   articles: [
    //     { title: "React Redux Tutorial for Beginners", id: 1 },
    //     { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
    //   ]
    // };
  }
  render() {
    // state is null
    console.log('state:', this.state);
    // props has the state copied into it
    console.log('props:', this.props);
    const { articles } = this.props.articles;    
    return articles ? <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul> : <div>No Articles</div>;
  }
}

// **NOTE**
// instead of a `class` we can use this function component
//
// const ConnectedExampleComponent = ({ articles }) => (
//   <ul className="list-group list-group-flush">
//     {articles.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.title}
//       </li>
//     ))}
//   </ul>
// );

// map state to our local props for us to easily use!!!
const mapStateToProps = state => {
  return { articles: state.articles };
};

// connect this component to the store, and return as an new componnent
// which we will make available "externally"
const ExampleComponent = connect(mapStateToProps)(ConnectedExampleComponent);

// esport this component , so that the component can be imported in another file
export default ExampleComponent;