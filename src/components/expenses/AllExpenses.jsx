import React from 'react';
import { Tr, Th, Td } from 'react-super-responsive-table';

function AllExpenses({ expenses }) {
  const categories = Object.values(expenses);
  // add key with id when database available
  console.log(expenses);
  console.log(categories);
  return (
    categories.map((category) => {
      category.map((expense, i) => (
        <tr key={i} className="expense-row">
          <td scope="col"><input type="checkbox" className="check" /></td>
          <td className="date">{expense.date}</td>
          <td className="description">{expense.description}</td>
          <td className="expense-image"><img src={`${expense.image}`} alt="Expense image" /></td>
          <td className="category">Mileage</td>
          <td className="amount">{expense.amount}</td>
        </tr>
      ),
      )
    })
    );
}

export default AllExpenses;