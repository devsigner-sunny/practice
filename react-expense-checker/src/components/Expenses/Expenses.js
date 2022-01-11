import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = props => {
  const expenses = props.items;
  return (
    <>
      {expenses.map(item =>
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />)}
    </>
  );
}

export default Expenses;