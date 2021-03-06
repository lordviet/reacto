import React, { useState } from 'react';
import './Board.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import boardActions from '../../services/boardActions';
import { Link } from 'react-router-dom';

function Board(props) {

    const [active, setActive] = useState(false);
    const [boardName, setBoardName] = useState('');
    const [error, showError] = useState('');

    function closeBoard() {
        setActive(false);
        setBoardName('');
        showError('');
    }

    function createBoard() {
        if (boardName && boardName.length <= 30) {
            closeBoard();
            boardActions.addBoardToStorage(boardName);
            props.updateBoards(JSON.parse(localStorage.getItem("boards")));
        }
        else {
            boardName.length > 30 ?
                showError('Name is too long!') :
                showError('Oops! You forgot the name!')
        }
    }

    if (props.name) {
        const { name, boardId } = props;
        return (
            <Link className="board linkBoard" to={`/board/${boardId}`}>
                <div>
                    <h2>{name}</h2>
                </div>
            </Link>
        )
    }

    let board;

    if (active) {
        board = <div className="board create-board create-board-active">
            <FontAwesomeIcon className="closeIcon" icon={faTimes} onClick={() => closeBoard()} />
            <h3>Creating new board</h3>
            <p>What shall we call the board?</p>
            <input type="text" name="boardname" onChange={e => setBoardName(e.target.value)} />
            <button onClick={() => createBoard()}>CREATE</button>
            <p className={error ? 'create-board-err' : 'create-board-err hidden'}>{error}</p>
        </div>
    }

    else {
        board = <div className="board create-board"
            onClick={() => setActive(true)}>
            <h2>Create new board...</h2>
        </div>
    }

    return board;
}


export default Board;