import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../store/tasks/tasks.action";

export const AddTask = () => {

    const list = useSelector((state) => state.tasksReducer.tasksList);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState();

    const hadleSubmit = (e) => {
        e.preventDefault();

        if (inputValue) {
            const newTask = {
                id: Math.random(),
                name: inputValue,
                isCompleted: false
            }

            const result = [
                ...list,
                newTask
            ]

            dispatch(updateTask(result));
            setInputValue("");
        }
    }

    return (
            <form onSubmit={(e) => hadleSubmit(e)} className="addTask">
                <input
                    type="text"
                    placeholder="Add Task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <input type="submit" value="Add" />
            </form>
    )
}