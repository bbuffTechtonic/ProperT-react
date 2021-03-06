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
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const address = {
      address1: e.target[0].value,
      address2: e.target[1].value,
      city: e.target[2].value,
      state: e.target[3].value,
      zip: e.target[4].value,
    };

    const tenantInfo = {
      firstName: e.target[6].value,
      lastName: e.target[7].value,
      email: e.target[8].value,
      monthlyRent: e.target[9].value,
      leaseStart: e.target[10].value,
      leaseEnd: e.target[11].value,
    };

    const expenses = {
      mileage: [],
      mortgage: [],
      maintenance: [],
      suppliesGoods: [],
      misc: [],
      hoa: [],
      rent: [],
    };

    const newProperty = { address, tenantInfo, expenses };
    const rentals = [...this.state.rentals];
    rentals.push(newProperty);
    store.set('rentals', JSON.stringify(rentals));
    const value = JSON.parse(store.get('rentals'));
    this.props.hydrateStateWithStore();
  }

  render() {
    const { modal, rentals } = this.state;
    const { currentRental, updateCurrentRental, isLoggedIn, handleLogout} = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="nav-bar">
          <img id="nav-logo" className="navbar-brand" width="70px" src={LogoPic} alt="company logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            {
            isLoggedIn &&
              (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="add-property-modal" onClick={this.toggle}>Add Property</a>
                  <AddProperty modal={modal} toggle={this.toggle} onSubmit={this.handleSubmit}/>
                </li>
                <li className="nav-item">
                  <Link to="/account" className="nav-link">My Account</Link>
                </li>
                {
                  rentals.length > 0
                    ? <li className="nav-item">
                        <Dropdown
                          className="nav-item"
                          title="Select Rental"
                          list={rentals}
                          updateCurrentRental={updateCurrentRental}
                          currentRental={currentRental}
                        />
                      </li>
                    : <li className="nav-item">
                        <Dropdown
                          className="nav-item"
                          title={"No Properties"}
                          list={[]}
                          updateCurrentRental={updateCurrentRental}
                          currentRental={currentRental}
                        />
                      </li>
                }
              </ul>
              )
            }
            {isLoggedIn && <Link to="/" className="btn btn-sm btn-outline-success" onClick={handleLogout}>Logout</Link>}
          </div>
        </nav>
      </div>
    );

}
}
export default NavBar;
