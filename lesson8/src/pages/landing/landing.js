import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <h1>Landing</h1>
    </div>
  );
};
