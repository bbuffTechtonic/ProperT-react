import React from 'react';
import { Link } from 'react-router-dom';
import LogoPic from '../images/logo-white-on-tp.png';
import '../styles/Nav.css';
const store = require('store');

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {rentals:[]};
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.hydrateStateWithStore();
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      'beforeunload',
      this.saveStateToStore.bind(this),
    );
  }

  hydrateStateWithStore() {
    // get the key's value from localStorage
    let value = store.get('rentals');
    // parse the localStorage string and setState
    try {
      value = JSON.parse(value);
      this.setState({ 'rentals': value });
    } catch (e) {
      // handle empty string
      this.setState({ 'rentals': value });
    }
  // }
  }

  saveStateToStore() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      store.set(key, JSON.stringify(this.state[key]));
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="nav-bar">
          <img id="nav-logo" className="navbar-brand" width="120px" src={LogoPic} alt="company logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Dashboard<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/add-property" className="nav-link">Add Property</Link>
              </li>
              <li className="nav-item">
                <Link to="/account" className="nav-link">My Account</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/property-details" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Property Details
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="property-details.html">3 Market St.</a>
                  <a className="dropdown-item" href="property-details.html">20 Ave De Gaulle</a>
                  <a className="dropdown-item" href="property-details.html">34 Sandringham Place</a>
                </div>
              </li>
            </ul>
            <a href="landing.html" id="logout-button" className="btn btn-outline-success btn-sm">Logout</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
