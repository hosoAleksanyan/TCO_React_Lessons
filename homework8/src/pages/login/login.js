import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRef } from "react";


export const Login = ({ users, admin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const field = useRef();

    useEffect(() => {
        field.current.focus();
    }, [])

    const handleBack = () => {
        navigate(-1);
    }

    const handleLogin = () => {
        console.log(users);
        if (email !== "" && password !== "") {

            const user = users.filter((i) => (
                i.email === email && i.password === password
            ))[0];


            if (user) {///
                console.log(user);
                setEmail("");
                setPassword("");
                navigate(`/success-login/${user.id}`);
            } else if (email === admin.email && password === admin.password) {
                setEmail("");
                setPassword("");
                navigate(`/admin`);
            } else {
                alert("Please write correct email and password.");
            }
        }
    }

    return (
        <div className="loginPage">
            <button onClick={handleBack}>Go Back</button>

            <div className="loginForm">
                <p>Login</p>
                <input type="text" ref={field} onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Username:" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password:" />
                <button onClick={handleLogin}>Login</button>
            </div>

        </div>
    )
}