//when i start a new game, it always starts with the star icon
//change the name of start new game button

//*******************Document Queries*******************//
var resetButton = document.getElementById('resetBtn');
var clearBoardButton = document.getElementById('clearBoardBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');
var box = document.getElementById('box0');
var mainHeading = document.getElementById('mainHeading');
var boardBoxes = document.querySelectorAll('.box');


//*******************Variable*******************//
var game = new Game();


//*******************Event Listeners*******************//
window.addEventListener('load', renderLocalStorageWins);
gameBoard.addEventListener('click', targetBoardClick)
resetButton.addEventListener('click', resetGame);//change name here and in html
clearBoardButton.addEventListener('click', clearBoard);


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
    return;
  }
  game.updatePlayerTurn()
  displayPlayerTurn(game.playerTurn.token);
}


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


function setResetTimer() {
  setTimeout(function(){resetBoard()}, 2000);
}


function resetGame() {//need to update the data model with 0 wins per player
  game = new Game();//  do i need to keep this tp keep with the rubric?
  // resetBoard();
  //change to:
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

function resetBoard() {//update
  gameBoard.classList.remove('disable');
  game.updatePlayerTurn();
  displayPlayerTurn(game.playerTurn.token);
  // if (game.rounds % 2 === 0) {
  //   displayPlayerTurn(game.player1.token);
  // } else if (game.rounds % 2 === 1) {
  //   displayPlayerTurn(game.player2.token)
  // };
  // game.updatePlayerTurn();
  for (var i = 0; i < boardBoxes.length; i++) {
    boardBoxes[i].innerHTML = " ";
  }
  game.resetBoardValues();
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}
