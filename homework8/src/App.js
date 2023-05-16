import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { AddUser } from "./pages/addUser/addUser";
import { Users } from "./pages/users/users";
import { UserDetails } from "./pages/userDetails/userDetails";
import { SuccessLogin } from "./pages/successLogin/successLogin";
import { Routes, Route } from "react-router";
import { useState } from "react";

const list = [
  { id: Math.random(), name: "Hovsep", age: "17", email: "exampleHovsep@gmail.com", password: "pas123" },
  { id: Math.random(), name: "Artyom", age: "28", email: "exampleArtyom@gmail.com", password: "pas123" },
  { id: Math.random(), name: "Artur", age: "30", email: "exampleArtur@gmail.com", password: "pas123" }
]

const admin = { name: "Admin", email: "admin", password: "admin" };

function App() {

  const [users, setUsers] = useState(list);

  // loading /// useEffect-ov

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login users={users} admin={admin} />} />
        <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />} />
        <Route path="/admin" element={<Users users={users} setUsers={setUsers} />} />
        <Route path="/user-details/:id" element={<UserDetails users={users} />} />
        <Route path="/success-login/:id" element={<SuccessLogin users={users} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
