import React from 'react';
import Square from './Square';

const Board = ({ board, handleStep, lineThroughStyle }) => {
  return (
    <div className="board">
      <div className="board__line-through" style={lineThroughStyle}></div>
      <div className="board__field">
      {board.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClickStep={() => handleStep(i)}
        />
      ))}
      </div>
    </div>
  );
};

export default Board;
