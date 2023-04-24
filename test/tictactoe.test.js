const assert = require("chai").assert;
const TicTacToe = require("./../tictactoe");

describe("TicTacToe", function () {
  describe("#isValidMove()", function () {
    it("the move is valid", function () {
      const game = new TicTacToe(3, 3, 3);
      assert.equal(game.isValidMove(0, 0), true);
    });

    it("the move is inside of the board", function () {
      const game = new TicTacToe(3, 3, 3);
      assert.equal(game.isValidMove(2, 2), true);
    });

    it("the move is not taken, yet", function () {
      const game = new TicTacToe(3, 3, 3);
      game.makeMove(2, 2, "X");
      assert.equal(game.isValidMove(2, 1), true);
    });
  });

  describe("#makeMove()", function () {
    it("the move is valid and successful", function () {
      const game = new TicTacToe(3, 3, 3);
      assert.equal(game.makeMove(0, 0, "X"), true);
    });

    it("the board is updated with the player's move", function () {
      const game = new TicTacToe(3, 3, 3);
      game.makeMove(0, 0, "X");
      assert.deepEqual(game.board, [
        ["X", null, null],
        [null, null, null],
        [null, null, null],
      ]);
    });
  });

  describe("#isWinningMove()", function () {
    it("the move results in a win", function () {
      const game = new TicTacToe(3, 3, 3);
      game.makeMove(0, 0, "X");
      game.makeMove(1, 0, "O");
      game.makeMove(0, 1, "X");
      game.makeMove(1, 1, "O");
      game.makeMove(0, 2, "X");
      assert.equal(game.isWinningMove(0, 2, "X"), true);
    });

    it("the move does not result in a win", function () {
      const game = new TicTacToe(3, 3, 3);
      game.makeMove(0, 0, "X");
      game.makeMove(1, 0, "O");
      game.makeMove(0, 1, "X");
      game.makeMove(1, 1, "O");
      assert.equal(game.isWinningMove(1, 1, "0"), false);
    });
  });

  describe("#isGameOver()", function () {
    it("the game is over", function () {
      const game = new TicTacToe(3, 3, 3);
      game.makeMove(0, 0, "X");
      game.makeMove(1, 0, "O");
      game.makeMove(0, 1, "X");
      game.makeMove(1, 1, "O");
      game.makeMove(0, 2, "X");
      const result = game.isGameOver();
      assert.isTrue(result);
    });
  });

  describe("#getWinner()", function () {
    it("there is a winner", function () {
      const game = new TicTacToe(3, 3, 3);
      game.makeMove(0, 0, "X");
      game.makeMove(1, 0, "O");
      game.makeMove(0, 1, "X");
      game.makeMove(1, 1, "O");
      game.makeMove(0, 2, "X");
      const result = game.getWinner();
      assert.equal(result, "X");
    });
  });
});
