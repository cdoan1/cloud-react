import React, { Component } from "react";

// this is a simple component
// that defines its own state
// this is a STATEFUL COMPONENT
class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}

// esport this component , so that the component can be imported in another file
export default ExampleComponent;