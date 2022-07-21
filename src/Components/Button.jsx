import React from "react";
import '../styles/Button.css';

function Button(props) {

  const isNumberKey = value =>{
    return isNaN(value) && (value !== '.') && (value !== '=');
  }
  const isClearKey = value =>{
    return value === 'Clear';
  }

  return (
    <button
      className= { isNumberKey(props.children) ? "buttonNumber" : "buttonPrimary" } 
      onClick= { isClearKey(props.children) ? props.resetValue : () => props.getValue(props.children) } >
      {props.children}
    </button>
  );
}

export default Button;