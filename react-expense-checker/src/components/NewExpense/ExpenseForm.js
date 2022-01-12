import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveExpense(newExpenseData);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');

  }

  const titleHandler = (e) => {
    setInputTitle(e.target.value);
  }

  const amountHandler = (e) => {
    setInputAmount(e.target.value);
  }

  const dateHandler = (e) => {
    setInputDate(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleHandler} value={inputTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountHandler}
            value={inputAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2024-12-31'
            onChange={dateHandler}
            value={inputDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;