import React from 'react'
import './Boards.css'
import Board from './Board/Board'

function Boards(){
    return (
        <div className="boards">
            <Board></Board>
            <Board name={"Test"}></Board>
            <Board name={"Test"}></Board>
            <Board name={"Test"}></Board>
            <Board name={"Test"}></Board>
        </div>
        
    )
}

export default Boards;