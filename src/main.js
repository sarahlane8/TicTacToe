
var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');
var box = document.getElementById('box0');//now use event delegation to do this
var mainHeading = document.getElementById('mainHeading');

var game = new Game();


window.addEventListener('load', renderLocalStorageWins);
gameBoard.addEventListener('click', targetBoardClick)
resetButton.addEventListener('click', resetGame);




function renderLocalStorageWins() {
  // display the wins for each player on the top

// box.innerText = "Heart"

}


function targetBoardClick(event) {
  var boxCell = event.target;
  game.updateCell(boxCell);
  // displayGamePiece(boxCell); here isntead of game.js line 60?
}


function displayGamePiece(boxCell) {
    boxCell.innerHTML = game.playerTurn.token;
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}


function displayWinnerToken(winner) {
    mainHeading.innerText = `${winner} won!`;
}


function resetGame() {
  resetBoard();
  deleteWinsFromLocalStorage()
  var game = new Game();
}


function resetBoard() {
  // mainHeading.innerText =
//make board empty and main
}


function deleteWinsFromLocalStorage() {
//clear out local storage
}


function displayPlayerWins(player, number) {//not invoked yet
  if (player === player1) {
    if (number === 1) {
      starWins.innerText = '1 win';
    } else {
      starWins.innerText = `${number} wins`;
    }
    if (player === player2) {
      if (number === 1) {
        heartWins.innerText = '1 win';
      } else {
        heartWins.innerText = `${number} wins`;
      }
    }
  }
}
