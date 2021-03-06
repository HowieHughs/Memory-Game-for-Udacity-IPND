//Sources include Udacity (forums, starter code, resources), Google, and Youtube.

// Array of card images
const icons = ["fa fa-diamond", "fa fa-diamond",
               "fa fa-paper-plane-o", "fa fa-paper-plane-o",
               "fa fa-anchor", "fa fa-anchor",
               "fa fa-bolt", "fa fa-bolt",
               "fa fa-cube", "fa fa-cube",
               "fa fa-leaf", "fa fa-leaf",
               "fa fa-bicycle", "fa fa-bicycle",
               "fa fa-bomb", "fa fa-bomb"
             ];

let openCards = [];
let matchedCards = [];
let min = 0;
let sec = 0;
let timer;
let timerRunning = false;


// Create the deck
let cardsContainer = document.querySelector(".deck");

// Initialize the game
function initGame() {
    shuffleDeck();
    for (let i = 0; i < icons.length; i++) {
        let card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = "<i class='" + icons[i] + "'</i>";
        cardsContainer.appendChild(card);

        click(card);
    }
}


function click(card) {
  // Card Click event
    card.addEventListener("click", function() {

        startTimer();

        let currentCard = this;
        let previousCard = openCards[0];

        if(openCards.length === 1) {

            card.classList.add("open", "show", "disabled");
            openCards.push(this);

            //compare opened cards - match
            compare(currentCard, previousCard);
        // no open cards
        } else {
            card.classList.add("open", "show", "disabled");
            openCards.push(this);
        }


    });
}

//Checks for game completion
function isOver() {
    if (matchedCards.length === icons.length) {
        stopTimer();
        copyStats();
        toggleModal();
    }
}

initGame();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//card comparison
function compare(currentCard, previousCard) {
    if(currentCard.innerHTML === previousCard.innerHTML) {

    // match
        currentCard.classList.add("match");
        previousCard.classList.add("match");

        matchedCards.push(currentCard, previousCard);
        openCards = [];

        isOver();

    // no match
    } else {

        setTimeout(function () {
            currentCard.classList.remove("open", "show", "disabled");
            previousCard.classList.remove("open", "show", "disabled");
        }, 500);

        openCards = [];

    }

    addMove();
}

// Shuffle the deck
let deck = document.querySelector('.deck')

function shuffleDeck() {
    let cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
    let shuffledDeck = shuffle(cardsToShuffle);
    for (card of shuffledDeck) {
        deck.appendChild(card);
    }
}

shuffleDeck();


//Restart Button
let restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function() {
    // stop & reset timer
    stopTimer();
    timerContainer.innerHTML = "0:00";
    // Delete all cards from prev game
    cardsContainer.innerHTML = "";
    // reset related var (moves, matched cards)
    matchedCards = [];
    moves = 0;
    movesContainer.innerHTML = moves;
    starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
    //call InitGame to create new Game

    initGame();

    shuffleDeck();
});

//Count moves
const movesContainer = document.querySelector(".moves");
let moves = 0;
function addMove() {
    moves ++;
    movesContainer.innerHTML = moves;

    rating();
}


// Determine Star Rating
let starsContainer = document.querySelector(".stars");
function rating() {
    if(moves < 16) {
        starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
    } else if (moves >= 16 && moves <= 20) {
        starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
    } else {
        starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li>';
    }
}

// Timer function
let timerContainer = document.querySelector(".timer");

// start the timer
function startTimer() {
    if (timerRunning == false) {
        timer = setInterval(insertTime, 1000);
        timerRunning = true;
    } else {
        return;
    }
}

// stop the timer
function stopTimer() {
    clearInterval(timer);
    sec = 0;
    min = 0;
    timerRunning = false;
}

// insert time into time output html
function insertTime() {
    sec++;
    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (sec >= 60) {
    min++;
        sec = "00";
    }

    // display time
    timerContainer.innerHTML = min + ":" + sec;
}


// Transfer stats to win modal
function copyStats() {
    let timeStat = document.querySelector('.modal_time');
    let timeElapsed = document.querySelector('.timer').innerHTML;
    let movesStat = document.querySelector('.modal_moves');
    let starsStat = document.querySelector('.modal_stars');

    timeStat.innerHTML = 'Time = ' + timerContainer.innerHTML;
    movesStat.innerHTML = 'Moves = ' + movesContainer.innerHTML;
    starsStat.innerHTML = 'Stars = ' + starsContainer.innerHTML;
}

// Win modal
function toggleModal() {
    let modal = document.querySelector('.modal');
    modal.classList.toggle('hide');
}

// Modal Replay Button
let replayButton = document.querySelector('.modal_replay');
replayButton.addEventListener("click", function() {
    // stop & reset timer
    stopTimer();
    timerContainer.innerHTML = "0:00";
    // Delete all cards from prev game
    cardsContainer.innerHTML = "";
    // reset related var (moves, matched cards)
    matchedCards = [];
    moves = 0;
    movesContainer.innerHTML = moves;
    starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
    //call InitGame to create new Game

    initGame();
    shuffleDeck();
    toggleModal();
});
