# Sudoku

## Introduction

![Sudoku solver animation](readme-assets/sequence.gif)

*Figure 1*. Animation of the Sudoku solver.

Sudoku is a logic-based, combinatorial number-placement puzzle. It is a 3 × 3 grid of cells and contains numbers from 1 to 9.

As a rule, Sudoku provides a partial solution, which is expressed in the form of cells already filled with numbers. To solve the puzzle, you need to fill in the empty squares as shown in Figure 1.

By the end of this task, you will have a fully functioning Sudoku "solver" that runs from the command line. You will be presented with 15 unsolved Sudoku puzzles. Puzzles can be found in the  `sudoku-puzzles.txt` file.

* Five puzzles can be solved using basic logic.
* Five require a little more advanced logic.
* Five require your solver to be able to guess and reconsider when stuck.

The complete solution will solve all 15 puzzles.

### Limitations

No global variables - you will only use local variables. To do this, you will write functions that take parameters as input and return the calculated values. You have to write a large number of functions and use them together to create your own Sudoku solver.

## Testing

Good news: you will create lots of small methods and small methods are easier to test!

The number of tests you write is entirely up to you. Testing is done exclusively for you and will help you write the code. You have to find a balance between testing and having to write code. Remember, tests can help you get the results you want faster. 

## Releases

### Pre-release: Understanding and modeling Sudoku

The computer program that solves Sudoku simulates a person playing it. Understanding how a person plays a game is key. What does a person do when solving Sudoku?

Let's solve a real Sudoku puzzle, paying attention to how we get closer to solving the problem.

- What strategies are we using and why?
- How do we choose where to start?
- How do we know when to actually put a number in the box?
- What do we do when we don't know how to fill in the rest of the cells?

When thinking about our human strategy, it's important to understand that sometimes strategies that work for humans will be difficult to implement on a computer. However, the opposite is also true: computer strategies may not always be convenient for humans because we have to write too much text, use too many sheets of paper, or remember a lot of information that a computer can remember but not a person.

Before you start coding, design and write a pseudocode solution for your "solver".

### Release 0: Main logic

The first five puzzles in the `sudoku-puzzles.txt` file can be solved using basic logic (many cells at the beginning of the game have only one possible value). This release requires the program to be able to solve the first five puzzles. 

- Create functions that work together to solve puzzles. Several functions are already in `sudoku.js`.

- To run the "solver" use `runner.js`, which uses functions from `sudoku.js`. Make sure you read the comments and code in `runner.js` and `sudoku.js`.

The function `solve` in `sudoku.js` will accept a string `String` representing a blank Sudoku board. Unresolved squares are marked with - symbol. Solved squares contain a number from "1" to "9". For example:   `"1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---"`

- For this release, your program must "give up" if it fails to solve the problem.

- Be sure to write a `prettyBoard` method that takes the board written in a string and returns a formatted version that is more familiar to our visual perception. For example:

```
1 - 5 8 - 2 - - -
- 9 - - 7 6 4 - 5
2 - - 4 - - 8 1 9
- 1 9 - - 7 3 - 6
7 6 2 - 8 3 - 9 -
- - - - 6 1 - 5 -
- - 7 6 - - - 3 -
4 3 - - 2 - 5 - 1
6 - - 3 - 8 9 - -
```
### Release 1: More advanced logic

Puzzles 6-10 can be solved using general logic, but they require more than just iterating over the cells, which can have only one possible value. The mechanism needs to be improved so that the program can solve these new puzzles.

Note: Your code should still "give up" if it fails at solving the puzzle.

### Release 2: "Smart" guessing

Puzzles 11-15 can be solved by making educated guesses about the values ​​of the unresolved squares and then trying to solve the puzzles based on those already guessed values. Guessing should start after your main code has traversed the entire Sudoku field and found all the obvious values or made guesses about possible values. In other words, use logic to match the values ​​in as many cells as possible and then start guessing. Many people think that recursion can be of great help here.

## Conclusion

Writing a Sudoku solution involves many problems: defining the logic associated with the game itself, transferring this logic to code, manipulating data structures, etc. This provides a good overarching challenge, summarizing the skills we've developed up to this point in Elbrus Bootcamp.
