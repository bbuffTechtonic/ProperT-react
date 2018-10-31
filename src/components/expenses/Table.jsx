import React from 'react';
import 'reactstrap';

function Table() {
  return (
    <table className="table table-responsive-md table-striped table-sm" id="expenses-table">
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
        <tr className="expense-row">
          <th scope="col"><input type="checkbox" className="check" /></th>
          <td className="date">6/31/18</td>
          <td className="description">Fridge</td>
          <td className="expense-image">
          </td>
          <td className="category">Supplies/Goods</td>
          <td>$3000</td>
        </tr>
        <tr className="expense-row">
          <th scope="col"><input type="checkbox" className="check" /></th>
          <td className="date">7/1/18</td>
          <td className="description">Rent paid</td>
          <td className="expense-image">
          </td>
          <td className="category">Rent</td>
          <td>$1500</td>
        </tr>
        <tr className="expense-row">
          <th scope="col"><input type="checkbox" className="check" /></th>
          <td className="date">7/15/18</td>
          <td className="description">Interest</td>
          <td className="expense-image">
          </td>
          <td className="category">Mortgage</td>
          <td>$2000</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;