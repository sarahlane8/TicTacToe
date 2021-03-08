//*******************Document Queries*******************//
var boardBoxes = document.querySelectorAll('.box');
var clearBoardButton = document.getElementById('clearBoardBtn');
var gameBoard = document.getElementById('gameBoard');
var heartWins = document.getElementById('heartWins');
var mainHeading = document.getElementById('mainHeading');
var startNewGameButton = document.getElementById('startNewGameBtn');
var starWins = document.getElementById('starWins');


//*******************Global Variable*******************//
var game = new Game();


//*******************Event Listeners*******************//
window.addEventListener('load', renderLocalStorageWins);
clearBoardButton.addEventListener('click', clearBoard);
gameBoard.addEventListener('click', checkGridClick)
startNewGameButton.addEventListener('click', resetGame);


//*******************Functions*******************//
function renderLocalStorageWins() {
  var player1LSWins = game.player1.retrieveWinsFromStorage(game.player1.id);
  var player2LSWins = game.player2.retrieveWinsFromStorage(game.player2.id);
  if (player1LSWins) {
    game.updatePlayerWins(game.player1, player1LSWins)
    displayPlayerWins(game.player1, player1LSWins);
  }
  if (player2LSWins) {
    game.updatePlayerWins(game.player2, player2LSWins)
    displayPlayerWins(game.player2, player2LSWins);
  }
}

function checkGridClick(event) {
  var boxCell = event.target;
  if (boxCell.id === "gameBoard") {
    return;
  } else {
    game.isCellOccupied(boxCell);
  }
}



// function updateBoxCell(boxCell) {
//   var isCellTaken = game.isCellOccupied(boxCell);
//   if (isCellTaken) {
//     return;
// } else {
//   game.updateCell(boxCell);
//   displayGamePiece(boxCell)
// }



function changeClickability(command) {
  if (command === 'enable') {
    gameBoard.classList.remove('disable');
  } else if (command === 'disable') {
    gameBoard.classList.add('disable');
  }
}


// game.updatePlayerTurn()
// displayPlayerTurn(game.playerTurn.token);
// }
//
//
//   var isWinner = game.checkForWinner();//make each if statement a different function
//   if (isWinner) {
//     changeClickability(disable);
//     displayWinnerToken(game.playerTurn.token);
//     displayPlayerWins(game.playerTurn, game.playerTurn.wins)
//     setResetTimer();
//     return;
//   }
//   var isDraw = game.checkForDraw();
//   if (isDraw) {
//     displayWinnerToken();
//     setResetTimer();
//     return;
//   }
//   if (!checkGridClick()) {
//   game.updatePlayerTurn()
//   displayPlayerTurn(game.playerTurn.token);
//   }
// }


//check if the grid was a cell
//if yes, check if its occupied (if not do nothing)
//if not occupied, update the cell with that token (DM and dom)
//then check for a winner
//if yes udpate dom and dM
//if not, check for a draw
//if yes, clear the board on dom and DM
//if not, just change the turns on dm and dom



//
// function targetBoardClick(event) {
//   var boxCell = event.target;
//   var isCellTaken = game.isCellOccupied(boxCell);
//   if (isCellTaken) {
//     return;
//   }
//   game.updateCell(boxCell);
//   displayGamePiece(boxCell)
//   var isWinner = game.checkForWinner();
//   if (isWinner) {
//     gameBoard.classList.add('disable');
//     displayWinnerToken(game.playerTurn.token);
//     displayPlayerWins(game.playerTurn, game.playerTurn.wins)
//     setResetTimer();
//     return;
//   }
//   var isDraw = game.checkForDraw();
//   if (isDraw) {
//     displayWinnerToken();
//     setResetTimer();
//     return;
//   }
//   game.updatePlayerTurn()
//   displayPlayerTurn(game.playerTurn.token);
// }






function displayGamePiece(boxCell) {
  if (boxCell.id === "gameBoard") {
    return;
  } else {
    boxCell.innerHTML = game.playerTurn.token;
  }
}


function displayWinnerToken(winner) {
  if (!winner) {
    mainHeading.innerText = "It's a draw!";
  } else {
    mainHeading.innerText = `${winner} won!`;
  }
}


function displayPlayerWins(player, number) {
  if (player === game.player1) {
    if (number === 1) {
      starWins.innerText = '1 win';
    } else {
      starWins.innerText = `${number} wins`;
    }
  }
  if (player === game.player2) {
    if (number === 1) {
      heartWins.innerText = '1 win';
    } else {
      heartWins.innerText = `${number} wins`;
    }
  }
}


function setResetTimer() {
  setTimeout(function(){resetBoard()}, 2000);
}


function resetGame() {
  game = new Game();
  game.updatePlayerWins(game.player1, 0);//data model
  game.updatePlayerWins(game.player2, 0);
  displayPlayerWins(game.player1, 0);//dom
  displayPlayerWins(game.player2, 0);
  displayPlayerTurn(game.player1.token);
  clearBoard();
  localStorage.clear();//local storage
}


function clearBoard() {
  for (var i = 0; i < boardBoxes.length; i++) {
    boardBoxes[i].innerHTML = " ";
  }
  game.resetBoardValues();
}


function resetBoard() {
  changeClickability('enable');
  game.updatePlayerTurn();
  displayPlayerTurn(game.playerTurn.token);
  clearBoard();
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}
