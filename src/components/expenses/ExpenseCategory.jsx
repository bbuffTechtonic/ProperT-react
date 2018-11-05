import React from 'react';

function ExpenseCategory({ category }) {
  // add key with id when database available
  // console.log(category)
  return (
    category.map((expense) => (
      <tr className="expense-row">
        <td scope="col"><input type="checkbox" className="check" /></td>
        <td className="date">{expense.date}</td>
        <td className="description">{expense.description}</td>
        <td className="expense-image"><img src={expense.image} /></td>
        <td className="category">{expense.category}</td>
        <td className="amount">{expense.amount}</td>
      </tr>
  )
  )
  )
}

export default ExpenseCategory;