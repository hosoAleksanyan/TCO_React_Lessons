import './assets/styles/style.scss';
import './App.css';

import ShowList from './components/todoList';
import ShowInput from './components/todoInput';

import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  let tmpTasks = [
    { toDo: 'Learn React', isDone: false },
    { toDo: 'Learn Redux', isDone: false },
    { toDo: 'Meet Andrew', isDone: true },
    { toDo: 'Finish the Project', isDone: false },
    { toDo: 'Learn PHP', isDone: true }
  ];

  const [tasks, setTasks] = useState(tmpTasks);

  useEffect(() => {
    setTasks(tmpTasks);
  }, []);

  function addTask(newTask) {
    setTasks(
      [
        { toDo: newTask, isDone: false },
        ...tasks
      ]
      );
      
  }

  return (
    <div>
      <ShowInput onAdd={addTask} />
      <ShowList tmpTasks={tmpTasks} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
