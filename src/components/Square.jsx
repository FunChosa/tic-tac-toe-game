import React from "react";
import "../App.css";

function Square({ value, chooseSquare }) {
  return (
    <div
      className="square"
      onClick={chooseSquare}
      style={{ color: value === "X" ? "#44f298" : "#e4ea54" }}
    >
      {value}
    </div>
  );
}

export default Square;
