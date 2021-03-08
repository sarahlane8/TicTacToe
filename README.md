# Tic-Tac-Toe

Welcome to my version of Tic-Tac-Toe!  Enjoy playing this favorite from my childhood which uses logic and strategy to win against an opponent! 

This game was built from scratch, and helped to solidify the follow concepts:
- creating DRY JavaScript
- utilizing localStorage to persist data
- using event delegation to handle similar event listeners
- keeping the data model and DOM manipulation updated, but separate
- iterating through DOM elements with for loops
- employing problem solving process to break down large problems, solving things step by step, and trusting myself to work through the logic!

---------------------------------------------------------------------

## Overview

Tic-Tac-Toe involves taking turns choosing a cell within a grid and marking it with your token.  Get 3 cells in a row either horizontally, vertically, or diagonally to win!   

The game will default to Player 1 going first, and you will see this displayed at the top.  It will also show the number of wins for each player on either side of the page.

<img width="1423" alt="blank gameboard" src="https://user-images.githubusercontent.com/70901622/110263738-cdc36280-7f74-11eb-9861-78d9218fdb3b.png">

You will see the player's turn being updated at the top of the page as the round progresses, so you always know whose turn it is!

<img width="534" alt="gameboard updating with different player's token" src="https://user-images.githubusercontent.com/70901622/110263747-d3b94380-7f74-11eb-942f-a39788bffb59.png">

Finally, when a player achieves 3 cells in a row, a message will display to say which player is the winner, and that player's win count will be updated on the side of the page.  The board will automatically reset to an empty board, and player who went first will now go second.

<img width="1247" alt="winner displayed at top of page" src="https://user-images.githubusercontent.com/70901622/110263753-d61b9d80-7f74-11eb-959f-69a44db3918a.png">

If a game board is filled, and there is no winner, a message will display to say the game ended in a draw, neither player's wins will be updated, and the gameboard will automatically reset so that you can play again!

<img width="1248" alt="draw message displayed at top of page" src="https://user-images.githubusercontent.com/70901622/110263761-dae05180-7f74-11eb-9be0-77cbf0dfdeab.png">

Each player's wins will be added to localStorage, so upon page refresh, it will retreive that information and reflect the amount of wins each player has on either the side of the page.

Two buttons exists for your benefit.  First, the Clear Board button allows you to end the round you are currently playing and restart by clearing the board.  Second, the Reset Game button allows you to restart the game with 2 new players, and will clear out localStorage.

Once you click on a cell, it cannot be undone, so choose carefully!  Similarly, your opponent cannot click on your cell after you choose it and claim it for their own.  

After a win has been determined, the gameboard will be disabled while the game is automatically restarting itself.  You will not be able to choose an empty cell after a winner has been determined.  

-------------------------------------------------------------------

## Project Logic

The data model is updated using a Game class and a Player class, with 2 Player instances being created with each Game instance.  The DOM is updated based on the data model information.

-----------------------------------------------------------------

## Contributor
- Sarah Lane https://github.com/sarahlane8

### Languages
- HTML
- CSS
- JavaScript
-
### Resources
- GitHub repository
- GitHub Projects
- Atom Text Editor
- Research sources: MDN, StackOverflow

-----------------------------------------------------------------

Project Repository  
https://github.com/sarahlane8/TicTacToe  
GitHub Pages  
To be deployed upon project due date
