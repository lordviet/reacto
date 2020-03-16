import React from 'react'
import './Boards.css'
import Board from './Board/Board'

function Boards(){
    return (
        <div className="boards">
            <Board></Board>
            <Board name={"Barbie"}></Board>
        </div>
        
    )
}

export default Boards;