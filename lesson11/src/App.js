import {useDispatch, useSelector} from "react-redux";

import { deleteMovies, updateMovies} from "./store/movies/movies.action";
import {changeAdminList} from "./store/admin/admin.action";

function App() {
    const dispatch = useDispatch()

    const movieList = useSelector((state) => state.moviesReducer.moviesList)
    // const adminList = useSelector((state) => state.adminReducer.adminsList)
    // const {adminsList, userList } = useSelector((state) => ({
    //   adminsList: state.adminReducer.adminsList,
    //   userList: state.usersReducer.userList
    // }));

    // const changeList = () => {
    //     dispatch(changeAdminList([{name: 'Cloe',}, {name: 'Jane'}]))
    // }


    const handleDelete = () => {
        dispatch(deleteMovies())
    }

    const handleAddMovie = () => {

        const newLis = [
            ...movieList,
            {name: 'NEW'},
            {name: 'NEW'},
            {name: 'NEW'},
        ]
        dispatch(updateMovies( newLis ))
    }
console.log(movieList);
    return (
        <div style={{background: 'aquamarine', height: '100vh'}} className="App">
            {/*<button onClick={changeList}>Change</button>*/}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleAddMovie}>Add</button>

            {movieList?.map((i, j) => {
                return <p key={j}>{i?.name}</p>
            })}

        </div>
    );
}

export default App;
