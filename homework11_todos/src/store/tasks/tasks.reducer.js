import { DELETE_ALL_TASKS, UPDATE_TASKS } from "./tasks.action"

const initialState = {
    tasksList: [
        { id: Math.random(), name: "Create App", isComplited: true },
        { id: Math.random(), name: "Install modules", isComplited: false },
        { id: Math.random(), name: "Start Project", isComplited: false },
        { id: Math.random(), name: "Enjoy result", isComplited: false },
    ]
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ALL_TASKS:
            return {
                ...state,
                tasksList: []
            }

        case UPDATE_TASKS:
            return {
                ...state,
                tasksList: action.payload
            }

        default:
            return state
    }
}