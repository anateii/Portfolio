import React from "react";
import "../styles/index.scss";

export const Button = (props) => {
  return (
    <button onClick={() => props.link} className="commonButton">
      {props.text}
    </button>
  );
};
