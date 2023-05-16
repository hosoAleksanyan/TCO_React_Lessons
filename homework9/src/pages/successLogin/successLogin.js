import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const SuccessLogin = ({ users }) => {

    const params = useParams();
    const navigate = useNavigate();

    const user = users.filter((i) => (i.id == params.id))[0];///

    const handleHome = () => {
        navigate("/home");
    }

    return (
        <div className="successPage">
            
                <button onClick={handleHome}>Home</button>
            
            <h1>Succes Login!</h1>

            <table className="successTable">
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Age:</th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}