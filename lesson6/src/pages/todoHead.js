import { useState } from "react";

export const Head = ({ list, setList }) => {
  const [newTask, setNewTask] = useState("");

  const addNewTask = (e) => {
    setNewTask(e.target.value);
    // console.log(newTask);
  };

  const handleAddNew = () => {
    setList([...list, { /*id: 4,*/ name: newTask }]);
    setNewTask("");
  };

  return (
    <div>
      <input type="text" onChange={(Event) => addNewTask(Event)} value={newTask} />
      <button onClick={handleAddNew}>Add new task</button>
    </div>
  );
};
