
var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');
var box = document.getElementById('box0');//now use event delegation to do this

var game = new Game();


window.addEventListener('load', renderLocalStorageWins);
gameBoard.addEventListener('click', targetBoardClick)
resetButton.addEventListener('click', resetGames);




function renderLocalStorageWins() {
  // display the wins for each player on the top

// box.innerText = "Heart"
  //initiate 2 player instances
}

function resetGames() {
  var game = new Game();
  //turns board empty//invoke the display board fx which will match data model so it will be empty
  //deletes all wins from local storage
}


function targetBoardClick(event) {
  var boxCell = event.target.id;
  game.updateCell(boxCell)
  game.updatePlayerTurn(game.playerTurn);
}


function displayPlayerWins(player, number) {
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
