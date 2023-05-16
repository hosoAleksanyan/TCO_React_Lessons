import {createContext} from "react";
import React, {useState, Fragment} from 'react';


export const AllContext = createContext()

export const AllContextWrapper = ({children}) => {

    const [list, setList] = useState([
            {todo: 1},
            {todo: 2},
            {todo: 3},
            {todo: 4},
        ]
    )

    return (
        <AllContext.Provider value={{list, setList}}>
            {children}
        </AllContext.Provider>
    )
}

export const TodoContext = createContext()

export const TodoContextWrapper = ({children}) => {

    const [todo, setTodo] = useState([
        {todo: 1},
        {todo: 2},
        {todo: 3},
        {todo: 4},
    ])

    return (
        <Fragment>
            <TodoContext.Provider
                value={{todo, setTodo}}
            >
                {children}
            </TodoContext.Provider>
        </Fragment>
    )
}
//
//
// export const ContextProvider = ({ children }) => {
//     const [params, setParams] = useState({});
//
//     return (
//         <Fragment>
//             <AllContext.Provider
//                 value={{params, setParams,}}
//             >
//                 {children}
//             </AllContext.Provider>
//         </Fragment>
//     );
// };
