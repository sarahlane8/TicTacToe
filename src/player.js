class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    //pass in this.turn = false default? but you don't want to change this from the game class
  }

  saveWinsToStorage() {
    localStorage.setItem(game.playerTurn.id, game.playerTurn.wins);
  }

  retrieveWinsFromStorage(playerID) {
    var numberOfWins = localStorage.getItem(playerID);
    return numberOfWins;
    // console.log(numberOfWins);

    // var numberOfWins = localStorage.getItem(player);
    // renderLocalStorageWins(player, numberOfWins);
  }
}


//first save to local storagE
//then retreive from local storage
//then render the numbers to page in main js render function
