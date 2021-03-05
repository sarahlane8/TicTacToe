
class Game {
  constructor() {
    this.player1 = new Player("⭐️");
    this.player2 = new Player("❤️");
    this.playerTurn = this.player1;
    this.boxesOccupiedByPlayer1 = 0;
    this.boxesOccupiedByPlayer2 = 0;
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

  updateCell(boxCell) {//change game boxes to "occupied: true" and who it's occupied by
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].name === boxCell) {
        this.boxes[i].occupied = true;
        (this.playerTurn === this.player1) ?
        this.boxes[i].occupiedByPlayer = this.player1:
        this.boxes[i].occupiedByPlayer = this.player2;
      }
      // && this.boxesOccupiedByPlayer1++:
    }
    if (this.boxesOccupiedByPlayer1 >= 3) {//
      game.checkForWinner(this.Player1);
    } else if (this.boxesOccupiedByPlayer2 >= 3) {
      game.checkForWinner(this.Player2);
    }
  }

  updatePlayerTurn(playerTurn) {
    if (playerTurn === this.player1) {
      this.boxesOccupiedByPlayer1++;
      // console.log(this.boxesOccupiedByPlayer1);
    } else {
      this.boxesOccupiedByPlayer2++;
      // console.log(this.boxesOccupiedByPlayer2);
    }
    (this.playerTurn === this.player1) ?
    this.playerTurn = this.player2: this.playerTurn = this.player1;
    }
  }


  checkForWinner(player) {
    var winningArray= [];
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].occupiedByPlayer === player) {
        winningArray.push(this.boxes[i].name);
        console.log(winningArray);

      }
//push game to that array
//innerText you've won!
//reset game
    }
  }

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
