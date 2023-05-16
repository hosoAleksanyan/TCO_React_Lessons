import { useNavigate } from "react-router";
import { useState } from "react";
import { Images } from "../../assets";

export const Login = ({ adminData }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (evt) => {
    evt.preventDefault();

    if (email === adminData.email && password === adminData.password) {
        navigate('/movies');
    }
  };

  return (
    <div>
      <form onSubmit={(Event) => handleLogin(Event)} className="loginForm">
        <img src={Images.Simple} alt="img" width={60} />
        <input
          type="email"
          required
          placeholder="Enter your email address..."
          onChange={(Event) => setEmail(Event.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Enter your password..."
          onChange={(Event) => setPassword(Event.target.value)}
        />
        <input type="submit" value="Login" className="loginButton" />
      </form>
    </div>
  );
};
