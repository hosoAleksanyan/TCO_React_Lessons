import React, { useState, useMemo, useCallback, useEffect } from "react";

function createUser(name, surname) {
    const user = { name, surname }
    console.log(user, 'uss')
    return user
}

export const UseCallBack = ({ }) => {
    const [message, setMessage] = useState()

    const greting = useCallback((text) => {
        console.log(text, 'awwwww')
    }, [])

    useEffect(() => {
        greting(message)
    }, [greting, message])


    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [counter, setCounter] = useState(0)

    const user = useMemo(() => createUser(name, surname), [name, surname])

    return (
        <React.Fragment>

            <button onClick={() => setCounter(counter + 1)}>
                + {counter}
            </button>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" onChange={(e) => setSurname(e.target.value)} value={surname} />

            <pre>{JSON.stringify(user, null, 2)}</pre>

            <input type="text" onChange={(e) => setMessage(e.target.value)} />

        </React.Fragment>
    )
}