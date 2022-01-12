import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('all');
  const expenses = props.items;

  const filterHandler= filterYear => {
    setSelectedYear(filterYear);
  }

  const filteredExpenses = expenses.filter(item => {
    return item.date.getFullYear() === Number(selectedYear);
  });

  let displayExpenses = selectedYear !== 'all' ? filteredExpenses : expenses;

  return (
    <>
      <ExpensesFilter selectedYear={selectedYear} onChangeFilter={filterHandler}/>
      { displayExpenses.map(item =>
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