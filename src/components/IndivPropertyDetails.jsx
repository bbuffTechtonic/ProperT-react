import React from 'react';
import PropOnePic from '../images/ppty2.jpg';
import '../styles/IndivPropDetails.css';

const store = require('store');

class IndivPropertyDetails extends React.Component {
  constructor(props) {
    super(props);
    var rentals = JSON.parse(store.get('rentals'));
    //console.log(rentals, "rentals in const");
    this.state = {rentals:rentals};
    // this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.hydrateStateWithStore();
  //   // add event listener to save state to localStorage
  //   // when user leaves/refreshes the page
  //   window.addEventListener(
  //     'beforeunload',
  //     this.saveStateToStore.bind(this),
  //   );
  // }

  // hydrateStateWithStore() {
  //   // get the key's value from localStorage
  //   let value = store.get('rentals');
  //   // parse the localStorage string and setState
  //   try {
  //     value = JSON.parse(value);
  //     this.setState({ 'rentals': value });
  //   } catch (e) {
  //     // handle empty string
  //     this.setState({ 'rentals': value });
  //   }
  // // }
  // }

  // saveStateToStore() {
  //   // for every item in React state
  //   for (let key in this.state) {
  //     // save to localStorage
  //     store.set(key, JSON.stringify(this.state[key]));
  //   }
  // }

  render() {
    var address1 = this.state.rentals[0].address.address1;
    console.log(address1);
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
                  <h5 className="">{address1}</h5>
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
                <a href="#" className="btn btn-success">Edit Details</a>
                <a href="view-properties.html" className="btn btn-success">Back to All Properties</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IndivPropertyDetails;
