export const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASKS = 'UPDATE_TASK';


export const deleteAllTasks = () => {
    return {
        type: DELETE_ALL_TASKS
    }
}

export const updateTask = (newList) => {
    return {
        type: UPDATE_TASKS,
        payload: newList
    }
}