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
      currentExpenses: rental.expenses,
      checkAll: false,
    };
  }

  componentDidMount() {
    const { currentExpenses } = this.state;
    let tempArr = [];
    for (let category in currentExpenses) {
    currentExpenses[category].map(expense => tempArr.push(expense));
    }
    this.setState({ currentExpenses: tempArr });
  }

  handleToggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  handleSelectedExpense = (e) => {
    const selectedExpense = e.target.textContent === "Supplies/Goods" ? "suppliesGoods" : e.target.textContent.toLowerCase();
    const { rental } = this.props;
    let expenses;
    let tempArr = [];
    switch(selectedExpense) {
      case "all":
        expenses = rental.expenses;
        for (let category in expenses) {
        expenses[category].map(expense => tempArr.push(expense));
        }
        expenses = tempArr;
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

  handleCheckAll = (e) => {
    this.setState({ checkAll: true });
  }

  render() {
    const { modal, currentExpenses } = this.state;
    const { rental } = this.props;
    const { handleAddExpense } = this.props;
    return (
      <section id="expense-details">
        <TableButtons
          toggle={this.handleToggle}
          isOpen={modal}
        />
        <AddExpense
          toggle={this.handleToggle}
          isOpen={modal}
          rental={rental}
          handleAddExpense={handleAddExpense}
        />
        <div className="row">
          <TableNav selectExpense={this.handleSelectedExpense} />
          <DisplayTable
            currentExpenses={currentExpenses}
            rental={rental}
            checkAll={this.handleCheckAll}
          />
        </div>
      </section>
    );
  }
}

export default ExpenseDetails;
