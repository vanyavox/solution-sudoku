/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const board = [];
  let j = 9
  //Создаем из строки правильный массив
  for (let i = 0; i < boardString.length; i += 9) {
    const arrIn = boardString.slice(i, j).split('').map(el => isNaN(el) ? el : +el);
    board.push(arrIn);
    j += 9;
  }
  // Решение 
      // Проверяем правильность заполненных чисел строка строка столбец столбец номер заполненные числа
  let isValid = (row,col,num) => {
    // Цикл пытаемся заполнить числа 
    for (let i = 0; i < 9; i++) {
        let boxRow = (parseInt(row / 3) * 3) + parseInt(i / 3); // Маркер суб-судоку
        let boxCol = (parseInt(col / 3) * 3) + i % 3;// Подпись столбца Sub Sudoku
        //console.log(boxRow + '_' + boxCol); 
        if (board[row][i] == num ||  board[i][col] == num ||  board[boxRow][boxCol] == num) {
          return false;
        }
    }
    return true;
  }

let solve =() => {
  // Цикл
  for (let i = 0; i < 9; i++) {
  // Зациклить столбец
  for (let j = 0; j < 9; j++) {
          if (board[i][j] == '-') {
              for(let num = 1; num<10; num++) {
                // Проверяем правильность заполненных чисел
                if (isValid(i,j,num)) {
                  board[i][j] = num;
                  // Рекурсия
                  if (solve(board)) {
                    return true;
                  }
                  board[i][j] = '-';
                }
              }
              return false;
          }
  }
}
return true;
}
solve(board);
return board
}
// const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

// console.table(solve(boardString));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
