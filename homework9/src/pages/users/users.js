import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";


export const Users = ({ users, setUsers }) => {

    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/user-details/${id}`)
    }

    const handleDelete = (id) => {
        const result = users.filter((i) => (i.id !== id));///

        setUsers(result);
    }

    const handleHome = () =>{
        navigate("/home");
    }

    return (
        <div className="usersPage">
                <button onClick={handleHome}>Home</button>
            <table className="usersTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <td colSpan={2}>
                            <Link to={"/add-user"}>
                                <button style={{ width: "97%" }}>Add User</button>
                            </Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleDetails(user.id)} style={{ width: "95%" }}>
                                        Details
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user.id)} style={{ width: "95%" }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func
}