import { useState } from "react";

export default function Head({ list, setList, setShowTasks }) {

    const [newTask, setNewTask] = useState("");

    const addTask = (evt) => {
        setNewTask(evt.target.value);
    }

    function handleChange() {
        if (newTask) {
            let result = [
                { id: Math.random(), text: newTask, isCompleted: false },
                ...list
            ];

            setList(result);
            setShowTasks(result);
            setNewTask("");
        }
    }

    return (
        <div className="head">
            <input type="text" onChange={(Event) => addTask(Event)} value={newTask} />
            <button onClick={handleChange} >Add new task</button>
        </div>
    );
}