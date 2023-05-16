import { useState } from 'react';

export default function ShowList() {
    const [tasks, setTasks] = useState(['Learn React', 'Finish the project', 'Drink water']);

    function deleteAllTasks(e) {
        setTasks([]);
    }

    return (
        <div>
            <h2 className="box-title">TodoList</h2>
            <div className="to-do-list">
                <div className="show-list-btn">
                    <button>All</button>
                    <button>Done</button>
                    <button>Todo</button>
                </div>

                <ul className="tasks">
                    {
                        tasks.map((task, i) => (
                            <li key={i}>{task}</li>
                        ))
                    }
                </ul>

                <div className="del-tasks">
                    <button>Delete done tasks</button>
                    <button onClick={(Event) => deleteAllTasks(Event)}>Delete all tasks</button>
                </div>
            </div>
        </div>
    );
}