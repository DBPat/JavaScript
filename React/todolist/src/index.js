import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./todolist";
import "./index.css";

ReactDOM.render(
    <div>
        <div> <TodoList/></div>
    </div>,
    document.querySelector("#root")
)

