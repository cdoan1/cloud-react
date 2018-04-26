import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import Form from './components/Form';
import Tiles from './components/Tiles';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="App-intro">
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
    </div>
  </div>
);

export default App;
