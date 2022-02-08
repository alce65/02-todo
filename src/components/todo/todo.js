import { useState } from 'react';
import { Add } from './add';
import { Task } from './task';

export function ToDo() {
    const [tasks, setTasks] = useState(['Tarea 1', 'Tarea 2']);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (task) => {
        setTasks(tasks.filter((item) => item !== task));
    };

    /* const aTasks = tasks.map((task, i) => {
        return <li key={i}>{task}</li>;
    }); */
    return (
        <>
            <Add addTask={addTask}></Add>
            <h2>Lista de tareas</h2>
            <p>Opción 1</p>
            <ul>
                {tasks.map((task, i) => {
                    return (
                        <Task
                            task={task}
                            deleteTask={deleteTask}
                            key={i}
                        ></Task>
                    );
                    // new Task({task:task, i: i})
                    // class Task {
                    //    constructor(props) {}
                })}
            </ul>
            {/* <p>Opción 2</p>
            <ul>{aTasks}</ul> */}
        </>
    );
}
