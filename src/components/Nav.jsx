import React from 'react';
import { Link } from 'react-router-dom';
import LogoPic from '../images/logo-white-on-tp.png';
import AddProperty from './AddProperty';
import '../styles/Nav.css';
import Dropdown from './Dropdown';

const store = require('store');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: JSON.parse(store.get('rentals')),
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal, rentals } = this.state;
    const { currentRental } = this.props;
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
                <a className="nav-link" id="add-property-modal" onClick={this.toggle}>Add Property</a>
                <AddProperty modal={modal} toggle={this.toggle} />
              </li>
              <li className="nav-item">
                <Link to="/account" className="nav-link">My Account</Link>
              </li>
              {rentals.length>0?
                <li className="nav-item">
                <Dropdown className="nav-item"
                  title="Select Rental"
                  list={rentals}
                />
                </li>
                :<li className="nav-item"><Dropdown className="nav-item"
                  title={"No Properties"}
                  list={[]}
                />
                </li>
              }
            </ul>
            <button type="button" id="logout-button" className="btn btn-outline-success btn-sm">Logout</button>
          </div>
        </nav>
      </div>
    );

}
}
export default NavBar;
