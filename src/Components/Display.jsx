import React from "react";
import '../styles/Display.css';

function Display({value}) {
  return (
    <span className="display">
      {value}
    </span>
  );
}
export default Display;