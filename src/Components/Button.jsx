import React from "react";
import '../styles/Button.css';

function Button(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }

  return (
    <button
      className= { isOperator(props.children) ? "buttonNumber" : null } >
      {props.children}
    </button>
  );
}

export default Button;