import './todo.css';
import { useState, useEffect } from 'react';
import { Add } from './add';
import { Task } from './task';
import * as store from '../../services/storage';

export function ToDo() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        store.getTasks().then((data) => setTasks(data));
    }, []);

    const addTask = (newTask) => {
        const newTasks = [...tasks, newTask];
        store.setTasks(newTasks).then(() => setTasks(newTasks));
    };

    const deleteTask = (task) => {
        const newTasks = tasks.filter((item) => item.id !== task.id);
        store.setTasks(newTasks).then(() => setTasks(newTasks));
    };

    const updateTask = (task) => {
        const newTasks = tasks.map((item) =>
            item.id === task.id
                ? { ...item, isCompleted: !item.isCompleted }
                : item
        );
        store.setTasks(newTasks).then(() => setTasks(newTasks));
    };

    /* const aTasks = tasks.map((task, i) => {
        return <li key={i}>{task}</li>;
    }); */
    return (
        <>
            <Add addTask={addTask} />
            {tasks.length ? <h2>Lista de tareas</h2> : ''}
            <ul className="task-list">
                {tasks.map(
                    (task) => (
                        <Task
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            key={task.id}
                        />
                    )
                    // new Task({task:task, i: i})
                    // class Task {
                    //    constructor(props) {}
                )}
            </ul>
            {/* <p>Opción 2</p>
            <ul>{aTasks}</ul> */}
        </>
    );
}
