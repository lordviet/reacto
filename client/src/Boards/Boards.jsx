import React, { useState, useEffect } from 'react';
import './Boards.css';
import Board from './Board/Board';

function Boards() {
    const [boards, setBoards] = useState(JSON.parse(localStorage.getItem("boards")));

    useEffect(() => {
        if (boards) boards.map(b => <Board name={b.boardName} boardId={b.id} key={b.id}/>);
    });

    return (
        <div className="boards">
            <Board updateBoards={setBoards}></Board>
            {boards ? boards.map(b => <Board name={b.boardName} boardId={b.id} key={b.id} />) : null}
        </div>
    )
}

export default Boards;