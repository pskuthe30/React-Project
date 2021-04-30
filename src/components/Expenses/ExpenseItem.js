import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
//this component is called statless/presentational /dumb component(just there to ouput the data)
//'props' is a parameter object which  holds all the attributes of the custom element ie properties
//key for the props object will be the attribute name we used for the custom element in app.js
const ExpenseItem = (props) => {
  //change in the variable doesnot trigger the component function to run again but we have to tell React that it should run again
  // we need to import something from React library as usestate
  //whic allows function to define the value as a state where  changes to these values should reflect in the component being called again
  //props.title will be stored in the variable title and setTitle is the updating function

  //usestate always returns an array with exactly two elements with first element as current state value  and then the function to update the current value

  //it not just update the value but it also called the component function in which we called this function setTitle and in which we intitalize the state with the  useState is executed again
  // component in which this state was registered with usestate should be revaluated and therefore it excute the component function  again and evalutes the jsx code again and it will draw any changes
  //it detects compared to last time its evaluated on to the screen.

  return (
    //   There has to be only one root element in JSX return stament. In that root element there can be multiple elements.
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
