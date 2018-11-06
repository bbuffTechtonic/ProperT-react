import React from 'react';
import AllExpenses from './AllExpenses';
import ExpenseCategory from './ExpenseCategory';

function DisplayTable({ currentExpenses, rental, handleCheckAll, checkAll }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body" id="exp-detail-card">
          <table className="table-striped" id="expenses-table">
            <thead className="bg-dark text-light">
              <tr>
                <th scope="col"><input type="checkbox" id="check-all" className="check" onClick={handleCheckAll} /></th>
                <th style={{ width: '100px' }} scope="col">Date</th>
                <th style={{ width: '300px' }} scope="col">Description</th>
                <th style={{ width: '100px' }} scope="col">Image</th>
                <th style={{ width: '200px' }} scope="col">Category</th>
                <th style={{ width: '100px' }} scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                currentExpenses === rental.expenses
                  ? <AllExpenses expenses={currentExpenses} checkAll={checkAll} />
                  : <ExpenseCategory category={currentExpenses} checkAll={checkAll} />
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayTable;
