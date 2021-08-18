import React from 'react';
import Square from './Square';

const Board = ({ board, handleStep, winPos }) => {
  return (
    <div className="board">
      {board.map((value, i) => (
        <Square
          winSquare={winPos[0] === i || winPos[1] === i || winPos[2] === i}
          key={i}
          value={value}
          onClickStep={() => handleStep(i)}
        />
      ))}
    </div>
  );
};

export default Board;
