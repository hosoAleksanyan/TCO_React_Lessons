import { combineReducers } from 'redux';
import {adminReducer} from "./admin/admin.reducer";
import {usersReducer} from "./users/users.reducer";
import {moviesReducer} from "./movies/movies.reducer";


export const reducer = combineReducers({
    adminReducer,
    usersReducer,

    moviesReducer,


});

