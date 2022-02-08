import './todo.css';
import { useState } from 'react';
import { TASKS } from '../../models/tasks.data';
import { Add } from './add';
import { Task } from './task';

export function ToDo() {
    const [tasks, setTasks] = useState(TASKS);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (task) => {
        setTasks(tasks.filter((item) => item.id !== task.id));
    };

    const updateTask = (task) => {
        setTasks(
            tasks.map((item) =>
                item.id === task.id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            )
        );
    };

    /* const aTasks = tasks.map((task, i) => {
        return <li key={i}>{task}</li>;
    }); */
    return (
        <>
            <Add addTask={addTask}></Add>
            <h2>Lista de tareas</h2>
            <p>Opción 1</p>
            <ul className="task-list">
                {tasks.map((task) => {
                    return (
                        <Task
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            key={task.id}
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
