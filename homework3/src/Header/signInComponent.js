import { useState } from "react";

export default function SignInBox() {
    const [name, setName] = useState('');

    function handleSignIn(evt) {
        setName(evt.target.value);
    }

    function signIn() {
        let result = "Name: " + name;
        alert(result);
    }

    return (
        <div className="signInBox container">
            <div>
                <input type="text" onChange={(Event) => handleSignIn(Event)} />
                <p>{name}</p>
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}