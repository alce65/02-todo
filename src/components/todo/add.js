/* eslint-disable react/no-typos */
import { useState } from 'react';

export function Add({ addTask }) {
    const [newTask, setNewTask] = useState('Prueba');

    const handlerClick = () => {
        console.log('Added task', newTask);
        addTask(newTask);
        setNewTask('');
    };

    const handleInput = (ev) => {
        setNewTask(ev.target.value);
        // newTask= ev.target.value;
    };

    return (
        <>
            <h2>Add Tarea</h2>
            <input
                type="text"
                placeholder="Nueva tarea"
                value={newTask}
                onInput={handleInput}
            />
            <button onClick={handlerClick}>Add</button>
        </>
    );
}
