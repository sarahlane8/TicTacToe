
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.boxesOccupied = 0;
    this.boxes = [
      ({name: 'box0',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box1',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box2',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box3',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box4',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box5',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box6',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box7',
        occupied: false,
        occupiedByPlayer: null
      }),
      ({
        name: 'box8',
        occupied: false,
        occupiedByPlayer: null
      })
    ]
  }

  updatePlayerTurn() {
      (this.playerTurn === this.player1) ?
      this.playerTurn = this.player2: this.playerTurn = this.player1;
    }

  updateCell(boxCell) {
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].name === boxCell) {
        this.boxes[i].occupied = true;
        this.boxesOccupied++;
        (this.playerTurn === this.player1) ?
        this.boxes[i].occupiedByPlayer = this.player1:
        this.boxes[i].occupiedByPlayer = this.player2;
      }
    }
    if (this.boxes >= 5) {
      checkForWinner();
    }
  }

  checkForWinner() {
    console.log('hello!')
      //iterate through game cells to see if 5 or more to start checking for winning conditions
    }

  }








//compare the game board against any winning solutions
//if yes, push win to that players array
//update local storage method
//go to a new function to reset board


// A way to keep track of the data of the game board


//make a method that will pass in a parameter to make that particular cell false or true

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
