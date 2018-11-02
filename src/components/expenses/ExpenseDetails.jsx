import React, { Component } from 'react';
import TableButtons from './TableButtons';
import TableNav from './TableNav';
import DisplayTable from './Table';
import AddExpense from './AddExpense';

const store = require('store');

class ExpenseDetails extends Component {
  constructor(props) {
    super(props);
    const { rental } = this.props;
    this.state = {
      modal: false,
      currentExpenses: rental.expenses,
    };
  }

  handleToggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  handleSelectedExpense = (e) => {
    const selectedExpense = e.target.textContent === "Supplies/Goods" ? "suppliesGoods" : e.target.textContent.toLowerCase();
    const { rental } = this.props;
    let expenses;
    switch(selectedExpense) {
      case "all":
        expenses = rental.expenses;
        break;
      case "hoa":
        expenses = rental.expenses.hoa;
        break;
      case "maintenance":
        expenses = rental.expenses.maintenance;
        break;
      case "mileage":
        expenses = rental.expenses.mileage;
        break;
      case "misc":
        expenses = rental.expenses.misc;
        break;
      case "mortgage":
        expenses = rental.expenses.mortgage;
        break;
      case "rent":
        expenses = rental.expenses.rent;
        break;
      case "suppliesGoods":
        expenses = rental.expenses.suppliesGoods;
        break;
      }
    this.setState({ currentExpenses: expenses });
  }

  render() {
    const { modal, currentExpenses } = this.state;
    const { rental } = this.props;
    return (
      <section id="expense-details">
        <TableButtons toggle={this.handleToggle} isOpen={modal} />
        <AddExpense toggle={this.handleToggle} isOpen={modal} />
        <div className="row">
          <TableNav selectExpense={this.handleSelectedExpense} />
          <DisplayTable currentExpenses={currentExpenses} createTable={this.createTable} />
        </div>
      </section>
    );
  }
}

export default ExpenseDetails;
