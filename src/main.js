
// it will initiate a new game instance

//
// it will initiate 2 player instances

var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');

resetButton.addEventListener('click', resetGames);
gameBoard.addEventListener('click', targetBoardClick)

window.addEventListener('load', renderLocalStorageWins);

function renderLocalStorageWins() {
  // display the wins for each player on the top
  var game = new Game();
  console.log(game)
  //initiate 2 player instances
}



function resetGames() {
  //turns board empty
  //deletes all wins from local storage
}

// var cardEl = event.target.closest('.saved-cards');
// var cardId = cardEl && parseInt(cardEl.id);
// if (event.target.className === 'delete-card-x') {
//   deleteCard(cardId)
// }

//I need to target the grid on click, and check what the closest box was that was clicked on
function targetBoardClick(event) {
  // var gameGrid = event.target.closest('.game-board')
    // if (event.target.className === 'box0') {
      console.log("hello!")
    // }
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
