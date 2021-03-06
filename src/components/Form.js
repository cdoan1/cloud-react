import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    // invoke th action here to update the state
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
      <form onSubmit={this.handleSubmit} className="mui-form">
        <div className="form-group">
          {/* <label htmlFor="title">Title</label> */}
          <div className="mui-textfield">
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            placeholder="title"
            onChange={this.handleChange}
          />
          </div>
        </div>
        <button type="submit" className="btn btn-success btn-lg mui-btn mui-btn--primary mui-btn--raised">
          SAVE
        </button>
      </form>
      <button onClick={(event) => {console.log('button event:', event)}} className="btn btn-success btn-lg mui-btn mui-btn--primary mui-btn--raised">
          UPDATE USERS
      </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
};
  
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;