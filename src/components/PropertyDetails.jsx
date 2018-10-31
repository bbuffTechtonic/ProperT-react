import React from 'react';
import IndivPropertyDetails from './IndivPropertyDetails';
import ExpenseDetails from './ExpenseDetails';

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
