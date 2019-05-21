import React, {Component} from "react";

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            score: {
                X: 0,
                O: 0,
                ties: 0
            },
            moveCounter: 0,
            next: true,

        }

    }

    restart() {
        if(this.state.movesCounter===9 || (this.calculateWinner)) {
            this.setState({
                squares: this.state.squares.fill(null),
                movesCounter: 0,
                next: true,
            })
        }

    }

    handleClick(i) {
        let tmpSquares = this.state.squares;

        if(this.state.moveCounter === 9 || this.calculateWinner() || tmpSquares[i]) {
            return;
        }

        tmpSquares[i] = this.state.next ? "X" : "O";

        this.setState({
            movesCounter: this.state.movesCounter+1,
            squares: tmpSquares,
            next: !(this.state.next),
        })

        if(this.state.movesCounter === 9) {
            this.setState({
                score: {
                    X: this.state.score.X,
                    O: this.state.score.O,
                    ties: this.state.score.ties+1,
                }
            })
        }
    }

    // needs Sqaures array
    calculateWinner() {
        let squares = this.state.squares;
        const winningMoves = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,3,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0; i < winningMoves.length; i++) {
            const [a,b,c] = winningMoves[i];

            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    render() {
        let info;
        let winner = this.calculateWinner();
        if(winner) {
            info = "The Winner is Player " + winner;
        }
        else {
            info = "It is " + this.state.next ? "Player X's turn." : "Player O's turn.";
        }


        return(
            <div className="game">
                <div className="board">
                    <Board 
                        sqaures={this.state.squares}
                        onClick={i => this.handleClick(i)}
                    />
                    <div className="info">
                        <div>
                            {info}
                        </div>
                        <button onClick={this.restart()}>
                            {"Restart"}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}