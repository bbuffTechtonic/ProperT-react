import React, { Component } from 'react';
import TableButtons from './TableButtons';
import TableNav from './TableNav';
import DisplayTable from './Table';
import AddExpense from './AddExpense';

class ExpenseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      navSelect: "All",
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  // handleClick(e) {
    
  // }

  render() {
    const { modal, navSelect } = this.state;
    const { rental } = this.props;
    return (
      <section id="expense-details">
        <TableButtons toggle={this.handleToggle} isOpen={modal} />
        <AddExpense toggle={this.handleToggle} isOpen={modal} />
        <div className="row">
          <TableNav handleClick={this.handleClick} />
          <div className="col">
            <div className="card">
              <div className="card-body" id="exp-detail-card">
                <DisplayTable expenses={rental.expenses} navSelect={navSelect} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExpenseDetails;
