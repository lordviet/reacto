import React, { useState, useRef, useEffect } from 'react';
import './List.css';
import boardActions from '../../services/boardActions';
import Task from './Task/Task';

function List(props) {
    const [task, setTaskName] = useState('');
    const refContainer = useRef("taskName");
    const [allTasks, setTasks] = useState(boardActions.getListTasks(props.boardId, props.name));

    function createTask(e) {
        if (e.key === 'Enter') {
            // Task name too long check
            setTaskName('');
            refContainer.current.value = '';
            const { name, boardId } = props;
            boardActions.addTaskToList(task, boardId, name);
            setTasks(boardActions.getListTasks(boardId, name));
        }
    }

    useEffect(() => {
        if (allTasks) allTasks.map(t =>
            <Task name={t} key={allTasks.indexOf(t)} updateTasks={setTasks} />);
    });

    return (
        <div className="list">
            <h2>
                {props.name}
            </h2>
            <input type="text" placeholder="Add a task" ref={refContainer}
                onChange={e => setTaskName(e.target.value)}
                onKeyDown={(e) => createTask(e)} />
            {allTasks ? allTasks.map(t => <Task name={t} key={Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))} />) : null}
        </div>
    )
}

export default List;