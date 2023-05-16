import { useState } from 'react';

export default function ShowInput({ onAdd }) {

    const [newTask, setNewTask] = useState('');

    function addNewTask() {
        if (newTask !== '') {
            onAdd(newTask);
            setNewTask('');
        }
    }

    return (
        <div>
            <h2 className="box-title">TodoInput</h2>
            <div className="to-do-input">
                <input type="text"
                    onChange={(e) => { setNewTask(e.target.value) }}
                    placeholder='New Todo'
                    value={newTask}
                />
                <button onClick={addNewTask}>Add new task</button>
            </div>
        </div>
    );
}