import React from 'react';

const Button = ({ val, extraClass, clickBtn }) => {
  const btnHandle = () => {
    clickBtn(val);
  };
  return (
    <button
      onClick={btnHandle}
      className={extraClass ? `btn ${extraClass}` : 'btn btn-number'}
    >
      {val}
    </button>
  );
};

export default Button;
