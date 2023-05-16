// import {createStore} from 'redux';
// import {reducer} from './reducer';

// const configureStore = () => {
//     return createStore(reducer);
// };

// export const store = createStore(reducer)


import {createStore} from "redux";
import {reducer} from "./reducer";

export const store = createStore(reducer)
