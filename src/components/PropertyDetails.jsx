import React from 'react';
import IndivPropertyDetails from './IndivProperty/IndivPropertyDetails';
import ExpenseDetails from './expenses/ExpenseDetails';
import '../styles/EditProperty.css';

function PropertyDetails({ currentRental, handlePropertyUpdate, handleAddExpense }) {
  return (
    <section id="property-details">
      <section className="container prop-details-container">
        <IndivPropertyDetails rental={currentRental} handlePropertyUpdate={handlePropertyUpdate} />
      </section>
      <section className="container" id="expense-details">
        <ExpenseDetails rental={currentRental} handleAddExpense={handleAddExpense} />
      </section>
    </section>
  );
}

export default PropertyDetails;
