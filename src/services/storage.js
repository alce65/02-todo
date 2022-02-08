const store = 'Tareas-React';

// Array<Tarea>
export function getTares() {
    return JSON.parse(localStorage.getItem(store));
}

export function setTares(tasks) {
    localStorage.setItem(store, JSON.stringify(tasks));
}

export function removeTares() {
    localStorage.removeItem(store);
}
