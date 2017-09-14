import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import Home from './components/Home';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import ContactDetails from './components/ContactDetails';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add/contact" component={AddContact} />
          <Route path="/contact/:id" render={ ({ match }) => <ContactDetails id={match.params.id} /> } />
          <Route path="/update/contact/:id" render={ ({ match }) => <UpdateContact id={match.params.id} /> } />
        </Switch>
      </div>
    );
  }

}

export default App;
