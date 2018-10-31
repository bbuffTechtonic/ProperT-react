import React from 'react';
import LogoPic from '../../src/images/logo-white-on-tp.png';
import '../../src/styles/Nav.css';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="nav-bar">
        <img id="nav-logo" className="navbar-brand" width="120px" src={LogoPic} alt="company logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add Property</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Account</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Property Details
              </a>
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
    );
  }
}

export default NavBar;
