import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import Form from './components/Form';
import Tiles from './components/Tiles';
import Users from './components/Users';


const App = () => (
  <div className="App">
    <header id="header">
      <div className="mui-appbar mui--appbar-line-height">
        <div className="mui-container-fluid">
          <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
          <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
          <span className="mui--text-title mui--visible-xs-inline-block">Brand.io</span>
        </div>
      </div>
    </header>
    <div id="content-wrapper">
      <div className="row mt-5 mui-mt-5">
        <div className="col-md-4 offset-md-1 mui-col-md-4">
          <h1>Articles</h1>
          <List />
        </div>
        <div className="col-md-4 offset-md-1 mui-col-md-4">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
      <div>
        <Tiles />
      </div>
      <div>
        <Users />
      </div>
    </div>
    <footer id="footer">
      <div className="mui-container-fluid">
        <span><br/>
        Made with ♥ by <a href="https://www.muicss.com">MUI</a>
        </span>
      </div>
    </footer>
  </div>
);

export default App;
