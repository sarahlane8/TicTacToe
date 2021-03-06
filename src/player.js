class Player {
  constructor(token) {
    this.id = Math.floor(Math.random() * Math.floor(999999999));
    this.token = token;
    this.wins = 0;
    //pass in this.turn = false default? but you don't want to change this from the game class
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
}
