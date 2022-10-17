//  * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
//  * Возвращает игровое поле после попытки его решить.
//  * Договорись со своей командой, в каком формате возвращать этот результат.

function solve(boardString) {
const board = stringToArray(boardString);
 function stringToArray(boardString) {
  // Делаем из строчки массив
  
    let board = [];
    let newArr = boardString.split('');
    for (let i = 0; i < newArr.length; i++) {
      board.push(newArr.splice(0, 9))
    }
    return board;
    }
  
  // Находим пустые ячейки
   function pustoPlace(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '-') {
          return [i, j]; // возвращаем координаты пустой ячкйки
        }
      }
    }
    return 0;// возвращаем 0, если пустых ячеек больше нет 
  }
  // Проверка на правильность написания цифры в пустую ячейку
  function validator(num, posPusto, board) {
    const [row, col] = posPusto;

    //Проверка строк
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num && i !== row) {
        return false;
      }
    }
    //Проверка столбцов
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num && i !== col) {
        return false;
      }
    }
    // Проверка маленьких квадратов
  const smallBoxGorizont = Math.floor(row / 3) * 3;
    const smallBoxVertical = Math.floor(col / 3) * 3;

    for (let i = smallBoxGorizont; i < smallBoxGorizont + 3; i++) {
      for (let j = smallBoxVertical; j < smallBoxVertical + 3; j++) {
        if (board[i][j] === num && i !== row && j !== col) {
          return false;
        }
      }
    }

    return true;
  }
  // Вставляем цифры в пустые ячейки
  const pushNumber = () => {
    const posPusto = pustoPlace(board);// Присваиваем константе координаты пустых ячеек(значение функции pustоРlace)

    if (posPusto === 0) { // Если пустых ячеек не осталось, возвращаем true
      return true;
    }
    for (let i = 1; i < 9 + 1; i++) {
      const num = i.toString(); // Присваем вставляемой цифре значение
      const isValid = validator(num, posPusto, board); // Проверяем цифру на правильность в судоку
      if (isValid) { // Если правильно, то вставляем цифру в пустую ячейку
        const [x, y] = posPusto;// posPusto = [0,1]
        board[x][y] = num;

        if (pushNumber()) { // если все цифры расположены верно, возвращаем true
          return true;
        }
        board[x][y] = '-'; // Если нет, то присваиваем ошибочной цифре опять пустую ячейку
      }
    }

    return false;
  }
  // возвращаемся обратно, если цифры были расставлены неправильно
  pushNumber();  
  return board;

}

//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает булевое значение — решено это игровое поле или нет.

function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

// const fs = require('fs');
// const fileName = './result.txt';
// // Удаление прошлого результата
//   fs.unlink(fileName, err => {
//     if (err) throw err;
//     console.log('Прошлый результат успешно удален!');
//   });
// // Запись в файл
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       fs.appendFileSync(fileName, `${board[i][j]}\n`);
//     }
//   }


console.table(board);
  return board
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).


module.exports = {
  solve,
  isSolved,
  prettyBoard,
};