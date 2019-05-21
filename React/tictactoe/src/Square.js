import React, {Component} from "react";

export default class Sqaure extends Component {
    render(props) {
        return(
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>
        )
    }
}