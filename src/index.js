import React from "react";

import  ReactDOM from "react-dom/client";

import App from "./App";

// ReactDOM.render(<App />, document.querySelector("#app"));

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)