import React, { useState, useRef } from 'react';
import './List.css';

function List(props) {
    const [task, setTaskName] = useState('');
    const refContainer = useRef("taskName");

    function createTask(e) {
        if (e.key === 'Enter') {
            console.log(task);
            setTaskName('');
            refContainer.current.value = '';
            // AddTask to current List
        }
    }

    return (
        <div className="list">
            <h2>
                {props.name}
            </h2>
            <input type="text" placeholder="Add a task" ref={refContainer}
                onChange={e => setTaskName(e.target.value)}
                onKeyDown={(e) => createTask(e)} />
        </div>
    )
}

export default List;