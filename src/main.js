
var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');
var box = document.getElementById('box0');//now use event delegation to do this
var mainHeading = document.getElementById('mainHeading');
var boardBoxes = document.querySelectorAll('.box');

var game = new Game();

window.addEventListener('load', renderLocalStorageWins);
gameBoard.addEventListener('click', targetBoardClick)
resetButton.addEventListener('click', resetGame);

function renderLocalStorageWins() {
  //play retrieveWinsFromStorage
  //can this be combined with displaywins function?
  // display the wins for each player on the top
// box.innerText = "Heart"
}


function targetBoardClick(event) {
  var boxCell = event.target;
  var isCellTaken = game.isCellOccupied(boxCell);
  if (isCellTaken) {
    return;
  }
  game.updateCell(boxCell);
  displayGamePiece(boxCell)
  var isWinner = game.checkForWinner();
  if (isWinner) {
    gameBoard.classList.add('disable');
    displayWinnerToken(game.playerTurn.token);
    displayPlayerWins(game.playerTurn, game.playerTurn.wins)
    setResetTimer();
    return;
  }
  var isDraw = game.checkForDraw();
  if (isDraw) {
    displayWinnerToken();
    setResetTimer();
    // resetBoard();
    return;

  }
  //check if it's a drawm game
  //if it's a draw, we need to update player turn in dom and dm, we need to clear innerhtml board, clear the board in the data model
  game.updatePlayerTurn()//move to game js?//only if they clicked on an empty box
  displayPlayerTurn(game.playerTurn.token);
// displayWinnerToken();
}


//make function to check if cell is occupied,
//if occupied, don't let data model update
// make dom not clickable (change cursor?)
//return out


function displayGamePiece(boxCell) {
  boxCell.innerHTML = game.playerTurn.token;
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
// if (checkForWinner()) {
//   disable button
// }

function setResetTimer() {
  setTimeout(function(){resetBoard()}, 2000);
}

function resetGame() {
  game = new Game();
  resetBoard();
  deleteWinsFromLocalStorage()
}


function resetBoard() {
  gameBoard.classList.remove('disable');
  if (game.rounds % 2 === 0) {
    displayPlayerTurn(game.player1.token);
  } else if (game.rounds % 2 === 1) {
    displayPlayerTurn(game.player2.token)
  };
  game.updatePlayerTurn();//move to gamejs????
  for (var i = 0; i < boardBoxes.length; i++) {
    boardBoxes[i].innerHTML = " ";
  }
  game.resetBoardValues();
}


function deleteWinsFromLocalStorage() {
  //clear out local storage
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}
