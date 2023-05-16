import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {changeAdminList} from "./store/admin/admin.action";
import {Home} from "./home";
import {AllContext, TodoContext} from "./utils/context";
import {useContext, useEffect, useState} from "react";
import {Users} from "./pages/memo";
import MemoPage from "./pages/memoPage";
import axios from "axios";

function App() {
    const dispatch = useDispatch()

    const {todo, setTodo} = useContext(TodoContext)




    const [list, setList] = useState()
    const [newList, setNewList] = useState(1)

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) =>{
            setList(res.data)
        }).catch((e) => console.log(e,'xxx'))
    }, [])


    const adminList = useSelector((state) => state.adminReducer.adminsList)

    // const {adminsList, userList } = useSelector((state) => ({
    //   adminsList: state.adminReducer.adminsList,
    //   userList: state.usersReducer.userList
    // }));

    // const changeList = () => {
    //     dispatch(changeAdminList([{name: 'Cloe',}, {name: 'Jane'}]))
    // }

    // console.log(list,'list')

    return (
        <div className="App">

            {/*<button onClick={() => setNewList(newList +1 )}>setNewList </button>*/}
            {/*<button onClick={() => setList([] )}>MEMO </button>*/}

            {/*Memo*/}
            {/*<MemoPage list={list}/>*/}

            {/*Context*/}
            {/*<Home/>*/}

            {/*useMemo, useCallBack*/}
            <Users/>

            {/*Memo*/}
            {/*<MemoPage/>*/}

        </div>
    );
}

export default App;
