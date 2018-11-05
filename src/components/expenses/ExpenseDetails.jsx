import React, { Component } from 'react';
import TableButtons from './TableButtons';
import TableNav from './TableNav';
import DisplayTable from './Table';
import AddExpense from './AddExpense';

class ExpenseDetails extends Component {
  constructor(props) {
    super(props);
    const { rental } = this.props;
    this.state = {
      modal: false,
<<<<<<< HEAD
      currentExpenses: rental.expenses,
=======
      navSelect: 'All',
>>>>>>> add expense modal working
    };
  }

  handleToggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

<<<<<<< HEAD
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
=======
  // handleClick(e) {

  // }
>>>>>>> add expense modal working

  render() {
    const { modal, currentExpenses } = this.state;
    const { rental } = this.props;
    const { expenses } = rental;
    const { handleAddExpense } = this.props;
    return (
      <section id="expense-details">
        <TableButtons toggle={this.handleToggle} isOpen={modal} />
        <AddExpense
          toggle={this.handleToggle}
          isOpen={modal}
          rental={rental}
          handleAddExpense={handleAddExpense}
        />
        <div className="row">
          <TableNav selectExpense={this.handleSelectedExpense} />
          <DisplayTable currentExpenses={currentExpenses} rental={rental} />
        </div>
      </section>
    );
  }
}

export default ExpenseDetails;
