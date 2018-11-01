import React, { Component } from 'react';
import TableButtons from './TableButtons';
import TableNav from './TableNav';
import Table from './Table';
import AddExpense from './AddExpense';

class ExpenseDetails extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  render() {
    const { modal } = this.state;
    return (
      <section id="expense-details">
        <TableButtons toggle={this.toggle} />
        <AddExpense toggle={this.toggle} isOpen={modal} />
        <div className="row">
          <TableNav />
          <div className="col">
            <div className="card">
              <div className="card-body" id="exp-detail-card">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExpenseDetails;
