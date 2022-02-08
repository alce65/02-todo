/* eslint-disable react/no-typos */
import { useState } from 'react';
import { Task } from '../../models/task';

export function Add({ addTask }) {
    const [newTask, setNewTask] = useState(new Task());

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('Added task', newTask);
        addTask(newTask);
        setNewTask(new Task());
    };

    const handleChangeName = (ev) => {
        setNewTask({ ...newTask, name: ev.target.value });
    };

    const handleChangeResp = (ev) => {
        console.log();
        setNewTask({ ...newTask, responsible: ev.target.value });
    };

    return (
        <>
            <h2>Add Tarea</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de la tarea"
                    value={newTask.name}
                    onChange={handleChangeName}
                    required
                />
                <input
                    type="text"
                    placeholder="Responsable de la de la tarea"
                    value={newTask.responsible}
                    onChange={handleChangeResp}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}
