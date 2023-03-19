import React from "react";
import "../styles/index.scss";

export const Button = (props) => {
  return <button className="commonButton">{props.text}</button>;
};
