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

    const handleLogin = (e) => {

        e.preventDefault();

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

            <form className="loginForm" onSubmit={(e) => handleLogin(e)}>
                <p>Login</p>
                <input
                    type="email" ref={field}
                    value={email} placeholder="Username:"
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                />
                <input
                    type="password" value={password}
                    placeholder="Password:"
                    onChange={(e) => { setPassword(e.target.value) }}
                    required
                />
                <input type="submit" value="Submit" className="button" />
            </form>

        </div>
    )
}