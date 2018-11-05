import React from 'react';
import { Graph } from './Graph';
import { Money } from './Money';

const store = require('store');

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    const date = new Date(Date.now());
    const currentYear = date.getFullYear();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      rentals: [],
      optYears: [],
      fiscalYear: currentYear,
      totExpenses: '10,000.00',
      totIncome: '20,000.00',
      totProfit: '10,000.00',
    };
  }

  async componentDidMount() {
    const value = JSON.parse(store.get('rentals'));
    await this.setState({ rentals: value });
    this.setState({ optYears: this.getYears() })
    this.getYearTotals(this.state.fiscalYear);
  }

  getYears() {

    let distinctYears = [];
    let oYear;

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.hoa.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.hoa[j].date)
        distinctYears.push(oYear.getFullYear());
      }
    }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.maintenance.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.maintenance[j].date)
        distinctYears.push(oYear.getFullYear());
      }
    }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.misc.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.misc[j].date)
        distinctYears.push(oYear.getFullYear());
      }
    }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.suppliesGoods.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.suppliesGoods[j].date)
        distinctYears.push(oYear.getFullYear());
      }
    }

    for (let i = 0;i < this.state.rentals.length;i++) {
      for (let j = 0;j < this.state.rentals[i].expenses.rent.length;j++) {
        oYear = new Date(this.state.rentals[i].expenses.rent[j].date)
        distinctYears.push(oYear.getFullYear());
      }
    }

    let uniqueArray = [];
    let uniqueOptArray = [];
    for(let i = 0;i < distinctYears.length; i++){
      if(uniqueArray.indexOf(distinctYears[i]) == -1){
          uniqueArray.push(distinctYears[i]);
          uniqueOptArray.push(<option value= {distinctYears[i]} >{distinctYears[i]}</option>);
      }
    }

    return uniqueOptArray;

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
              {this.state.optYears}
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
