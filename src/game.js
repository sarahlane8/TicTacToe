
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.rounds = 0;
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
      if (this.boxes[i].name === boxCell.id && this.boxes[i].occupied === false) {
        this.boxes[i].occupied = true;
        this.boxes[i].occupiedByPlayer = this.playerTurn;
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
    this.checkForDraw()//is this the right place for this?
    for (var i = 0; i < winningCombos.length; i++) {//0,1,3,4,6
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      if (boxesOccupiedArray.includes(a) && boxesOccupiedArray.includes(b) && boxesOccupiedArray.includes(c)) {
        player.wins++;
        this.rounds++;
        return true;
      }
    }
}
    checkForDraw() {
      var totalBoxes = 0;
      for (var i = 0; i < this.boxes.length; i++) {
        if (this.boxes[i].occupied) {
          totalBoxes++;
        }
      }
      if (totalBoxes === 9) {
        displayWinnerToken();
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
  }
}
