import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import store from "./js/store/index";
import App from "./js/components/App.jsx";

import "./css/App.css";

const container = document.getElementById("root")
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
