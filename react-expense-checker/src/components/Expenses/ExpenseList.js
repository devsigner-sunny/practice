import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = props => {
  const { items } = props;

  if (!items.length) {
    return (
      <h2 className="expenses-list__fallback">No result.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {items.length > 0 && items.map(item =>
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />)}
    </ul>
  );
}
export default ExpenseList;