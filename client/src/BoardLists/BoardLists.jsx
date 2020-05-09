import React from 'react';
import './BoardLists.css'
import BoardName from './BoardName/BoardName';
import AddList from './AddList/AddList';
function BoardLists(props) {
    //  Make a check about cases where it doesn't exist and user inputs it manually
    const boardId = +props.match.params.id;
    const boardName = JSON.parse(localStorage.getItem('boards'))
        .filter(b => b.id === boardId)[0].boardName;
    return (
        <div className="boardLists">
            <BoardName name={boardName} />
            <div className="lists">
                {/* map => <List>  */}
                <AddList id={boardId} />
            </div>
        </div>
    )

}

export default BoardLists;