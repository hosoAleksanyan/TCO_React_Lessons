import { useState } from "react";

export const JustForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (evt) => {
        evt.preventDefault();

        alert(`email: ${email} | password: ${password}`);
    }

    return (
        <>
            <form onSubmit={(e) => handleLogin(e)}>
                <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}