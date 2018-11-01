import React from 'react';
import { Graph } from './Graph.jsx';
import { Money } from './Money.jsx';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    const date = new Date(Date.now());
    const currentYear = date.getFullYear();
    this.handleClick = this.handleClick.bind(this);
    this.state = { fiscalYear: currentYear,
    totExpenses: '10,000.00',
    totIncome: '20,000.00',
    totProfit: '10,000.00'}

  }

  handleClick(e) {

        this.setState({ fiscalYear: e.target.value });

  }


  render() {
    return (
      <section className="dashboard">
        <br />
        <h1>Dashboard</h1>
        <br />
        <div id="fiscal-year" className="row justify-content-center">
          <div id="fy-col" className="input-group col-6 col-sm-3">
            <div className="input-group-prepend">
              <label className="input-group-text" >Year</label>
            </div>
            <select onChange={this.handleClick} defaultValue={this.state.fiscalYear} className="custom-select" id="my-year">
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
          </div>
          <div className="col-auto" id="btn-individual-property">
              <a href="view-properties.html" role="button" className="btn btn-success">View Single Property</a>
          </div>
        </div>
        <br />
        <Graph fiscalYearProp = {this.state.fiscalYear} />
        <Money totIncome = {this.state.totIncome} totExpenses = {this.state.totExpenses} totProfit = {this.state.totProfit} />
        <br />
      </section>
    );
  }
}

export default Dashboard;
