import React from 'react';
import './styles.css';

function Button(props) {
  const {
    text,
    onClick,
    type,
  } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
