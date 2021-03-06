import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* Custom component can be written in HTML format and to differentiate it from the Original 
      HTML tag, custom component always start capital letter and that's how react understand it.  */}
      {/* We can set properties for our custom components called as 'prop concepts' */}
      <Expenses items={expenses} />
    </div>
  );
  // return
  // React.createElement('div',{},
  // React.createElement('h2',{},"Let's get started!"),
  // React.createElement(Expenses,{items:expenses}))
  //
};

export default App;
