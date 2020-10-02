import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

const myRouter = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
            </ul>

            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
        </div>
    </Router>
);

ReactDOM.render(myRouter, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
