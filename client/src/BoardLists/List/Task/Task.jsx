import React, { useState } from 'react';
import './Task.css';

function Task(props) {
    const [active, setActive] = useState(true);

    return (<div className={active ? "task" : "task task-checked"}>
        <h2>{props.name}</h2>
        <p onClick={() => setActive(!active)}>&#10004;</p>
    </div>);
}

export default Task;