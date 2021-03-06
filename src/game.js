
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.boxesOccupied = 0;
    // this.winner = null;///do i need this?
    this.boxes = [
      {name: 'box0',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box1',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box2',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box3',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box4',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box5',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box6',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box7',
        occupied: false,
        occupiedByPlayer: null
      },
      {
        name: 'box8',
        occupied: false,
        occupiedByPlayer: null
      }
    ]
  }

  updateCell(boxCell) {
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].name === boxCell.id && !this.boxes[i].occupied) {
        this.boxes[i].occupied = true;
        displayGamePiece(boxCell);
        this.boxes[i].occupiedByPlayer = this.playerTurn;
        this.updatePlayerBoxCount();
        this.updatePlayerTurn();//how do i get this to run only if there was no winner?
      }
    }
  }

  updatePlayerBoxCount() {
    this.boxesOccupied++;
    if (this.boxesOccupied >= 5) {
      if (this.playerTurn === this.player1) {
        this.checkForWinner(this.player1);
      } else {
        this.checkForWinner(this.player2);
      }
    //   game.countPlayerCells();
    }
  }

  updatePlayerTurn() {
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2;
    } else {
      this.playerTurn = this.player1;
    }
    displayPlayerTurn(this.playerTurn.token);
  }

  // countPlayerCells() {
  //   var boxesOccupiedByPlayer1 = 0;
  //   var boxesOccupiedByPlayer2 = 0;
  //   for (var i = 0; i < this.boxes.length; i++) {
  //     if (this.boxes[i].occupiedByPlayer === this.player1) {
  //       boxesOccupiedByPlayer1++;
  //     } else if (this.boxes[i].occupiedByPlayer === this.player2) {
  //       boxesOccupiedByPlayer2++;
  //     }
  //   }
  //   // console.log(boxesOccupiedByPlayer1);
  //   // console.log(boxesOccupiedByPlayer2);
  //   if (boxesOccupiedByPlayer1 > boxesOccupiedByPlayer2) {//not who has more, whose turn it is
  //     game.checkForWinner(this.player1);
  //   } else {
  //     game.checkForWinner(this.player2);
  //   }
  // }

  checkForWinner(player) {
    var boxesOccupiedArray = [];
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].occupiedByPlayer === player) {
        boxesOccupiedArray.push(i);
      }
    }
    for (var i = 0; i < winningCombos.length; i++) {
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      if (boxesOccupiedArray.includes(a) && boxesOccupiedArray.includes(b) && boxesOccupiedArray.includes(c)) {
          player.wins.push(game);
          displayWinnerToken(player.token);
          displayPlayerWins(player, player.wins.length);
          // return;
          resetBoard();
          //update local storage player.saveWinsToStorage();
          //end the function
      }
      // this.updatePlayerTurn()
    // }
  }
}
}
