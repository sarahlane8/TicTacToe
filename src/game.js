
class Game {
  constructor() {
    this.player1 = new Player(1, '⭐️');
    this.player2 = new Player(2, '❤️');
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

  isCellOccupied(boxCell) {
    var index;
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].name === boxCell.id && this.boxes[i].occupied) {
        return;
      } else if (this.boxes[i].name === boxCell.id) {
        index = i;
        this.boxesOccupied++;
        displayGamePiece(boxCell);
        this.updateCell(i);
      }
    }
  }

  updateCell(i) {
    this.boxes[i].occupied = true;
    this.boxes[i].occupiedByPlayer = this.playerTurn;
    this.checkForWinner();
  }

  checkForWinner() {
    var player = this.playerTurn;
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
        player.wins++;
        player.saveWinsToStorage();
        displayWinnerToken(player.token);
        displayPlayerWins(player, player.wins);
        gameBoard.classList.add('disable');
        setResetTimer();
        return;
      }
    }
    this.checkForDraw();
  }

  checkForDraw() {
    if (this.boxesOccupied === 9) {
      displayWinnerToken();
      setResetTimer();
    } else {
      game.updatePlayerTurn()
      displayPlayerTurn(game.playerTurn.token);
    }
  }

  resetBoardValues() {
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].occupied = false;
      this.boxes[i].occupiedByPlayer = null;
      this.boxesOccupied = 0;
    }
  }

  updatePlayerTurn() {
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2;
    } else {
      this.playerTurn = this.player1;
    }
  }

  updatePlayerWins(player, wins) {
    player.wins = wins;
  }
}
