import React from 'react'

const Square = ({ value, onClickStep }) => {
    return (
        <div onClick={onClickStep} className="square">
            <span>{value}</span>
        </div>
    )
}

export default Square
