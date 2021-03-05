
var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');
var box = document.getElementById('box0')//now use event delegation to do this
resetButton.addEventListener('click', resetGames);
gameBoard.addEventListener('click', targetBoardClick)

window.addEventListener('load', renderLocalStorageWins);

function renderLocalStorageWins() {
  // display the wins for each player on the top
  var game = new Game();
  console.log(game)

// box.innerText = "Heart"
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
  var boxCell = event.target.closest('.game-board')
  console.log(boxCell);
    // if (event.target.className === 'box0') {
      // console.log("hello!")
      if (boxCell === 'box0') {
     console.log("heart");
   }
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
