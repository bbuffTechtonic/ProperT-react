import React from 'react';
import IndivPropertyDetails from './IndivProperty/IndivPropertyDetails';
import ExpenseDetails from './expenses/ExpenseDetails';

function PropertyDetails({ currentRental }) {
  return (
    <section id="property-details">
      <section className="container prop-details-container">
        <IndivPropertyDetails rental={currentRental} />
      </section>
      <section id="expense-details">
        <ExpenseDetails rental={currentRental} />
      </section>
    </section>
  );
}

export default PropertyDetails;
