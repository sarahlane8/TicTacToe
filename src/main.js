// on page load, it will say it's star's turn! at the top
// it will initiate a new game instance
//   whose turn is it
//
// it will initiate 2 player instances

var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');

resetButton.addEventListener('click', resetGames);
gameBoard.addEventListener('click', targetBoardClick)

// window.addEventListener('load', renderLocalStorageWins);


function resetGames() {
  //turns board empty
  //deletes all wins from local storage
}


function targetBoardClick(event) {
    if (event.target.className === 'box') {
      console.log("hello!")
    }
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
