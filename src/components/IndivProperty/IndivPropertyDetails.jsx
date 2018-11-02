import React, { Component } from 'react';
import { Button } from 'reactstrap';
import EditProperty from './EditProperty';
import PropOnePic from '../../images/ppty2.jpg';
import '../../styles/IndivPropDetails.css';

class IndivPropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { modal } = this.state;
    const { rental } = this.props;
    const { address, tenantInfo } = rental;
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
                  <h5 className="">{address.address1}</h5>
                  <h5 className="">{address.address2}</h5>
                  <h5 className="">
                    {`${address.city}, ${address.state} ${address.zip}`}
                  </h5>
                </div>
                <br />
                <div id="prop-specs">
                  <p id="tenant-name" className="card-text indiv-prop-spec">{`Current Tenant: ${tenantInfo.firstName} ${tenantInfo.lastName}`}</p>
                  <p id="tenant-email" className="card-text indiv-prop-spec">{`Current Tenant Email: ${tenantInfo.email}`}</p>
                  <p id="rental-amount" className="card-text indiv-prop-spec">{`Monthly Rental Amount: $${tenantInfo.monthlyRent}`}</p>
                  <p id="lease-range" className="card-text indiv-prop-spec">{`Lease Date Range: ${tenantInfo.leaseStart} - ${tenantInfo.leaseEnd}`}</p>
                </div>
                <br />
                <EditProperty
                  isOpen={modal}
                  rental={rental}
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
