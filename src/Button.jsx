import React from 'react';

const Button = ({ value, onClick, className }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`rounded-lg p-4 text-xl ${className} hover:bg-zinc-400`}
    >
      {value}
    </button>
  );
};

export default Button;

