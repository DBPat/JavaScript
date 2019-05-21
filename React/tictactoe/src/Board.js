import React, {Component} from "react";
import Square from "./Square";

export default class Board extends Component {
    createSquare(i) {
        return (
            <Square
                value= {this.props.squares[i]}
                onClick={() => this.props.onClick}
            />
        );
    }

    render(props){
        return(
            <div className="board">
                <div className="boardRow">
                    {this.createSquare(0)}
                    {this.createSquare(1)}
                    {this.createSquare(2)}
                </div>
                <div className="boardRow">
                    {this.createSquare(3)}
                    {this.createSquare(4)}
                    {this.createSquare(5)}
                </div>                
                <div className="boardRow">
                    {this.createSquare(6)}
                    {this.createSquare(7)}
                    {this.createSquare(8)}
                </div>
            </div>

        )
    }
    
}