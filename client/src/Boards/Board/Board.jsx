import React from 'react'
import './Board.css'

function Board(props) {
    return (
        <div className="board">
            {props.name ? <h2>{props.name}</h2> : <h2>Create new board...</h2>}
        </div>
    )
}

export default Board;