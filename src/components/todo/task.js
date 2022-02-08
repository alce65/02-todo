export function Task(props) {
    function handleClick() {
        props.deleteTask(props.task);
    }

    return (
        <li>
            <span>{props.task}</span>
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
