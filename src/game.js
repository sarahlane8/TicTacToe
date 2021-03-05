
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.boxesOccupied = 0;
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


  updateCell(boxCell) {//change game boxes to "occupied: true" and who it's occupied by
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].name === boxCell) {
        this.boxes[i].occupied = true;
        if (this.playerTurn === this.player1) {
          this.boxes[i].occupiedByPlayer = this.player1;
        } else {
          this.boxes[i].occupiedByPlayer = this.player2;
        }
      }
    }
  }

//split into 2 functions
  updatePlayerTurn(playerTurn) {
    this.boxesOccupied++;
    if (this.boxesOccupied >= 5) {
      game.countPlayerCells();
    }
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2;
    } else {
      this.playerTurn = this.player1;
    }
  }


  countPlayerCells() {
    var boxesOccupiedByPlayer1 = 0;
    var boxesOccupiedByPlayer2 = 0;
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].occupiedByPlayer === this.player1) {
        boxesOccupiedByPlayer1++;
      } else if (this.boxes[i].occupiedByPlayer === this.player2) {
        boxesOccupiedByPlayer2++;
      }
    }
    if (boxesOccupiedByPlayer1 > boxesOccupiedByPlayer2) {
      game.checkForWinner(this.player1);
    } else {
      game.checkForWinner(this.player2);
    }
  }


  checkForWinner(player) {
    var winningArray = [0,4,7,8];
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].occupiedByPlayer === player) {
        // console.log(this.boxes[i]);
        winningArray.push(i);
        // console.log(winningArray);
      }
//push game to that array
//innerText you've won!
//reset game method

  }
}

}
winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];





      //iterate through game cells to see if 5 or more to start checking for winning conditions
      // 1. boxes 0,1,2
      // 2. boxes 3,4,5
      // 3. boxes 6,7,8
      // 4. boxes 0,3,6
      // 5. boxes 1,4,7
      // 6. boxes 2,5,8
      // 7. boxes 0,4,8
      // 8. boxes 2,4,6








//compare the game board against any winning solutions
//if yes, push win to that players array
//update local storage method
//go to a new function to reset board



    // this.box0 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box1 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box2 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box3 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box4 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box5 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box6 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box7 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
    // this.box8 = {
    //   occupied: false,
    //   occupiedByPlayer: null
    // }
