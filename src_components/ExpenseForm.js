import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
