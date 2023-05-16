import { useState } from 'react';

export default function ToDoInput() {

    const [toDo, setTodo] = useState('');

    function handleToDo(e) {
        setTodo(e.target.value);
    }

    function addToDo() {
        if (toDo !== '') {
            alert(toDo);
        }
    }

    return (
    <div>
        <h2 className="box-title">TodoInput</h2>
        <div className="to-do-input">
            <input type="text" onChange={(Event) => handleToDo(Event)} placeholder='New Todo' />
            <button onClick={addToDo}>Add new task</button>
        </div>
    </div>
    );
}