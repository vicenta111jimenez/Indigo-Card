import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, amount: 50, category: 'Food' },
    { id: 2, amount: 100, category: 'Transport' },
  ];

  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <div key={expense.id}>
          <span>{expense.category}: ${expense.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
