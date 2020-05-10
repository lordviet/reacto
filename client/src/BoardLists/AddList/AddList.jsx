import React, { useState } from 'react';
import './AddList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import boardActions from '../../Boards/Board/boardActions';

function AddList(props) {
    const [active, setActive] = useState(false);
    const [listName, setListName] = useState('');
    const [error, showError] = useState('');

    function closeList() {
        setActive(false);
        setListName('');
        showError('');
    }

    function createList() {
        if (listName && listName.length <= 30) {
            closeList();
            const boardId = props.id;
            boardActions.addListToBoard(listName, boardId);
            props.updateLists(JSON.parse(localStorage.getItem('boards'))
                .filter(b => b.id === boardId)[0].lists);
        }
        else {
            // Maybe 30 is too long for board
            listName.length > 30 ?
                showError("Name is too long!") :
                showError('Give me a name!')
        }
    }

    let list;

    if (active) {
        list = <div className="add-list add-list-active">
            <FontAwesomeIcon className="closeIcon" icon={faTimes} onClick={() => closeList()} />
            <h3>Creating new list</h3>
            <p>What shall we call the list?</p>
            <input type="text" name="listname" onChange={e => setListName(e.target.value)} />
            <button onClick={() => createList()}>CREATE</button>
            <p className={error ? "create-board-err" : "create-board-err hidden"}>{error}</p>
        </div>
    }
    else {
        list = <div className="add-list"
            onClick={() => setActive(true)}>
            <h2>Add List</h2>
        </div>
    }

    return list;
}

export default AddList;