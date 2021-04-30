import React from "react";
import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  // don't forgot to add white space after the classname 'card '
  // any value added to the props with a className will be added to this string of classes after the class name 'card'
  return <div className={classes}>{props.children}</div>;
};

export default Card;
