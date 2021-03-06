
var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');
var box = document.getElementById('box0');//now use event delegation to do this
var mainHeading = document.getElementById('mainHeading');
var boxes = document.querySelectorAll('.box');

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
  game.updateCell(boxCell);
  var result = game.checkForWinner();
console.log(result);
  if (result === true) {
    // gameBoard.disable = true;///this doesn't work not a button!
    displayWinnerToken(game.playerTurn.token);
    console.log('line30')
    displayPlayerWins(game.playerTurn, game.playerTurn.wins)
    setResetTimer();
  }
}


function displayGamePiece(boxCell) {
  boxCell.innerHTML = game.playerTurn.token;
}


function displayWinnerToken(winner) {
  mainHeading.innerText = `${winner} won!`;
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
  setTimeout(function(){resetGame()}, 2000);
}

function resetGame() {
  game = new Game();
  resetBoard();
  deleteWinsFromLocalStorage()
}


function resetBoard() {
  // button.disable//
  if (game.rounds % 2 === 1) {
    displayPlayerTurn(game.player1.token);
  } else if (game.rounds % 2 === 0) {
    displayPlayerTurn(game.player2.token)
  };
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = " ";
  }
}


function deleteWinsFromLocalStorage() {
  //clear out local storage
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}
