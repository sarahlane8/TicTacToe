// on page load, it will say it's star's turn! at the top
// it will initiate a new game instance
//   whose turn is it
//
// it will initiate 2 player instances

var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');


resetButton.addEventListener('click', resetGames);

// window.addEventListener('load', renderLocalStorageWins);


function resetGames() {
  //turns board empty
  //deletes all wins from local storage
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
