import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddProperty from './AddProperty';
import AccountManagement from './AccountManagement';
import PropertyDetails from './PropertyDetails';
import Landing from './Landing';
import LogoPic from '../images/logo-white-on-tp.png';
import '../styles/Nav.css';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { };
    // this.handleClick = this.handleClick.bind(this);
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
                  <a className="dropdown-item" href="property-details.html">2 Water Street</a>
                  <a className="dropdown-item" href="property-details.html">20 Ave De Gaulle</a>
                  <a className="dropdown-item" href="property-details.html">34 Sandringham Place</a>
                </div>
              </li>
            </ul>
            <a href="landing.html" id="logout-button" className="btn btn-outline-success btn-sm">Logout</a>
          </div>
        </nav>
        <Route exact path="/" component={Landing} />
        <Route path="/add-property" component={AddProperty} />
        <Route path="/my-account" component={AccountManagement} />
        <Route path="/property-details" component={PropertyDetails} />
      </div>
    );
  }
}

export default NavBar;
