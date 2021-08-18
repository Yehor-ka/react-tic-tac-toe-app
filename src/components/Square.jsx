import React from 'react';

const Square = ({ value, onClickStep, winSquare }) => {
  return (
    <div
      onClick={onClickStep}
      className="square"
      style={{ backgroundColor: winSquare ? 'green' : 'rgb(63, 42, 71)' }}>
      <span>{value}</span>
    </div>
  );
};

export default Square;
