import {useContext} from "react";
import { TodoContext} from "./utils/context";


export const Home = ({}) => {

    const {todo, setTodo} = useContext(TodoContext)



    const handleParams = () => {
        setTodo([{todo: 1}, {todo:2}])
    }

    // console.log(todo,'todo')

    return (
        <div>
            <button onClick={handleParams}>Change</button>
            <h1>Home</h1>
        </div>
    )
}
