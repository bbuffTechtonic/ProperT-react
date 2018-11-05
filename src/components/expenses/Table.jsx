import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
// import 'reactstrap';
import AllExpenses from './AllExpenses';
import ExpenseCategory from './ExpenseCategory';

function DisplayTable({ currentExpenses }) {

  return (
    <div className="col">
      <div className="card">
        <div className="card-body" id="exp-detail-card">
          <table striped id="expenses-table">
            <thead className="bg-dark text-light">
              <tr>
                <th scope="col"><input type="checkbox" id="check-all" className="check" /></th>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                typeof currentExpenses === 'object'
                  ? <AllExpenses expenses={currentExpenses} />
                  : <ExpenseCategory category={currentExpenses} />
              }
              {/* <ReactTable data={currentExpenses} columns={} /> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayTable;
