import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddProperty from './components/AddProperty';
import AccountManagement from './components/AccountManagement';
import PropertyDetails from './components/PropertyDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fiscalYear: Date.now()
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/add-property">Add Property</Link>
                </li>
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>
                  <Link to="/property-details">Property Details</Link>
                </li>
              </ul>
            </nav>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/add-property" component={AddProperty}></Route>
            <Route path="/my-account" component={AccountManagement}></Route>
            <Route path="/property-details" component={PropertyDetails}></Route>
          </header>
        </Router>
        <main>
          
        </main>
      </div>
    );
  }
}

export default App;
