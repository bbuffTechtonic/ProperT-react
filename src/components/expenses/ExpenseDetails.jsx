import React, { Component } from 'react';
import TableButtons from './TableButtons';
import TableNav from './TableNav';
import Table from './Table';

class ExpenseDetails extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <section id="expense-details">
        <TableButtons />
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
