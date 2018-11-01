import React from 'react';
import { Link } from 'react-router-dom';
import LogoPic from '../images/logo-white-on-tp.png';
import AddProperty from './AddProperty';
import '../styles/Nav.css';

// const store = require('store');

function NavBar({ modal, toggle }) {
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
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="add-property-modal" onClick={toggle}>Add Property</a>
              <AddProperty modal={modal} />
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
          <button type="button" id="logout-button" className="btn btn-outline-success btn-sm">Logout</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
