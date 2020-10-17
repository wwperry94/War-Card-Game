let playCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let trashCards = [];
let BeginGame = document.getElementById("begin-btn");

// Game Setup \\
function beginGame() {
    let playerOne = document.getElementById("player-one-input").value;
    let playerTwo = document.getElementById("player-two-input").value;
    if (playerOne !== null && playerTwo !== null) {
        document.getElementById('Player-One-Name').innerHTML = `${playerOne}`;
        document.getElementById('Player-Two-Name').innerHTML = `${playerTwo}`;
    };
};
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
BeginGame.addEventListener('click', () => {
    beginGame();
    p1Deck = document.getElementById('player-one-deck');
    p2Deck = document.getElementById('player-two-deck');
});
// function 

// Core \\
class Player {
    constructor(paName) {
        // this.playCards = playCards;
        // this.value = value;
        // let count = this.playCards.length,
        let playArea = document.getElementById(paName);
        //     fragment1 = document.createDocumentFragment();
        // for (let i = 0; i < count; i++) {
        //     let card = document.createElement('div');
        //     card.id = `${[this.playCards.length]}`;
        //     card.style.position = 'absolute';
        //     card.style.backgroundColor = "black";
        //     card.style.height = `150px`;
        //     card.style.width = `100px`;
        //     card.style.color = `red`;
        //     card.style.display = 'flex';
        //     card.style.justifyContent = 'center';
        //     card.style.alignItems = `center`;
        //     card.style.fontSize = `40px`;
        //     card.textContent = `P1`;
        //     fragment1.appendChild(card);
        // }
        // playArea.appendChild(fragment1);
    };
    random_item = () => {
        //this returns the card value
        console.log("play cards", playCards);
        let value = playCards[Math.floor(Math.random() * playCards.length)];
        console.log("value", value);
    };
    playCard = () => {
        // console.log("card val", this.value);
        this.random_item();
        // console.log("b4 splice, remaining cards", this.playCards)
        // let idx = this.playCards.indexOf(this.randomCard);
        // console.log("index of value", idx)
        // this.playCards.splice(idx, 1);
        // trashCards.push(this.randomCard);
        // console.log("p1 trash pile", trashCards);
        // console.log("after splice, remaining cards", this.playCards)
        // if (this.playCards.length == 0) {
        //     p1Deck.innerHTML = "Shuffle"
        // } else {
        //     p1Deck.innerHTML = this.randomCard;
        // };
    };
    // getValue = () => {
    //     return this.randomCard;
    // };
};
let p1 = new Player('player-one-deck');
let p2 = new Player('player-two-deck');

let flip = document.getElementById('play-btn');
flip.addEventListener('click', () => {
    p1.playCard();
    p2.playCard();
    // compareCards(p1.getValue(), p2.getValue());
});

function compareCards(val1, val2) {
    if (val1 > val2) {
        console.log("p1 wins");
        trashCards.push(val1, val2);
        console.log("val1", val1, "val2", val2);
    }
    else if (val2 > val1) {
        console.log("p2 wins");
    } else {
        console.log("war");
    }

};
