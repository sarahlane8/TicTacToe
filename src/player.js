class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(game.playerTurn.id, game.playerTurn.wins);
  }

  retrieveWinsFromStorage(playerID) {
    var numberOfWins = JSON.parse(localStorage.getItem(playerID));
    return numberOfWins;
  }
}
