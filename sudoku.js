
function isSolved(board) {
  // проверка на правильность решения(складываем все цифры в судоку, при правильном решении должно получиться 405)
let result = 0;
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      result = result + Number(board[i][j]);
    }
  }
}


