import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="homePage">
            <Link to={"/login"}>
                <button>Login</button>
            </Link>
        </div>
    )
}