/* 
    Input: Array of strings/moves
    Output: result of Connect Four gameplay (winner or draw)
    Purpose: Determine which player, if either, won the game based on the moves made
*/

// BreakException defined to be used later
var BreakException = {};

// global game board variable, initialized to 0s
var board = [...Array(6)].map(row => Array(7).fill(0));

// dictionary used to convert column letters to indices
const columnsDict = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6}

// game is a draw by default
let result = "Draw";

// Check if space is occupied by a player's piece and 
// if spaces in line are occupied by the same player
function checkLine(a,b,c,d) {
    // if all spaces in a line are occuppied by the 
    // same player, then that player is the winner
    if((a != 0) && (a ==b) && (a == c) && (a == d))
        result = a;
}

// check 5 possible line directions originating 
// from last placed piece for a winner
function checkresult(row, col) {
    // Check down
    if(row < 3) 
        checkLine(board[row][col], board[row+1][col], board[row+2][col], board[row+3][col]);

    // Check right
    if(col < 4)
        checkLine(board[row][col], board[row][col+1], board[row][col+2], board[row][col+3]);

    // Check left
    if(col > 2)
        checkLine(board[row][col], board[row][col-1], board[row][col-2], board[row][col-3]);

    // Check down-right
    if(row < 3 && col < 4)
        checkLine(board[row][col], board[row+1][col+1], board[row+2][col+2], board[row+3][col+3]);

    // Check down-left
    if(row < 3 && col > 2)
        checkLine(board[row][col], board[row+1][col-1], board[row+2][col-2], board[row+3][col-3]);
}

// function that handles placement of pieces by each player
// Assumption: All moves are assumed to be valid moves
function drop(move){
    let [column,player] = move.split('_');
    column = columnsDict[column];
    let invertedRow=0;
    // find first empty space in column starting 
    // from bottom to place player's new piece
    for( ; invertedRow < 6; invertedRow++){
        if(board[5-invertedRow][column]===0) {
            board[5-invertedRow][column] = player;
            break;
        }
    }
    // check if last placed piece resulted in a win by either player
    checkresult(5-invertedRow, column);
}

// program driver
function playConnectFour(moves) {
    try {
        moves.forEach(move => {
            // only keep playing if there's no winner yet
            if(result == "Draw") drop(move);
            // if a winner is found, break 
            // the forEach early
            else throw BreakException; 
        });
    }
    catch (e) {
        if (e !== BreakException) throw e;
    }

    return result;
}

// Test Cases. Program is set up to handle one game (array of moves) per run.

// Test Case 1: Winner should be red. Horizontal left win.
let arr1 = ["A_Yellow",
"B_Red",
"B_Yellow",
"C_Red",
"G_Yellow",
"C_Red",
"C_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"F_Yellow",
"E_Red",
"D_Yellow"]

// Test Case 2: No winner. Game should end in a draw.
let arr2 = ["A_Red",
"B_Yellow",
"A_Red",
"E_Yellow",
"F_Red",
"G_Yellow",
"A_Red",
"G_Yellow"]

// Test Case 3: Winner should be red. Vertical win.
let arr3 = ["A_Red",
"B_Yellow",
"A_Red",
"E_Yellow",
"A_Red",
"G_Yellow",
"A_Red",
"G_Yellow"]

// Test Case 4: Winner should be yellow. Diagonal down left win.
let arr4 = ["A_Yellow",
"B_Red",
"B_Yellow",
"C_Red",
"G_Yellow",
"C_Red",
"C_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"F_Yellow",
"A_Red",
"D_Yellow"]

// Test Case 5: Winner should be red. Diagonal down right win.
let arr5 = ["A_Yellow",
"B_Red",
"B_Yellow",
"C_Red",
"G_Yellow",
"C_Red",
"A_Yellow",
"B_Red",
"G_Yellow",
"A_Red",
"G_Yellow",
"D_Red",
"F_Yellow",
"A_Red",
"D_Yellow"]

// Test Case 6: Winner should be red. Horizontal right win.
let arr6 = ["A_Yellow",
"E_Red",
"E_Yellow",
"C_Red",
"G_Yellow",
"C_Red",
"C_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"G_Yellow",
"D_Red",
"F_Yellow",
"B_Red",
"D_Yellow"]

// console.log(playConnectFour(arr1));
// console.log(playConnectFour(arr2));
// console.log(playConnectFour(arr3));
// console.log(playConnectFour(arr4));
// console.log(playConnectFour(arr5));
 console.log(playConnectFour(arr6));


// To see board after game is over, uncomment the below line.
console.log(board);