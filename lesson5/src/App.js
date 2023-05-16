import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let usersArr = [
    { name: "Jim", age: "35" },
    { name: "Jos", age: "17" },
    { name: "Jenny", age: "27" },
    { name: "John", age: "70" },
  ];

  const [users, setUsers] = useState(usersArr);

  const [state, setState] = useState('wwww');

  useEffect(() => {
    setState('a');
    console.log(state);
  }, []);
  console.log(state);
  
  function deleteAllUsers() {
    setUsers([]);
  }

  function backList() {
    setUsers(usersArr);
  }
  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteAllUsers}>Delete All</button>
      <button onClick={backList}>Back</button>
    </div>
  );
}

export default App;
