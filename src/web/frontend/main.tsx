import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./style.css";
import {Button} from "@material-ui/core";

const App = () => {
    const [c, increment] = useState(0);

    return (
        <div className="App">
            <h1>{c}</h1>
            <Button onClick={() => increment(c + 1)}>Pres</Button>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById("root"),
);
