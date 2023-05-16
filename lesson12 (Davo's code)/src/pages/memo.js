
import React, {useState, useMemo, useCallback, useEffect} from "react";

function createUser(name, surname){
    const user = {name, surname}
    return user
}

export const Users = ({ list, setList }) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [counter, setCounter] = useState(0)

    const user = useMemo(() => {
        createUser(name, surname)

    }, [name,surname])




    // Call back
    const [message, setMessage ] = useState('')

    const greting = useCallback(( text ) => {
        console.log(text, 'ww')
    },[])

    // const greting = ( text ) => {
    //     console.log(text, 'a')
    // }

    useEffect(() => {
        greting(message)
    }, [greting, message])

    return (
        <React.Fragment>

            <button onClick={() => setCounter(counter + 1)}>
                + { counter }
            </button>
            <input type="text" onChange={(e) => setMessage(e.target.value)}/>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" onChange={(e) => setSurname(e.target.value)} value={surname}/>


            <pre>{JSON.stringify(user, null, 2)}</pre>


            <div className="Title-style">
                <h2>Name</h2>
                <h2>Age</h2>
                <h2>Email</h2>
                <h2></h2>
                <h2></h2>
            </div>


        </React.Fragment>
    )
}
