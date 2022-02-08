export function Task({ task, deleteTask, updateTask }) {
    function handleClick() {
        deleteTask(task);
    }

    function handleChange() {
        updateTask(task);
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={handleChange}
            />
            <span>{task.name}</span> -<span>{task.responsible}</span>
            <span onClick={handleClick}>🗑️</span>
        </li>
    );
}

/* export function Task({task, deleteTask}) {
    return (
        <li>
            <div>{task}</div>
        </li>
    );
} */
