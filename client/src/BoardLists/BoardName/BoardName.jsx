import React from 'react';
import './BoardName.css'

function BoardName(props) {
    return (
        <div className="boardName">
            <h1>{props.name}</h1>
        </div>
    )
}

export default BoardName;