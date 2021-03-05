
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.cell0 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell1 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell2 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell3 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell4 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell5 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell6 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell7 = {
      occupied: false,
      occupiedByPlayer: null
    }
    this.cell8 = {
      occupied: false,
      occupiedByPlayer: null
    }
  }
  checkForWinner() {

  }
}
//compare the game board against any winning solutions
//if yes, push win to that players array
//update local storage method
//go to a new function to reset board


// A way to keep track of the data of the game board


//make a method that will pass in a parameter to make that particular cell false or true
