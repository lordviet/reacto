import React, { useState, useEffect } from 'react';
import './BoardLists.css'
import BoardName from './BoardName/BoardName';
import AddList from './AddList/AddList';
import List from './List/List';

function BoardLists(props) {
    //  Make a check about cases where it doesn't exist and user inputs it manually 404
    const boardId = +props.match.params.id;
    const { boardName, lists } = JSON.parse(localStorage.getItem('boards'))
        .filter(b => b.id === boardId)[0];
    const [allLists, setLists] = useState(lists);

    useEffect(() => {
        if (allLists) allLists.map(l => <List name={l.listName} key={l.listId} />);
    });

    return (
        <div className="boardLists">
            <BoardName name={boardName} />
            <div className="lists">
                {allLists ? allLists.map(l => <List name={l.listName} boardId={boardId} key={l.listId} />) : null}
                <AddList updateLists={setLists} id={boardId} />
            </div>
        </div>
    )

}

export default BoardLists;