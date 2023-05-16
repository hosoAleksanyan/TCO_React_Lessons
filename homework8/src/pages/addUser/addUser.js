import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

export const AddUser = ({ users, setUsers }) => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const field = useRef();

    useEffect(() => {
        field.current.focus();
    }, [])

    const handleBack = () => {
        navigate(-1);
    }

    const handleClick = () => {
        if (name !== "" && age !== "", email !== "", password !== "") {
            const check = users.filter((i) => (i.email === email));

            if (!check[0]) {
                const newUser = { id: Math.random(), name, age, email, password }

                const result = [
                    ...users,
                    newUser
                ]

                setUsers(result);
                navigate("/admin");
            } else {
                alert("Please add user with another email.");
            }

        } else {
            alert("Fill in the all fields.")
        }
    }

    return (
        <div className="addUserPage">
            <button onClick={handleBack}>Go Back</button>
            <div className="addForm">
                <input type="text" ref={field} onChange={(e) => { setName(e.target.value) }} placeholder="Name:" />
                <input type="number" min={5} onChange={(e) => { setAge(e.target.value) }} placeholder="Age:" />
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email:" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password:" />
                <button onClick={handleClick}>Add User</button>
            </div>
        </div>
    )
}

AddUser.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func
}