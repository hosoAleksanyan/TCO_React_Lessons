import { useState } from "react";
import { useNavigate } from "react-router";
import { PropTypes } from 'prop-types';

export const Login = ({ admin }) => {

    const [email, setEmail] = useState('');
    const [passwrod, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (evt) => {
        evt.preventDefault();
        if (admin.email === email && admin.password === passwrod) {
            navigate('/movies');
        }
    }

    return (
        <div>
            <form onSubmit={(Event) => handleLogin(Event)} className="loginForm">
                <input type="email" onChange={(Event) => setEmail(Event.target.value)} placeholder="email" required />
                <input type="password" onChange={(Event) => setPassword(Event.target.value)} placeholder="password" required />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

Login.propTypes = {
    admin: PropTypes.object
}