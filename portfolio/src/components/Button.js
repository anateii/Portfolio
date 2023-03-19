import React from "react";
import "../styles/index.scss";

export const Button = ({ text, handleClick }) => {
  return (
    <button className="commonButton" onClick={handleClick}>
      {text}
    </button>
  );
};
