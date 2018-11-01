import React from 'react';
import IndivPropertyDetails from './IndivProperty/IndivPropertyDetails';
import ExpenseDetails from './expenses/ExpenseDetails.jsx';

function PropertyDetails() {
  return (
    <section id="property-details">
      <section className="container prop-details-container">
        <IndivPropertyDetails />
      </section>
      <section id="expense-details">
        <ExpenseDetails />
      </section>
    </section>
  );
}

export default PropertyDetails;
