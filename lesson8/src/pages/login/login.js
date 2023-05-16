import { useState } from "react";
import { useNavigate } from "react-router";



export const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

    const handleClick = () => {
        if (userName === "admin" && password === "admin") {
            navigate("/users");
        }
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
