# Memory-Game-for-Udacity-IPND

## Project Description
This is the final project in the Front-End Web Development section of the Udacity Intro to Programming Nanodegree. This project will demonstrate proficiency of HTML, CSS and Javascript by creating a complete browser-based card matching game.

## Launching the Game
Download the project zip file or clone the repo to your computer and open the index.html file in a browser. Alternatively, click [here](http://htmlpreview.github.io/?https://github.com/HowieHughs/Memory-Game-for-Udacity-IPND/blob/master/index.html).

## How To Play
The game board consists of a deck of sixteen cards arranged in a grid. The deck consists of eight different pairs of cards, with images on one side. The cards are arranged randomly on the grid with the images hidden. The star rating at the top left reflects the player's performance, with more moves resulting in fewer stars. The moves counter shows the current number of moves made by the player, while the timer shows the elapsed time during the game. The restart button allows the player to reset the game board, star rating, moves, and the timer.

![Image of BlankBoard](https://github.com/HowieHughs/Memory-Game-for-Udacity-IPND/blob/master/img/1BlankBoard.PNG)

The game starts when the player clicks on the first card, revealing the image for that card. The goal is to reveal two images at a time to locate images that match. If two revealed cards match, the cards will remain revealed and their backgrounds will change to an aqua color.

![Image of Match](https://github.com/HowieHughs/Memory-Game-for-Udacity-IPND/blob/master/img/2Match.PNG)

If the cards do not match, the background of the cards stays blue for a short time, and then the images will be hidden again.

![Image of NoMatch](https://github.com/HowieHughs/Memory-Game-for-Udacity-IPND/blob/master/img/3NoMatch.PNG)

Upon completion of the game, a new screen appears to congratulate the player and displays the player's time to complete the game, number of moves, and star rating. There is also a replay button that will close the congratulation screen, reset the game, and allow the player to play again.

![Image of WinModal](https://github.com/HowieHughs/Memory-Game-for-Udacity-IPND/blob/master/img/4WinModal.PNG)

## Resources
### jQuery 
- https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
### Bootstrap/Font Awesome 4
- https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css
### Coda Web Fonts
- https://fonts.googleapis.com/css?family=Coda
### Timer
- http://learnwebsitedesign.com/tutorials/javascript-stopwatch-code-tutorial.php
### Shuffling the Deck
- http://stackoverflow.com/a/2450976
### Udacity Resources
- [Front End Course](https://classroom.udacity.com/nanodegrees/nd000/parts/95029f6c-33fb-4dd0-b200-ad40da075a8d)
- [Starter Code](https://github.com/udacity/fend-project-memory-game)
- [Project Resources](https://www.diigo.com/outliner/fii42b/Udacity-Memory-Game-Project?key=dwj0y5x9cw)
- [Forums](https://discussions.udacity.com/c/nd000-choose-your-path/front-end-developer)

