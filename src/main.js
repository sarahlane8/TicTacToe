
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
  //see last function below, use that instead?
  // display the wins for each player on the top

// box.innerText = "Heart"

}


function targetBoardClick(event) {
  var boxCell = event.target;
  game.updateCell(boxCell);
  console.log(boxCell);
  // displayGamePiece(boxCell); here isntead of game.js line 60?
}


function displayGamePiece(boxCell) {
  // console.log(game.playerTurn);
    boxCell.innerHTML = game.playerTurn.token;
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}


function displayWinnerToken(winner) {
    mainHeading.innerText = `${winner} won!`;
}


function resetGame() {
  game = new Game();
  resetBoard();
  deleteWinsFromLocalStorage()
}


function resetBoard() {//************************
  displayPlayerTurn(game.player1.token);
  for (var i = 0; i< game.boxes.length; i++) {
//clear out the board!
  }
}


function deleteWinsFromLocalStorage() {
//clear out local storage
}


function displayPlayerWins(player, number) {//not invoked yet
  if (player === game.player1) {
    if (number === 1) {
      starWins.innerText = '1 win';
    } else {
      starWins.innerText = `${number} wins`;
    }
    if (player === game.player2) {
      if (number === 1) {
        heartWins.innerText = '1 win';
      } else {
        heartWins.innerText = `${number} wins`;
      }
    }
  }
}
