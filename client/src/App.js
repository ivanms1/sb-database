import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './containers/Login';
import ContactList from './components/contact-list.js';
import Redux from './components/redux';
import EditContact from './components/edit-contact';
import AddContact from './components/add-contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/contacts" component={ContactList}/>
          <Route path="/redux" component={Redux}/>
          <Route path="/edit" component={EditContact}/>
          <Route path="/add" component={AddContact}/>
        </div>
      </Router>
    );
  }
}

export default App;
