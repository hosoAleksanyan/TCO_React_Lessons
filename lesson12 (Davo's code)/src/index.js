import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from './store/store'
import {AllContextWrapper, TodoContextWrapper} from "./utils/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
// const ThemeContext = createContext(null);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoContextWrapper>

                <AllContextWrapper>
                    <App/>
                </AllContextWrapper>

            </TodoContextWrapper>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
