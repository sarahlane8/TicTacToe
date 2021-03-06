
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.rounds = 0; //odd start player1, even start player 2
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
        displayGamePiece(boxCell);//MOVE TO JS SOMEHOW???*************
        this.boxes[i].occupiedByPlayer = this.playerTurn;
        this.checkForWinner();
      }
    }
  }

  checkForWinner() {
    var player;
    if (this.playerTurn === this.player1) {
      player = this.player1;
    } else {
      player = this.player2;
    }
    var boxesOccupiedArray = [];
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].occupiedByPlayer === player) {
        boxesOccupiedArray.push(i);
      }
    }
    this.checkForDraw()
    for (var i = 0; i < winningCombos.length; i++) {
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      if (boxesOccupiedArray.includes(a) && boxesOccupiedArray.includes(b) && boxesOccupiedArray.includes(c)) {
        console.log('hello');
          player.wins++;
          this.rounds++;
          return true;
      }
    }
}
    checkForDraw() {
      var totalBoxes = 0;
      for (var i = 0; i < this.boxes.length; i++) {
        if (this.boxes[i].occupied === true) {
          totalBoxes++;
        }
      }
      // console.log(totalBoxes, "99");
      if (totalBoxes === 9) {
        displayWinnerToken("draw");
      }
    }
    resetBoardValues() {
      for (var i = 0; i < this.boxes.length; i++) {
        this.boxes[i].occupied = false;
        this.boxes[i].occupiedByPlayer = null;
      }
    }


        // this.updatePlayerTurn();//only run if there was no winner!! ****************
        // return false;
          //update local storage player.saveWinsToStorage();


  updatePlayerTurn() {
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2;
    } else {
      this.playerTurn = this.player1;
    }
    displayPlayerTurn(this.playerTurn.token);//move to main JS????
  }
}
