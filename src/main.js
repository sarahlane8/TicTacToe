// on page load, it will say it's star's turn! at the top
// it will initiate a new game instance
//   whose turn is it
//
// it will initiate 2 player instances

var resetButton = document.querySelector('.reset-btn');

resetButton.addEventListener('click', resetGames);

// window.addEventListener('load', renderLocalStorageWins);


function resetGames() {
  //turns board empty
  //deletes all wins from local storage
  console.log("it works!");
}
