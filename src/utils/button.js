import React from "react";
function Button({ text, onClick, disabled, type, key }) {
  return (
    <button disabled={disabled} onClick={onClick} type={type} key={key}>
      {text}
    </button>
  );
}

export default Button;
