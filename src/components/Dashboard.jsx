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
      rentals: [],
      fiscalYear: currentYear,
      totExpenses: '10,000.00',
      totIncome: '20,000.00',
      totProfit: '10,000.00',
    };
  }

  async componentDidMount() {
    const value = JSON.parse(store.get('rentals'));
    await this.setState({ rentals: value });
    this.getYearTotals(this.state.fiscalYear);
  }

  componentDidUpdate() {
    this.getYearTotals(this.state.fiscalYear);
  }

  getYearTotals(year) {

    let totExpenses = 0;
    let totIncome = 0;
    let oYear;

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.hoa.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.hoa[j].date)
        if (oYear.getFullYear() === year) {
          totExpenses = totExpenses + this.state.rentals[i].expenses.hoa[j].amount;
        }
      }
    }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.maintenance.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.maintenance[j].date)
        if (oYear.getFullYear() === year) {
          totExpenses = totExpenses + this.state.rentals[i].expenses.maintenance[j].amount;
        }
      }
    }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.misc.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.misc[j].date)
        if (oYear.getFullYear() === year) {
          totExpenses = totExpenses + this.state.rentals[i].expenses.misc[j].amount;
        }
      }
    }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.suppliesGoods.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.suppliesGoods[j].date)
        if (oYear.getFullYear() === year) {
          totExpenses = totExpenses + this.state.rentals[i].expenses.suppliesGoods[j].amount;
        }
      }
    }

    // for (let i = 0;i < this.state.rentals.length;i++) {
    //   for (let j = 0;j < this.state.rentals[i].expenses.hoa.length;j++) {
    //     oYear = new Date(this.state.rentals[i].expenses.hoa[j].date)
    //     if (oYear.getFullYear() === year) {
    //       totExpenses = totExpenses + this.state.rentals[i].expenses.hoa[j].amount;
    //     }
    //   }
    // }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.rent.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.rent[j].date)
        if (oYear.getFullYear() === year) {
          totIncome = totIncome + this.state.rentals[i].expenses.rent[j].amount;
        }
      }
    }

    this.setState({ totExpenses: totExpenses,
                    totIncome: totIncome,
                    totProfit: totIncome - totExpenses });

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
