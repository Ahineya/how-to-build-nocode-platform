import ReactDOM from "react-dom";
import {App} from "./app";
import "./main.scss";
import * as React from "react";
import {BrowserRouter} from "react-router-dom";

const app = document.getElementById("app");
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, app);