document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {  } 
 board.cells = [
   {hidden:true, row: 0, col: 0, isMine: true}, {hidden:true, row: 0, col:1, isMine: false}, {hidden:true, row: 0, col:2, isMine: false}, {hidden:true, row: 0, col: 3, isMine: true}, 
   {hidden:true, row: 1, col: 0, isMine: false}, {hidden:true, row: 1, col:1, isMine: false}, {hidden:true, row: 1, col:2, isMine: false}, {hidden:true, row: 1, col: 3, isMine: false},
   {hidden:true, row: 2, col: 0, isMine: false}, {hidden:true, row: 2, col:1, isMine: true}, {hidden:true, row: 2, col:2, isMine: true}, {hidden:true, row: 2, col: 3, isMine: false},
   {hidden:true, row: 3, col: 0, isMine: false}, {hidden:true, row: 3, col:1, isMine: false}, {hidden:true, row: 3, col:2, isMine: false}, {hidden:true, row: 3, col: 3, isMine: false}
  ];
function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  document.addEventListener('click', checkForWin)
  document.addEventListener('rightclick', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  var flaggedMines = 0;
  for (var i = 0; i < board.cells.length; i++) {
     var isMine =board.cells[i].isMine;
     var isFlagged =board.cells[i].isFlagged;

  if ((isMine === true) && (isFlagged === true)){
    flaggedMines++
    }
  }
  var revealedNotMine= 0;

  for (var i = 0; i <board.cells.length; i++) {
  var isMine = board.cells[i].isMine;
  var isHidden = board.cells[i].hidden;

  if ((isMine === false) && (isHidden == false)) {
    revealedNotMine++;
    }
    if ((flaggedMines === 4) || (revealedNotMine === 12)) {
      lib.displayMessage('You win!');
    }
  }
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  
    var count = 0;
  
    for (var i = 0; i < surroundingCells.length; i++) {
      if (surroundingCells[i].isMine){
         count++;
    }
   }
   return count;
}

