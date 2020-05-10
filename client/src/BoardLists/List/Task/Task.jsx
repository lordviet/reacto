import React, { useState, useEffect } from 'react';
import './Task.css';

function Task(props) {
    const { listName, boardId, name, isActive } = props;
    const [active, setActive] = useState(isActive);

    useEffect(() => {
        let boards = JSON.parse(localStorage.getItem('boards'));
        boards.find(b => b.id === boardId).lists
            .find(l => l.listName === listName).tasks
            .find(t => t.taskName === name).active = active;

        localStorage.setItem('boards', JSON.stringify(boards));
    });

    return (<div className={active ? "task" : "task task-checked"}>
        <h2>{name}</h2>
        <p onClick={() => setActive(!active)}>&#10004;</p>
    </div>);
}

export default Task;