import {
    CHANGE_LIST,
} from "./admin.types";


const initialState = {
    adminsList: [{name:'John'},],
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_LIST:
            return {
                ...state,
                adminsList: action.payload
            }

        default:
            return state;
    }
};
