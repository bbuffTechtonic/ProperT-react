import React from 'react';
import { Graph } from './Graph.jsx';
import { Money } from './Money.jsx';

const store = require('store');

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    const date = new Date(Date.now());
    const currentYear = date.getFullYear();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      fiscalYear: currentYear,
      totExpenses: '10,000.00',
      totIncome: '20,000.00',
      totProfit: '10,000.00',
    };
  }

  getYearTotals(year) {

    for (var i = 0;i < this.state.rentals.length;i++) {

      



    }

  }

  handleClick(e) {
    this.setState({ fiscalYear: e.target.value });
  }

  render() {
    const { fiscalYear, totExpenses, totIncome, totProfit } = this.state;
    return (
      <section className="dashboard">
        <br />
        <h1>Dashboard</h1>
        <br />
        <div id="fiscal-year" className="row justify-content-center">
          <div id="fy-col" className="input-group col-6 col-sm-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Year</label>
            </div>
            <select onChange={this.handleClick} defaultValue={fiscalYear} className="custom-select" id="my-year">
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
          </div>
        </div>
        <br />
        <Graph fiscalYearProp={fiscalYear} />
        <Money totIncome={totIncome} totExpenses={totExpenses} totProfit={totProfit} />
        <br />
      </section>
    );
  }
}

export default Dashboard;
