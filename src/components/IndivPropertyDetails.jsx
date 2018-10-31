import React from 'react';
import PropOnePic from './../../src/images/ppty2.jpg';

class IndivPropertyDetails extends React.Component {
  constructor() {
    super();
    this.state = { };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <section id="indiv-property-details">
        <div className="row">
          <div className="col-md-3">
            <img id="prop-image" className="img-fluid rounded mx-auto d-block" src={PropOnePic} alt="current property" />
          </div>
          <div className="col">
            <div className="card">
              <h5 id="indiv-property-details-header" className="card-header">Property Details</h5>
              <div className="card-body">
                <div id="indiv-prop-address">
                  <h5 className="">123 Elm St.</h5>
                  <h5 className="">#305</h5>
                  <h5 className="">Denver, CO 80209</h5>
                </div>
                <br />
                <div id="prop-specs">
                  <p id="tenant-name" className="card-text indiv-prop-spec">Current Tenant: John Williams</p>
                  <p id="tenant-email" className="card-text indiv-prop-spec">Current Tenant Email: jwilliams@jj.com</p>
                  <p id="rental-amount" className="card-text indiv-prop-spec">Monthly Rental Amount: $1,350.00</p>
                  <p id="lease-range" className="card-text indiv-prop-spec">Lease Date Range: 6/1/2018 - 5/31/2019</p>
                </div>
                <br />
                <a href="#" className="btn btn-outline-success">Edit Details</a>
                <a href="view-properties.html" className="btn btn-outline-success">Back to All Properties</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IndivPropertyDetails;
