import React from 'react';

function AllExpenses({ expenses }) {
  const tempArr = [];
  for (let expenseCategory in expenses) {
    expenses[expenseCategory].forEach(exp => tempArr.push(exp));
  }
  // add key with id when database available
  return (
    tempArr.map((expense, i) => {
      <tr key={i} className="expense-row">
        <td scope="col"><input type="checkbox" className="check" /></td>
        <td className="date">{expense.date}</td>
        <td className="description">{expense.description}</td>
        <td className="expense-image"><img src={expense.image} alt="Expense image" /></td>
        <td className="category">{expense.category}</td>
        <td className="amount">{expense.amount}</td>
      </tr>
    }
  ));
}

export default AllExpenses;