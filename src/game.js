
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
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
  checkForWinner() {
//iterate through game cells to see if 5 or more to start checking for winning conditions
  }

  updateCell(boxCell) {
    // console.log(this.boxes)
    // console.log(this.boxes[i].name);
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

  //   this[boxCell].occupied = true;
  //   if (this.playerTurn === this.player1) {
  //     this[boxCell].occupiedByPlayer = this.player1;
  //   } else {
  //     this[boxCell].occupiedByPlayer = this.player2;
}

    // console.log(game[boxCell])





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
