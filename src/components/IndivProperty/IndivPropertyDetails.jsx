import React from 'react';
import { Button } from 'reactstrap';
import EditProperty from './EditProperty'
import PropOnePic from '../../images/ppty2.jpg';
import '../../styles/IndivPropDetails.css';

const store = require('store');

class IndivPropertyDetails extends React.Component {
  constructor() {
    super();
    const myRental = JSON.parse(store.get('rentals'));
    this.state = {
      rentals: myRental,
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const displayAddress = this.state.rentals[0].address;
    const displayTenant = this.state.rentals[0].tenantInfo;
    // const { modal }  = this.state;

    return (
      <section id="indiv-property-details">
        <div className="row">
          <div className="col-md-3">
            <img id="prop-image" className="img-fluid rounded mx-auto d-block" src={PropOnePic} alt="current property" />
          </div>
          <div className="col">
            <div className="card">
              <h5 id="indiv-property-details-header" className="card-header text-left">Property Details</h5>
              <div className="card-body text-left">
                <div id="indiv-prop-address">
                  <h5 className="">{displayAddress.address1}</h5>
                  <h5 className="">{displayAddress.address2}</h5>
                  <h5 className="">
                    {`${displayAddress.city}, ${displayAddress.state} ${displayAddress.zip}`}
                  </h5>
                </div>
                <br />
                <div id="prop-specs">
                  <p id="tenant-name" className="card-text indiv-prop-spec">{`Current Tenant: ${displayTenant.firstName} ${displayTenant.lastName}`}</p>
                  <p id="tenant-email" className="card-text indiv-prop-spec">{`Current Tenant Email: ${displayTenant.email}`}</p>
                  <p id="rental-amount" className="card-text indiv-prop-spec">{`Monthly Rental Amount: $${displayTenant.monthlyRent}`}</p>
                  <p id="lease-range" className="card-text indiv-prop-spec">{`Lease Date Range: ${displayTenant.leaseStart} - ${displayTenant.leaseEnd}`}</p>
                </div>
                <br />
                <EditProperty
                  isOpen={this.state.modal}
                  rentals={this.state.rentals}
                  toggle={this.toggle}
                  />
                <Button id="edit-prop-button" className="btn btn-success btn-sm" type="button" onClick={this.toggle}>Edit Details</Button>
                <button className="btn btn-success btn-sm" type="button">Back to All Properties</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IndivPropertyDetails;
