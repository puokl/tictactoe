class TicTacToe {
  constructor(rows, columns, cellsToWin) {
    this.rows = rows;
    this.columns = columns;
    this.cellsToWin = cellsToWin;
    this.board = new Array(rows);
    for (let i = 0; i < rows; i++) {
      this.board[i] = new Array(columns).fill(null);
    }
  }

  isValidMove(row, col) {
    return (
      row >= 0 &&
      row < this.rows &&
      col >= 0 &&
      col < this.columns &&
      this.board[row][col] === null
    );
  }

  makeMove(row, col, player) {
    if (!this.isValidMove(row, col)) {
      return false;
    }
    this.board[row][col] = player;
    return true;
  }

  isWinningMove(row, col, player) {
    let count = 0;

    // check horizontal
    for (let i = 0; i < this.columns; i++) {
      if (this.board[row][i] === player) {
        count++;
      } else {
        count = 0;
      }
      if (count === this.cellsToWin) {
        return true;
      }
    }

    // check vertical
    for (let i = 0; i < this.rows; i++) {
      if (this.board[i][col] === player) {
        count++;
      } else {
        count = 0;
      }
      if (count === this.cellsToWin) {
        return true;
      }
    }

    // check diagonal from top-left to bottom-right
    count = 0;
    for (let i = -this.cellsToWin + 1; i < this.cellsToWin; i++) {
      if (
        row + i < 0 ||
        col + i < 0 ||
        row + i >= this.rows ||
        col + i >= this.columns
      ) {
        continue;
      }
      if (this.board[row + i][col + i] === player) {
        count++;
      } else {
        count = 0;
      }
      if (count === this.cellsToWin) {
        return true;
      }
    }

    // check diagonal from bottom-left to top-right
    count = 0;
    for (let i = -this.cellsToWin + 1; i < this.cellsToWin; i++) {
      if (
        row - i < 0 ||
        col + i < 0 ||
        row - i >= this.rows ||
        col + i >= this.columns
      ) {
        continue;
      }
      if (this.board[row - i][col + i] === player) {
        count++;
      } else {
        count = 0;
      }
      if (count === this.cellsToWin) {
        return true;
      }
    }

    return false;
  }

  isGameOver() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        if (this.board[row][col] === null) {
          return false;
        }
        if (
          this.isWinningMove(row, col, "X") ||
          this.isWinningMove(row, col, "O")
        ) {
          return true;
        }
      }
    }
    return true;
  }

  getWinner() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        const player = this.board[row][col];
        if (player !== null && this.isWinningMove(row, col, player)) {
          return player;
        }
      }
    }
    return null;
  }
}

module.exports = TicTacToe;
