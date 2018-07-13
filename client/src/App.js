import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './containers/Login';
import ContactList from './components/contact-list.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route exact path="/contacts" component={ContactList}/>
        </div>
      </Router>
    );
  }
}

export default App;
