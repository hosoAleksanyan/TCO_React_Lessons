import { useNavigate, useParams } from "react-router";
import PropTypes from "prop-types";


export const UserDetails = ({ users }) => {

    const params = useParams();
    const navigate = useNavigate();

    const user = users.filter((i) => (i.id == params.id))[0];///

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="userPage">

            <button onClick={handleBack}>Go Back</button>

            <table className="userTable">
                <tbody>
                    <tr>
                        <th>ID:</th>
                        <td>{user.id}</td>
                    </tr>
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
                    <tr>
                        <th>Password:</th>
                        <td>{user.password}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

UserDetails.propTypes = {
    users: PropTypes.array
}