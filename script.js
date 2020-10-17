
let trashCards = [];
let BeginGame = document.getElementById("begin-btn");
let p1Deck = document.getElementById('player-one-deck');
let p2Deck = document.getElementById('player-two-deck');
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
});
// function 

// Core \\
class Player {
    constructor(paName, pArea) {
        this.pArea = pArea;
        // this.deckArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.deckArr = [2, 3, 10, 12, 14];
        this.trashArr = [];
    };
    random_item = () => {
        let value = this.deckArr[Math.floor(Math.random() * this.deckArr.length)];
        return value;
    };
    playCard = () => {
        let value = this.getValue()[0];
        if (value) {
            console.log("this.value", value);
            let idx = this.deckArr.indexOf(value);
            this.deckArr.splice(idx, 1);
            this.trashArr.push(value);
            // console.log("trash", this.trashArr);
            // console.log("after splice, remaining cards", this.deckArr);
            if (this.deckArr.length == 0) {
                this.pArea.innerHTML = "Shuffle!"
            } else {
                this.pArea.innerHTML = value;
            };
        }; 
    };
    getValue = () => {
        let arr = [this.random_item(), this.trashArr];
        // console.log("value", arr[0], "trash array", arr[1]);
        return arr;
    };
};
let p1 = new Player('player-one-deck', p1Deck);
let p2 = new Player('player-two-deck', p2Deck);

let flip = document.getElementById('play-btn');
flip.addEventListener('click', () => {
    p1.playCard();
    p2.playCard();
    compareCards(p1.getValue()[0], p2.getValue()[0]);
});

function compareCards(val1, val2) {
    if (val1 > val2) {
        console.log("p1 wins");
        // console.log("val1", val1, "val2", val2);
    }
    else if (val2 > val1) {
        console.log("p2 wins");
    } else {
        console.log("war");
    }

};
