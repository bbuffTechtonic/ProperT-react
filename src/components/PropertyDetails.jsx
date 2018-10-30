import React from 'react';
import IndivPropertyDetails from './IndivPropertyDetails.jsx';

class PropertyDetails extends React.Component {
  render() {
    return (
      <section className="container prop-details-container">
        <IndivPropertyDetails />
      </section>
    );
  }
};

export default PropertyDetails;
