import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // const [userInput, setUserInput] = useState[
  // {
  // enteredTitle: "",
  // enteredDate: "",
  // enteredAmount: "",
  // }
  // ];

  const titleChangedHandler = (event) => {
    console.log(event);
    setEnteredTitle(event.target.value);
    // setUseInput({
    // ...userInput,
    // enteredTitle: event.target.value,
    // });
    //React schdeuled state object,it doesnt perform them instantly
    //if we schdeule lot of state object ath the same time could be an incorrect state snapshot

    // This state snapshot in this inner function will alwayas be the latest state snpshot
    // setUserInput((prevState) => {
    // console.log(prevState);
    // return {
    // ...prevState,
    // enteredTitle: event.target.value,
    // };
    // });
  };
  const amountChangedHandler = (event) => {
    // setUseInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUseInput({ ...userInput, enteredDate: event.target.value });
  };
  const submitHandler = (event) => {
    //To prevent the page reload
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //child-to-parent
    //executing onsaveExpenseData,which is defined in a NewExpense component and executes a function saveExpenseDataHandler
    //becoz we are passing a pointer on it through onSaveExpenseData props
    props.onSaveExpenseData(expenseData);
    //expenseData as argument which will receive as a value in saveExpenseDataHandler as a parameter enteredExpenseData
    //console.log(expenseData);
    //to rest the form its called toway binding and the actual user entered value is displayed using value attribute in INPUT field of form
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
