import React, { useState } from 'react'
import './Board.css'

function Board(props) {
    
    // Change the hook whenever the board is clicked
    const [active, setActive] = useState(false);
    if (props.name) {
        return (
            <div className="board">
                <h2>{props.name}</h2>
            </div>
        )
    }
    
    console.log(active);
    // create a var and change it according to active 
    // className create-board-active
    return (

        <div className="board create-board"
            onClick={() => setActive(true)}>
            <h2>Create new board...</h2>
        </div>
    )
}

export default Board;