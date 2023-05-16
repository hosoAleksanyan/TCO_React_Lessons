import { DELETE_MOVIES, UPDATE_MOVIES} from "./movies.action";


const initialState = {
    moviesList: [
        {name: 'as', year: 2015},
        {name: 'as', year: 2015},
    ],
};

export const moviesReducer = (state = initialState, action) => {

    switch (action.type) {

        case DELETE_MOVIES:
            return {
                ...state,
                moviesList: []
            }

        case UPDATE_MOVIES:
            return {
                ...state,
                moviesList: action.payload
            }


        default:
            return state;
    }
};
