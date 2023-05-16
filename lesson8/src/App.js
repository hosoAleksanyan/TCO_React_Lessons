import { Login } from "./pages/login/login";
import { Users } from "./pages/users/users";
import { UserDetails } from "./pages/userDetails/userDetails";
import { Landing } from "./pages/landing/landing";
import "./assets/styles/style.css";
import "./App.css";

import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
