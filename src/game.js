
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.box0 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box1 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box2 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box3 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box4 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box5 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box6 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box7 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.box8 = {
      occupied: false,
      occupiedByPlayer: null
    }
  }
  checkForWinner() {
//iterate through 
  }

  updateCell(boxCell) {
    this[boxCell].occupied = true;
    if (this.playerTurn === this.player1) {
      this[boxCell].occupiedByPlayer = this.player1;
    } else {
      this[boxCell].occupiedByPlayer = this.player2;
    }
  }

}
    // console.log(game[boxCell])





//compare the game board against any winning solutions
//if yes, push win to that players array
//update local storage method
//go to a new function to reset board


// A way to keep track of the data of the game board


//make a method that will pass in a parameter to make that particular cell false or true
