//index.js file is the first file to execute
// ReactDOM object is improted form the third party
// library ie.react-dom which is our dependancy and which is downloaded locally.
//react-dom and react forms a react library

// features from react-dom library are available in this file.
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
//App component is rendered in the place opf element where id is 'root'
ReactDOM.render(<App />, document.getElementById("root"));
//calling a render method on that ReactDOM object
//html code inside js . here it works bcoz it is tranformed before its delivers to browser
//
