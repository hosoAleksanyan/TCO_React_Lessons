export const UPDATE_MOVIES = "UPDATE_MOVIES";
export const DELETE_MOVIES = "DELETE_MOVIES";


export const updateMovies = (newMovies) => {

    return {
        type: UPDATE_MOVIES,
        payload: newMovies
    }

}

export const deleteMovies = () => {
    return{
        type: DELETE_MOVIES
    }
}