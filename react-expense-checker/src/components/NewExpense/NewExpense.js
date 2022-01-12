import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const onSaveNewExpenseHandler = newExpenseData => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  const showAddFormHandler = (status) => {
    status ? setShowAddForm(true) : setShowAddForm(false);
  }
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className='new-expense'>
      {!showAddForm && <button onClick={showAddFormHandler}>Add new expense</button>}
      {showAddForm &&
      <ExpenseForm onSaveExpense={onSaveNewExpenseHandler} onShowForm={showAddFormHandler}/>}
    </div>
  );
};

export default NewExpense;