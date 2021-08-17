import React from 'react'
import Square from './Square'

const Board = ({ board, handleStep }) => {
    return (
        <div className="board">
            {
                board.map((value, i) => <Square key={i} value={value} onClickStep={() => handleStep(i)} />)
            }
        </div>
    )
}

export default Board
