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
startNewGameButton.addEventListener('click', startNewGame);


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
  if (!player1LSWins) {
    displayPlayerWins(game.player1, 0)
  }
  if (!player2LSWins) {
    displayPlayerWins(game.player2, 0)
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


function checkGridClick(event) {
  var boxCell = event.target;
  if (boxCell.id === 'gameBoard') {
    return;
  } else {
    game.isCellOccupied(boxCell);
  }
}


function displayGamePiece(boxCell) {
  if (boxCell.id === 'gameBoard') {
    return;
  } else {
    boxCell.innerHTML = game.playerTurn.token;
  }
}


function displayWinnerToken(winner) {
  if (!winner) {
    mainHeading.innerText = 'It's a draw!';
  } else {
    mainHeading.innerText = `${winner} won!`;
  }
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}


function setResetTimer() {
  setTimeout(function(){resetBoard()}, 2000);
}


function startNewGame() {
  game = new Game();
  game.updatePlayerWins(game.player1, 0);
  game.updatePlayerWins(game.player2, 0);
  displayPlayerTurn(game.player1.token);
  clearBoard();
  localStorage.clear();
  renderLocalStorageWins();
}


function changeClickability(command) {
  if (command === 'enable') {
    gameBoard.classList.remove('disable');
  } else if (command === 'disable') {
    gameBoard.classList.add('disable');
  }
}


function clearBoard() {
  for (var i = 0; i < boardBoxes.length; i++) {
    boardBoxes[i].innerHTML = ' ';
  }
  game.resetBoardValues();
}


function resetBoard() {
  changeClickability('enable');
  game.updatePlayerTurn();
  displayPlayerTurn(game.playerTurn.token);
  clearBoard();
}
