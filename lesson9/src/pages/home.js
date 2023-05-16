import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Link to="/useCallBack">
                <button>useCallBack & useMemo</button>
            </Link>
            <br/>
            <Link to="/form">
                <button>Form</button>
            </Link>
            <br/>
            <Link to="/hook-form">
                <button>Hook Form</button>
            </Link>
        </div>
    )
}