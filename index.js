const TicTacToe = require("./TicTacToe");

// create a new game instance with 3 rows, 3 columns, and 3 in a row to win
const game = new TicTacToe(3, 3, 3);

// example gameplay
game.makeMove(0, 0, "X");
game.makeMove(0, 1, "O");
game.makeMove(1, 1, "X");
game.makeMove(1, 0, "O");
game.makeMove(2, 2, "X");

console.log("Board of the game: ", game.board);
console.log("Game is over: ", game.isGameOver());
console.log("Winner: ", game.getWinner());
