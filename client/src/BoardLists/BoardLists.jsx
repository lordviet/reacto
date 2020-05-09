import React from 'react';
import './BoardLists.css'
import BoardName from './BoardName/BoardName';
import AddList from './AddList/AddList';
function BoardLists(props) {
    //  Make a check about cases where it doesn't exist and user inputs it manually
    const boardName = JSON.parse(localStorage.getItem('boards'))
        .filter(b => b.id === +props.match.params.id)[0].boardName;
    return (
        <div className="boardLists">
            <BoardName name={boardName} />
            <div className="lists">
                {/* map => <List>  */}
                <AddList />
            </div>
        </div>
    )

}

export default BoardLists;