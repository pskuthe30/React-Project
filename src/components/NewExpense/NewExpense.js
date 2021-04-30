import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* onSaveExpenseData is a props and execute a function function is just set a pointer and not been executed yet */}
      {/* saveExpenseDataHandler function is just set a pointer and not been executed yet */}
      {/* CHILD-TO_PARENT here expenseForm is a child component can communicate with parent ie. NewExpense component    */}
      {/* Bottom-up coomunication */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
