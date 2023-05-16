import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";

export default function Head({ list, setList, setShowTasks }) {

    const [newTask, setNewTask] = useState("");
    const inputField = useRef();

    useEffect(() => {
        inputField.current.focus();
    }, []);

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
            <input type="text" onChange={(Event) => addTask(Event)} value={newTask} ref={inputField} />
            <button onClick={handleChange} >Add new task</button>
        </div>
    );
}

Head.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func,
    setShowTasks: PropTypes.func
}