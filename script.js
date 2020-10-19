let p1Trash = [];
let p2Trash = [];
// let p1Cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let p2Cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let p1Cards = [2, 3, 12, 13, 14];
let p2Cards = [2, 3, 12, 13, 14];


let BeginGame = document.getElementById("begin-btn");
let p1Deck = document.getElementById('player-one-deck');
let p2Deck = document.getElementById('player-two-deck');
// Game Setup \\

BeginGame.addEventListener('click', () => {
    beginGame();
});
// function 

// Core \\
class Player {
    constructor(paName, pArea, tArr, cardsArr) {
        this.pArea = pArea;
        // this.cardsArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.cardsArr = cardsArr;
        this.trashArr = tArr;
    };
    random_item = () => {
        let value = this.cardsArr[Math.floor(Math.random() * this.cardsArr.length)];
        return value;
    };
    playCard = () => {
        let value = this.random_item();//this.getValue()[0];
        if (this.cardsArr.length == 0 && this.trashArr.length == 0) {
            alert("You Lose");
        };
        if (value) {
            // console.log("this value", value);
            let idx = this.cardsArr.indexOf(value);
            this.cardsArr.splice(idx, 1);
            // this.trashArr.push(value);
            // console.log("trash", this.trashArr);
            // console.log("after splice, remaining cards", this.cardsArr);
            if (this.cardsArr.length == 0) {
                this.pArea.innerHTML = "Shuffle!"
            } else {
                this.pArea.innerHTML = value;
            };
            return value;
        };
    };
    shuffle = () => {
        let currentIndex = this.trashArr.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = this.trashArr[currentIndex];
            this.trashArr[currentIndex] = this.trashArr[randomIndex];
            this.trashArr[randomIndex] = temporaryValue;
        }
        // console.log("shuffled");
        console.log("shuffed", this.trashArr);
        this.cardsArr = this.trashArr;
        console.log("OG Deck", this.cardsArr);
        this.pArea.innerHTML = "";
        // return this.trashArr;
    };
};
let p1 = new Player('player-one-deck', p1Deck, p1Trash, p1Cards);
let p2 = new Player('player-two-deck', p2Deck, p2Trash, p2Cards);

let flip = document.getElementById('play-btn');
flip.addEventListener('click', () => {
    compareCards(p1.playCard(), p2.playCard());
});
let p1Shuffle = document.getElementById('shuffle1-btn');
let p2Shuffle = document.getElementById('shuffle2-btn');

p1Shuffle.addEventListener('click', () => {
    // console.log("not shuff", p1Trash);
    p1.shuffle(p1Trash)
});
p2Shuffle.addEventListener('click', () => {
    // console.log("not shuff", p1Trash);
    p2.shuffle(p2Trash)
});
function compareCards(val1, val2) {
    // if (val1 !== undefined && val2 !== undefined) {
        if (val1 > val2) {
            console.log("p1 wins");
            p1Trash.push(val1, val2);

        } else if (val2 == val1) {
            console.log("war");
        } else {
            console.log("p2 wins");
            p2Trash.push(val1, val2);
        }
    // } 
    // else {
    //     alert("reset the game");
    // };
};
function beginGame() {
    let playerOne = document.getElementById("player-one-input").value;
    let playerTwo = document.getElementById("player-two-input").value;
    if (playerOne !== null && playerTwo !== null) {
        document.getElementById('Player-One-Name').innerHTML = `${playerOne}`;
        document.getElementById('Player-Two-Name').innerHTML = `${playerTwo}`;
    };
};