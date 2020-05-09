import React from 'react';
import BoardName from './BoardName/BoardName';

function BoardLists(props) {
    const boardName = JSON.parse(localStorage.getItem('boards'))
        .filter(b => b.id === +props.match.params.id)[0].boardName;
    return (
        <div>
            <BoardName name={boardName} />
            {/* map => <List>  */}
            {/* <Add List> */}
        </div>
    )

}

export default BoardLists;