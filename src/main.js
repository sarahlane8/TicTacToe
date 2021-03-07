
var resetButton = document.getElementById('resetBtn');
var starWins = document.getElementById('starWins');
var heartWins = document.getElementById('heartWins');
var gameBoard = document.getElementById('gameBoard');
var box = document.getElementById('box0');//now use event delegation to do this
var mainHeading = document.getElementById('mainHeading');
var boardBoxes = document.querySelectorAll('.box');

var game = new Game();

window.addEventListener('load', renderLocalStorageWins);
gameBoard.addEventListener('click', targetBoardClick)
resetButton.addEventListener('click', resetGame);

function renderLocalStorageWins() {
var player1LSWins = game.player1.retrieveWinsFromStorage(game.player1.id);
var player2LSWins = game.player2.retrieveWinsFromStorage(game.player2.id);
game.updatePlayerWins(game.player1, player1LSWins)
game.updatePlayerWins(game.player2, player2LSWins)//udpate DM
//updateDOM
}


//add a condtional? what if there's nothign in local storagE?
  // displayPlayerWins(gameStored.)


  //play retrieveWinsFromStorage
  //can this be combined with displaywins function?
  // display the wins for each player on the top
// box.innerText = "Heart"
// }


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
  game.updatePlayerTurn()//move to game js?//only if they clicked on an empty box
  displayPlayerTurn(game.playerTurn.token);
  // player.saveWinsToStorage();
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


function resetGame() {
  game = new Game();
  resetBoard();
  localStorage.clear();
}


function resetBoard() {
  gameBoard.classList.remove('disable');
  if (game.rounds % 2 === 0) {
    displayPlayerTurn(game.player1.token);
  } else if (game.rounds % 2 === 1) {
    displayPlayerTurn(game.player2.token)
  };
  game.updatePlayerTurn();//move to gamejs????
  for (var i = 0; i < boardBoxes.length; i++) {
    boardBoxes[i].innerHTML = " ";
  }
  game.resetBoardValues();
}


function displayPlayerTurn(player) {
  mainHeading.innerText = `It's ${player}'s turn!`;
}
