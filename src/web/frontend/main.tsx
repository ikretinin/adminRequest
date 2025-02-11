import React from "react";
import ReactDOM from "react-dom";

import "./style.module.css";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    rootElement
);
