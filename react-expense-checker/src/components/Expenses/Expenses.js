import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

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
      <ExpenseList items={displayExpenses} />
    </>
  );
}

export default Expenses;